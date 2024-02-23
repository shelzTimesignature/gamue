import {CheckCircle, PlusCircle} from "lucide-react";
import {Link} from "react-router-dom";

export default function Dashboard(){
    return (
        <div className={'p-10'}>

            <span className="block tracking-widest uppercase text-xs">Dashboard</span>

            <div className="mt-10">
                <div className="bg-green-500 flex items-center text-zinc-800 p-3">
                    <div className="w-5 h-5 center mr-5">
                        <CheckCircle />
                    </div>
                    <div className="flex-1">
                        <span className="block text-xs ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda corporis cum earum quidem voluptas!
                        </span>
                    </div>

                </div>
            </div>

            <div className="mt-10 grid grid-cols-4 gap-5">

                <div className="bg-zinc-800 p-5">
                    <span className="block text-xs">Categories</span>
                    <div className="mt-5">
                        <PlusCircle />
                    </div>
                </div>

                <Link to={'/company'} className="bg-zinc-800 p-5">
                    <span className="block text-xs">Companies</span>
                    <div className="mt-5">
                        <PlusCircle />
                    </div>
                </Link>

                <Link to={'/license'} className="bg-zinc-800 p-5">
                    <span className="block text-xs">License</span>
                    <div className="mt-5">
                        <PlusCircle />
                    </div>
                </Link>

                <Link to={'/drug'} className="bg-zinc-800 p-5">
                    <span className="block text-xs">Drug</span>
                    <div className="mt-5">
                        <PlusCircle />
                    </div>
                </Link>


                <div className="bg-zinc-800 p-5">
                    <span className="block text-xs">Distributions</span>
                    <div className="mt-5">
                        <PlusCircle />
                    </div>
                </div>


                <Link to={'/tracking'} className="bg-zinc-800 p-5">
                    <span className="block text-xs">Tracking</span>
                    <div className="mt-5">
                        <PlusCircle />
                    </div>
                </Link>

            </div>

        </div>
    )
}