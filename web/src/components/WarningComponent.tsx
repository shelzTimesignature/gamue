import {AlertCircle} from "lucide-react";

export default function WarningComponent({description}:{description:string}){
    return (
        <div className="mt-10">
            <div className="bg-orange-400 flex items-center text-zinc-100 p-3">
                <div className="w-5 h-5 center mr-5">
                    <AlertCircle />
                </div>
                <div className="flex-1">
                        <span className="block text-xs ">
                            {description}
                        </span>
                </div>

            </div>
        </div>
    )
}