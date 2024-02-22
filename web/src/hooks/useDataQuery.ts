import {useQuery} from "react-query";
import http from "@/http.ts";

export default function useDataQuery(key:string, url:string){
    return useQuery([`${key}`],async()=>{
        const {data}=await http.get(`${url}`)
        return data
    })
}