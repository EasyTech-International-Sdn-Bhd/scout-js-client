import {TIndexConfig, TIndexData, TIndexDataBatch, TIndexes, TIndexSearch} from "./src/@types/TIndexData";
import {
    TIndexConfigResponse,
    TIndexDataBatchResponse,
    TIndexDataCountResponse,
    TIndexDataResponse, TIndexSearchResponse
} from "./src/@types/TResponse";
import Axios from "./src/scripts/axios";
import {ScoutEndPoints} from "./src/utils/config/api";
import performance from "./src/utils/fetch_elapsed";
import {TError} from "./src/@types/TError";

export default class Scout {
    private api: Axios;
    private server_address: string = "";
    constructor(server_address: string) {
        this.server_address = server_address;
        this.api = new Axios(server_address);
    }
    public indexes(): Promise<TIndexes>{
        const now = performance();
        return new Promise<TIndexes>((resolve: (param:TIndexes)=>void, reject: (param:TError)=>void)=>{
            this.api.get(ScoutEndPoints.Get_Indexes).then(({data})=>{
                data.fetch = now.elapsed();
                resolve(data);
            }).catch(err=>{
                reject(err);
            });
        });
    }
    public insert(object: TIndexData): Promise<TIndexDataResponse>{
        const now = performance();
        return new Promise<TIndexDataResponse>((resolve: (param:TIndexDataResponse)=>void, reject: (param:TError)=>void)=>{
            this.api.post(ScoutEndPoints.Post_Insert,object).then(({data})=>{
                data.fetch = now.elapsed();
                resolve(data);
            }).catch(er=>{
                reject(er);
            });
        });
    }
    public bulk_insert(object: TIndexDataBatch): Promise<TIndexDataBatchResponse>{
        const now = performance();
        return new Promise<TIndexDataBatchResponse>((resolve: (param:TIndexDataBatchResponse)=>void, reject: (param:TError)=>void)=>{
            this.api.post(ScoutEndPoints.Post_BulkInsert,object).then(({data})=>{
                data.fetch = now.elapsed();
                resolve(data);
            }).catch(er=>{
                reject(er);
            });
        });
    }
    public update_config(object: TIndexConfig): Promise<TIndexConfigResponse>{
        const now = performance();
        return new Promise<TIndexConfigResponse>((resolve: (param:TIndexConfigResponse)=>void, reject: (param:TError)=>void)=>{
            this.api.put(ScoutEndPoints.Put_Config,object).then(({data})=>{
                data.fetch = now.elapsed();
                resolve(data);
            }).catch(er=>{
                reject(er);
            });
        });
    }
    public get_count(index: string): Promise<TIndexDataCountResponse>{
        const now = performance();
        return new Promise<TIndexDataCountResponse>((resolve: (param:TIndexDataCountResponse)=>void, reject: (param:TError)=>void)=>{
            this.api.get(`${ScoutEndPoints.Get_Count}/${index}`,{}).then(({data})=>{
                data.fetch = now.elapsed();
                resolve(data);
            }).catch(er=>{
                reject(er);
            });
        });
    }
    public search(query: TIndexSearch): Promise<TIndexSearchResponse>{
        const now = performance();
        return new Promise<TIndexSearchResponse>((resolve: (param:TIndexSearchResponse)=>void, reject: (param:TError)=>void)=>{
            this.api.post(ScoutEndPoints.Post_Search,query).then(({data})=>{
                data.fetch = now.elapsed();
                resolve(data);
            }).catch(er=>{
                reject(er);
            });
        });
    }
}
