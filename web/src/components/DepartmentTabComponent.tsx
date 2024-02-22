import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function DepartmentTabComponent(){
    return (
        <Tabs defaultValue="employee" className="w-full">
            <TabsList className={'tablist'}>
                <TabsTrigger className={'tabtrigger'} value="employee">Employees</TabsTrigger>
                <TabsTrigger className={'tabtrigger'} value="activities">Activities</TabsTrigger>
            </TabsList>
            <TabsContent value="employee">Employees List</TabsContent>
            <TabsContent value="activities">Activities List</TabsContent>
        </Tabs>
    )
}