import formatter from "./formatter";
import strtotime from "./strtotime";

export default function date(input: string,format?: string):string{
    return formatter(format ? format : "Y-m-d",strtotime(input));
}
