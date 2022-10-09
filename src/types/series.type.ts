export type ISeries = {
    id?: number | null;
    url: string;
    name: string;
    summary: string;
    image: {
        medium: string;
        original: string;
    };
    [key: string]: any;
}

export type ICast = {
    name: string;
    character: {
        name: string;
        image: {
            medium: string;
            original: string;
        };
    };
    [key: string]: any;
}

export type StateContextType = {
        term?: string;
        details?: ISeries;
        data?: ISeries[];
        defaultData?: ISeries[];
        status: string;
        error?: string;
    }

export type ActionContextType =
    | { type: 'request' }
    | { type: 'set_param', payload: string }
    | { type: 'set_details', resultDetails: ISeries }
    | { type: 'set_default', resultsDefault: ISeries[] }
    | { type: 'success', results: ISeries[] }
    | { type: 'failure', error: string };

export type MemoizedSearch = {
    term: string;
    data: ISeriesData[];
}

export interface ISeriesData {
    score?: number | null,
    show: ISeries
}
  