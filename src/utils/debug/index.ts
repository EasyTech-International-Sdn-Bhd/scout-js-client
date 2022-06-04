import * as log from "fancy-log";
import * as chalk from "chalk";
import {arbitary, IDebug} from "../../interface/IDebug";
class Debug implements IDebug{
    get save_log(): boolean {
        return this._save_log;
    }
    set save_log(value: boolean) {
        this._save_log = value;
    }
    get tag(): string {
        return `[${new Date().toLocaleTimeString()}] ${this._tag}`;
    }
    set tag(value: string) {
        this._tag = value;
    }
    private _save_log: boolean = true;
    private _tag: string = '[Scout-Js-Client]';
    constructor(logging_tag: string) {
        this.tag = logging_tag;
    }
    public error(...param: arbitary):void{
        log.info(chalk.whiteBright.bold.bgRedBright(`[${this.tag}]`),...param);
    }
    public info(...param: arbitary):void{
        log.info(`[${this.tag}]`,...param);
    }
    public done(...param: arbitary):void{
        log.info(chalk.whiteBright.bold.bgGreenBright(`[${this.tag}]`),...param);
    }
}
export default function debug(logging_tag: string): Debug{
    return new Debug(logging_tag);
}
