import TooltipComponent from "@/components/TooltipComponent.tsx";
import {CircleUser, CreditCard, Menu, ScrollText, Settings2, Users} from "lucide-react";
import LogoutModalComponent from "@/components/LogoutModalComponent.tsx";

export default function SideBarComponent(){
    return (
        <div className="bg-white p-5 flex flex-col">

            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-zinc-100 center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>
                </div>
            </div>

            <div className="flex-1 mt-10 flex flex-col justify-between">
                <div className="flex flex-col space-y-5">
                    <TooltipComponent description={'Dashboard'}>
                        <div className="w-10 h-10 bg-zinc-50 center">
                            <Menu />
                        </div>
                    </TooltipComponent>
                    <TooltipComponent description={'Banks'}>
                        <div className="w-10 h-10 bg-zinc-50 center">
                            <CreditCard />
                        </div>
                    </TooltipComponent>
                    <TooltipComponent description={'Contacts'}>
                        <div className="w-10 h-10 bg-zinc-50 center">
                            <ScrollText />
                        </div>
                    </TooltipComponent>
                    <TooltipComponent description={'System Users'}>
                        <div className="w-10 h-10 bg-zinc-50 center">
                            <Users />
                        </div>
                    </TooltipComponent>
                </div>
                <div className={'flex flex-col space-y-5'}>

                    <TooltipComponent description={'Settings'}>
                        <div className="w-10 h-10 bg-zinc-50 center">
                            <Settings2 />
                        </div>
                    </TooltipComponent>
                    <LogoutModalComponent>
                        <div className="w-10 h-10 bg-zinc-50 center">
                            <CircleUser />
                        </div>
                    </LogoutModalComponent>

                </div>
            </div>

        </div>
    )
}