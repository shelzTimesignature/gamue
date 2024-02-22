import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function EmployeeTabComponent(){
    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList className={'tablist'}>
                <TabsTrigger className={'tabtrigger'} value="account">Account</TabsTrigger>
                <TabsTrigger className={'tabtrigger'} value="address">Address</TabsTrigger>
                <TabsTrigger className={'tabtrigger'} value="transactions">Transactions</TabsTrigger>
                <TabsTrigger className={'tabtrigger'} value="activities">Activities</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="address">Change your password here.</TabsContent>
            <TabsContent value="transactions">Transactions associated with his name</TabsContent>
            <TabsContent value="activities">Activities tbe employee did</TabsContent>
        </Tabs>
    )
}