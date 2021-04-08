import { isNullIn } from "../common/utils";
import { QueryParams } from "../types/QueryParams";
import { ads, } from '../mock/ads'
import { Coordinate } from "../types/Coordinate";
import { Ad } from "../types/Ad";

export function matchAd({ lat, long, tags, }: QueryParams): Ad {
    if (isNullIn(lat, long, tags)) {
        throw Error("Query params cannot be null")
    }

    const userTags = new Set(tags)

    const adsBydistance = ads
        .filter(({ targeting }) => filterBySingle(targeting.location.radius)(lat, targeting.location.lat))
        .filter(({ targeting }) => filterBySingle(targeting.location.radius)(long, targeting.location.long))
        .filter(({ targeting }) => filterByDistance(targeting.location.radius)({ lat, long }, targeting.location))

    return adsBydistance
        .reduce((result: any, ad: any) => {
            const matchTags = ad.targeting.tags.filter((tag: string) => userTags.has(tag)).length
            return matchTags > result.matchTags ?
                ({ ad, matchTags }) :
                result
        }, { ad: null, matchTags: 0 })
        .ad

}

function filterBySingle(maxRadius: number): (userCoord: number, adCoord: number) => boolean {
    return (userCoord, adCoord) => {
        const vector = userCoord > adCoord ? 1 : -1
        return (userCoord - adCoord) * vector <= maxRadius
    }
}

function filterByDistance(maxRadius: number): (userCoords: Coordinate, adCoords: Coordinate) => boolean {
    return (userCoords, adCoords) => {
        const latComponent = Math.pow((userCoords.lat - adCoords.lat), 2)
        const longComponent = Math.pow((userCoords.long - adCoords.long), 2)
        return Math.sqrt(latComponent + longComponent) <= maxRadius
    }
}

