import * as FormData from "form-data";
import { AxiosInstance, AxiosPromise } from "axios";
import { TIndexData, TIndexDataBatch, TIndexSearch } from "../../@types/TIndexData";
export default class Axios {
    get extra_headers(): object;
    set extra_headers(value: object);
    get axios(): AxiosInstance;
    set axios(value: AxiosInstance);
    get token(): string;
    set token(value: string);
    private _axios;
    private _token;
    private _extra_headers;
    constructor(api_url?: string);
    source(api_url: string): void;
    get(endpoint: string, data?: any): AxiosPromise;
    post(endpoint: string, data: TIndexData | TIndexDataBatch | TIndexSearch): AxiosPromise;
    put(endpoint: string, data: object): AxiosPromise;
    protected _uri_val: (val: any) => string;
    protected _PUT_param: (params: object) => string;
    protected _GET_param: (req: string, param: object) => string;
    protected _POST_param: (data: object) => FormData;
}
