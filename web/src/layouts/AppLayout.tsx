import {Link, Navigate, Outlet} from "react-router-dom";
import useDataQuery from "@/hooks/useDataQuery.ts";
import LogoutModalComponent from "@/components/LogoutModalComponent.tsx";
import ReactLoading from 'react-loading';
export default function AppLayout(){

    const {data,isLoading,isError}=useDataQuery('user','user')



    return (
        <>

            <>
                {
                    isLoading && (
                        <div className="fixed inset-0 bg-zinc-900 flex flex-col items-center justify-center text-zinc-200">
                            <ReactLoading type={'spin'} color={'green'} height={80} width={80} />
                            <span className="block text-xs uppercase tracking-widest mt-10">...Loading</span>
                        </div>
                    )
                }
            </>



            <>
                {
                    isError && (
                        <div className={'h-screen bg-zinc-900'}>
                            <Navigate to={'/login'}/>
                        </div>
                    )
                }
            </>


            {
                data && (
                    <div className={'h-screen flex font-Inter bg-zinc-900 text-zinc-400 overflow-y-hidden'}>

                        <div className="w-[250px] border-r border-zinc-800 p-10 flex flex-col overflow-y-auto">
                            <div>
                                <Link to={'/'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                        <path fillRule="evenodd" d="M8.478 1.6a.75.75 0 0 1 .273 1.026 3.72 3.72 0 0 0-.425 1.121c.058.058.118.114.18.168A4.491 4.491 0 0 1 12 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 0 0-.426-1.125.75.75 0 1 1 1.298-.752 5.22 5.22 0 0 1 .671 2.046.75.75 0 0 1-.187.582c-.241.27-.505.52-.787.749a4.494 4.494 0 0 1 .216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.742a23.122 23.122 0 0 0 3.832-.803 23.241 23.241 0 0 0-.345-2.634.75.75 0 0 1 1.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 0 1-.516.75c-1.527.499-3.119.854-4.76 1.049-.074.38-.22.735-.423 1.05 2.066.209 4.058.672 5.943 1.358a.75.75 0 0 1 .492.75 24.665 24.665 0 0 1-1.189 6.25.75.75 0 0 1-1.425-.47 23.14 23.14 0 0 0 1.077-5.306c-.5-.169-1.009-.32-1.524-.455.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.135-1.022.286-1.522.455.154 1.838.52 3.616 1.077 5.307a.75.75 0 1 1-1.425.468 24.662 24.662 0 0 1-1.19-6.25.75.75 0 0 1 .493-.749 24.586 24.586 0 0 1 4.964-1.24h.01c.321-.046.644-.085.969-.118a2.983 2.983 0 0 1-.424-1.05 24.614 24.614 0 0 1-4.76-1.05.75.75 0 0 1-.516-.75c.057-1.16.194-2.302.405-3.417a.75.75 0 0 1 1.474.28c-.164.862-.28 1.74-.345 2.634 1.237.371 2.517.642 3.832.803.085-.266.207-.515.359-.742a18.698 18.698 0 0 1-.547-.08c-.664-.11-1.311-.612-1.417-1.404a4.535 4.535 0 0 1 .217-2.103 6.788 6.788 0 0 1-.788-.751.75.75 0 0 1-.187-.583 5.22 5.22 0 0 1 .67-2.04.75.75 0 0 1 1.026-.273Z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="mt-10 flex-1 flex flex-col space-y-10">

                                {
                                    data.type==='system' && (
                                        <div className="flex flex-col space-y-5">
                                            <span className="block text-xs text-zinc-600">Menu</span>
                                            <Link to={'/'}>
                                                <span className="block text-xs">Dashboard</span>
                                            </Link>


                                            <Link to={'/company'}>
                                                <span className="block text-xs">Company</span>
                                            </Link>


                                            <Link to={'/drug'}>
                                                <span className="block text-xs">Drug</span>
                                            </Link>
                                            <Link to={'/license'}>
                                                <span className="block text-xs">Licenses</span>
                                            </Link>
                                            <Link to={'/Distribution'}>
                                                <span className="block text-xs">Distributions</span>
                                            </Link>
                                        </div>
                                    )
                                }


                                <>
                                    {
                                        data.type==='company' && (
                                            <div className="flex flex-col space-y-5">
                                                <span className="block text-xs text-zinc-600">Menu</span>
                                                <Link to={'/'}>
                                                    <span className="block text-xs">Dashboard</span>
                                                </Link>

                                                <Link to={'/license'}>
                                                    <span className="block text-xs">Licenses</span>
                                                </Link>
                                            </div>
                                        )
                                    }
                                </>


                                <div className="flex flex-col space-y-5">
                                <span className="block text-xs text-zinc-600">Authentication</span>
                                <LogoutModalComponent>
                                    <span className="block text-xs text-left">Logout</span>
                                </LogoutModalComponent>
                            </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            <Outlet/>
                        </div>

                    </div>
                )
            }

        </>
    )
}