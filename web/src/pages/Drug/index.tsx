import {Link, useNavigate} from "react-router-dom";
import useDataQuery from "@/hooks/useDataQuery.ts";

export default function Drug(){


    const {data,isLoading,isError}=useDataQuery('drug','/drug')

    const navigate=useNavigate()


    return (
        <div className={'p-10'}>
            <span className="block tracking-widest uppercase text-xs">Drug</span>

            <div className="mt-10 flex items-center space-x-5">
                <span className="block text-3xl font-bold">Drug</span>
                <Link to={'/drug/create'}>
                    <span className={'text-xs bg-zinc-800 px-3 py-1'}>
                        Create new
                    </span>
                </Link>
            </div>

            <div className="mt-10 flex items-center space-x-5">
                <div className="flex-1">
                    <input type="text"
                           className="search-input"
                           placeholder={'Search text'}
                    />
                </div>
                <button className="text-zinc-400 py-4 px-10 text-xs border-2 border-zinc-400">Columns</button>
                <button className="text-zinc-400 py-4 px-10 text-xs border-2 border-zinc-400">Filters</button>
            </div>

            <>
                {
                    isLoading && (
                        <span className="block text-xs">...Loading</span>
                    )
                }
            </>


            <>
                {
                    isError && (
                        <span className="block text-xs">Something went wrong</span>
                    )
                }
            </>

            {
                data && (
                    <div className="mt-10">
                        <table className={'w-full'}>
                            <thead>
                                <tr>
                                    <th className={'px-3 py-2 text-xs text-left font-medium text-zinc-600'}>Name</th>
                                    <th className={'px-3 py-2 w-48 text-xs text-left font-medium text-zinc-600'}>Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                data!.map((x:any,i:number)=>(
                                    <tr key={i} className={`${i%2===0 ? 'bg-zinc-800' : ''} hover:bg-zinc-950`}>
                                        <td onClick={()=>navigate(`/drug/edit/${x.id}`)} className={'text-xs cursor-pointer px-3 py-4 text-zinc-400'}>{x.name}</td>
                                        <td className={'text-xs px-3 py-4 text-zinc-400'}>{x.createdAt}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    )
}