import { TIndexConfig, TIndexData, TIndexDataBatch, TIndexes, TIndexSearch } from "./src/@types/TIndexData";
import { TIndexConfigResponse, TIndexDataBatchResponse, TIndexDataCountResponse, TIndexDataDeletionResponse, TIndexDataResponse, TIndexDeleteResponse, TIndexSearchResponse } from "./src/@types/TResponse";
export default class Scout {
    private api;
    private server_address;
    constructor(server_address: string);
    indexes(): Promise<TIndexes>;
    insert(object: TIndexData): Promise<TIndexDataResponse>;
    bulk_insert(object: TIndexDataBatch): Promise<TIndexDataBatchResponse>;
    update_config(object: TIndexConfig): Promise<TIndexConfigResponse>;
    get_count(index: string): Promise<TIndexDataCountResponse>;
    search(query: TIndexSearch): Promise<TIndexSearchResponse>;
    delete_index(name: string): Promise<TIndexDeleteResponse>;
    delete_index_data(name: string, uid: string): Promise<TIndexDataDeletionResponse>;
}
