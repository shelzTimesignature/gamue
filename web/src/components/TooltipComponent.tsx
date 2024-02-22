import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import React from "react";

interface Props{
    children:React.ReactNode,
    description:string
}
export default function TooltipComponent({children, description}:Props){
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent >
                    <p>{description}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}