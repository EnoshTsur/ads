import { Ad } from "../types/Ad";

export const ads: Array<Ad> = [
    {
        id: '1',
        description: "Summer Fun",
        imageUrl: "http://cool.com/1.gif",
        targeting: {
            location: {
                lat: 2.1,
                long: 2.3,
                radius: 3.7
            },
            operatingSystem: ['linux', 'windows'],
            browsers: ['chrome', 'edge'],
            tags: ['sport', 'fun']
        }
    },
    {
        id: '2',
        description: "Winter Fun",
        imageUrl: "http://cool.com/2.gif",
        targeting: {
            location: {
                lat: 2.1,
                long: 2.3,
                radius: 3.7
            },
            operatingSystem: ['linux', 'android'],
            browsers: ['chrome', 'explorer'],
            tags: ['computer', 'fun']
        }
    },
    {
        id: '3',
        description: "Climbing Gym",
        imageUrl: "http://cool.com/3.gif",
        targeting: {
            location: {
                lat: 2.1,
                long: 2.3,
                radius: 3.7
            },
            operatingSystem: ['ios', 'windows'],
            browsers: ['chrome'],
            tags: ['sport']
        }
    },
]