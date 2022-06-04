import * as FormData from "form-data";
import axios, {AxiosInstance, AxiosPromise} from "axios";
import {nullish} from "../index";
import {isObject} from "lodash";
import {TIndexData, TIndexDataBatch, TIndexSearch} from "../../@types/TIndexData";

export default class Axios {
    get extra_headers(): object {
        return this._extra_headers;
    }

    set extra_headers(value: object) {
        this._extra_headers = value;
    }
    get axios(): AxiosInstance {
        return this._axios;
    }

    set axios(value: AxiosInstance) {
        this._axios = value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }
    private _axios: AxiosInstance;
    private _token: string;
    private _extra_headers: object = {};
    constructor(api_url?:string) {
        if(api_url){
            this.source(api_url);
        }
    }

    public source(api_url:string):void{
        this._axios = axios.create({
            baseURL: api_url
        });
        this._axios.interceptors.request.use(async (axios_config)=>{
            return axios_config;
        },(fail)=>{
            return fail;
        });
    }
    public get(endpoint: string, data?: any): AxiosPromise{
        return this.axios.get(this._GET_param(endpoint,data));
    }
    public post(endpoint:string,data:TIndexData | TIndexDataBatch | TIndexSearch): AxiosPromise{
        return this.axios.post(endpoint,data);
    }
    public put(endpoint:string, data:object): AxiosPromise{
        return this.axios.put(endpoint,this._PUT_param(data));
    }
    protected _uri_val = (val:any) => encodeURIComponent(isObject(val) ? JSON.stringify(val) : val);
    protected _PUT_param = (params: object) => Object.entries(params).map(([key, val]) => `${key}=${this._uri_val(val)}`).join('&');
    protected _GET_param = (req: string,param:object): string => {
        if(!nullish(param)){
            return `${req}?${this._PUT_param(param)}`
        }
        return `${req}`;
    }
    protected _POST_param = (data: object): FormData=> {
        const formData = new FormData({writable:true,readable:true});
        for (const dataKey in data) {
            if(data.hasOwnProperty(dataKey)){
                formData.append(dataKey,data[dataKey]);
            }
        }
        return formData;
    }
}
