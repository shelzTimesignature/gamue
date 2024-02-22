import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {Link} from "react-router-dom";

export function VaultTransactionComponent() {
    return (
        <Accordion type="single" collapsible className="w-full p-0 m-0 space-y-5">
            <AccordionItem value="item-1" className={'border-none hover:no-underline p-0 m-0'}>
                <AccordionTrigger className={'text-xs'}>Company Reports</AccordionTrigger>
                <AccordionContent className={'space-y-4'}>
                    <Link to={'/cash-in'}>
                        <span className="block text-[10px] mt-4">Profile</span>
                    </Link>
                    <span className="block text-[10px]">Location</span>
                    <span className="block text-[10px]">Transactions</span>
                </AccordionContent>
            </AccordionItem>

        </Accordion>
    )
}
