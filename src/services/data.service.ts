import { ICast, ISeries, ISeriesData } from '../types/series.type'
import api from './api'

const seriesDataService = {
    getAll: (p: number) => api.get<ISeries[]>(`/shows?page=${p}`),
    getSearch: (q: string) =>  api.get<ISeriesData[]>(`/search/shows?q=${q}`),
    get: (id: string) =>  api.get<ISeries>(`/shows/${id}`),
    getCasts: (id: string) =>  api.get<ICast[]>(`/shows/${id}/cast`)
}

export default seriesDataService