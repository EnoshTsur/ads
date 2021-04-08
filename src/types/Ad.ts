export type Location = {
    lat: number,
    long: number,
    radius: number,
}

export type Targeting = {
    location: Location,
    operatingSystem: Array<string>,
    browsers: Array<string>,
    tags: Array<string>
}

export type Ad = {
    id: string,
    description: string,
    imageUrl: string,
    targeting: Targeting,
}