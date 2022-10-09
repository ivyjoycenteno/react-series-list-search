import { ICast, ISeries } from '../types/series.type'

export const initialInfo: ISeries = {
    url: '',
    name: '',
    summary: '',
    image: {
        medium: '',
        original: '',
    },
    schedule: {
        days: [],
        time: '',
    },
    status: '',
    officialSite: '',
    type: '',
    genres: [],
    webChannel: null,
}

export const initCasts: ICast = {
    name: '',
    character: {
        name: '',
        image: {
            medium: '',
            original: '',
        },
    },
}

