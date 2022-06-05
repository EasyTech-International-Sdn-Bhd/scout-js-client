import {TError} from "./TError";
import {TDynamicObject} from "./TInternal";

export type TIndexSearchData = {
    data: TDynamicObject,
    score: number
}

export type TResponse = {
    err: TError | null,
    status: boolean
}

export type TIndexDataBatchResponse = {
    index: string,
    count: number,
    execution: string,
    fetch: string
}

export type TIndexDataResponse = {
    index: string,
    uid: string,
    status: boolean,
    execution: string,
    fetch: string
}

export type TIndexConfigResponse = {
    index: string,
    status: boolean,
    execution: string,
    fetch: string
}

export type TIndexDataCountResponse = {
    index: string,
    count: number,
    execution: string,
    fetch: string
}

export type TIndexSearchResponse = {
    index: string,
    hits: number,
    nb_hits: number,
    data: TIndexSearchData[],
    execution: string,
    fetch: string
}

export type TIndexDeleteResponse = {
    status: boolean,
    execution: string,
    fetch: string
}

export type TIndexDataDeletionResponse = {
    status: boolean,
    uid: string,
    execution: string,
    fetch: string
}

export type TIndexDataBatchDeletionResponse = {
    status: boolean,
    uid: string[],
    execution: string,
    fetch: string
}
