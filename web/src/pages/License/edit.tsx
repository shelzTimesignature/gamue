import {ChevronRight} from "lucide-react";
import React, {useEffect, useState} from "react";
import {useMutation} from "react-query";
import http from "@/http.ts";
import {useToast} from "@/components/ui/use-toast.ts";
import {Link, useNavigate, useParams} from "react-router-dom";
import useDataQuery from "@/hooks/useDataQuery.ts";

export default function EditLicense(){



    const {data:company}=useDataQuery('company','/company')
    const {data:drug}=useDataQuery('drug','/drug')

    const [state,setState]=useState({
        status:'',
        companyId:'',
        drugId:'',
        expiry_date:'',
        proof_of_fund:false,
        has_signed_zida_application:false,
        has_security_plan:false,
        has_proof_of_land:false,
        is_the_company_registered:false,
        has_work_permit:false,
        has_capacity:false,
    })

    const {id}=useParams()
    const {data,isLoading,isError}=useDataQuery(`license-${id}`,`/license/${id}`)


    useEffect(()=>{
        if(data){
            setState(prev=>({
                ...prev,
                status:data.status,
                companyId:data.companyId,
                drugId:data.drugId,
                expiry_date:data.expiry_date,
                proof_of_fund:data.proof_of_fund,
                has_signed_zida_application:data.has_signed_zida_application,
                has_security_plan:data.has_security_plan,
                has_proof_of_land:data.has_proof_of_land,
                is_the_company_registered:data.is_the_company_registered,
                has_work_permit:data.has_work_permitlse,
                has_capacity:data.has_capacity,
            }))

        }
    },[data])



    const { toast } = useToast()









    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=>{
        setState(prev=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }


    const navigate=useNavigate()


    const mutation=useMutation(async (value)=>{
        const {data}=await http.patch(`/license/${id}`,value)
        return data
    },{
        onSuccess:async()=>{

            toast({
                title: "Success Message!!!",
                description: `Record has been modified successfully`,
                className:'bg-green-600 text-white border-none'
            })
            navigate('/license')


        },
        onError:(error:any)=>{
            toast({
                title: "Warning Message",
                description: error.response.data.message[0] || 'Something went wrong',
                variant: "destructive"
            })
        }
    })


    const _submit=()=>{
        // @ts-ignore
        mutation.mutate(state)
    }


    return (
        <>

            <>
                {
                    isLoading && (
                        <div className={'h-screen bg-black bg-opacity-50 flex items-center justify-center'}>
                            <span className="block text-xs uppercase tracking-widest">...loading</span>
                        </div>
                    )
                }
            </>



            <>
                {
                    isError && (
                        <div className={'h-screen bg-black bg-opacity-50 flex items-center justify-center'}>
                            <span className="block text-xs uppercase tracking-widest">Something went wrong</span>
                        </div>
                    )
                }
            </>

            {
                data && (
                    <div className={'min-h-screen flex'}>
                        <div className="flex-1 p-10">
                            <div className="flex items-center space-x-1">
                                <Link to={'/license'}>
                                    <span className="block tracking-widest uppercase text-green-500 text-xs">License</span>
                                </Link>
                                <ChevronRight size={10} />
                                <span className="block tracking-widest uppercase text-xs">Update</span>
                            </div>

                            <div className="mt-10">
                                <span className="block text-3xl uppercase tracking-widest font-bold">Modify</span>


                                <div className="mt-10 grid grid-cols-2 gap-8">
                                    <div>
                                        <span className="block text-xs mb-3">
                                           Status
                                        </span>
                                        <select
                                            className="input"
                                            name={'status'}
                                            value={state.status}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Status</option>
                                            <option value="processing">Processing</option>
                                            <option value="accepted">Accepted</option>
                                            <option value="rejected">Rejected</option>
                                        </select>
                                    </div>

                                    <div>
                            <span className="block text-xs mb-3">
                               Company
                            </span>
                                        <select
                                            className="input"
                                            name={'companyId'}
                                            value={state.companyId}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Company</option>
                                            {
                                                company && company.map((x:any,i:number)=>(
                                                    <option value={x.id} key={i}>{x.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>

                                    <div>
                            <span className="block text-xs mb-3">
                               Drug
                            </span>
                                        <select
                                            className="input"
                                            name={'drugId'}
                                            value={state.drugId}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Drug</option>
                                            {
                                                drug && drug.map((x:any,i:number)=>(
                                                    <option value={x.id} key={i}>{x.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>

                                    <div>
                            <span className="block text-xs mb-3">
                               Expiry Date
                            </span>
                                        <input
                                            type="date"
                                            className="input"
                                            name={'expiry_date'}
                                            value={state.expiry_date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div></div>
                                    <div className={'flex items-center justify-between'}>
                                <span className="block text-xs">
                               Has Capacity
                            </span>
                                        <input
                                            type={'checkbox'}
                                            className={'accent-green-500'}
                                            checked={state.has_capacity}
                                            //value={state.isActive}
                                            onChange={()=>setState(prev=>({...prev,has_capacity: !state.has_capacity}))}
                                        />
                                    </div>

                                    <div className={'flex items-center justify-between'}>
                                <span className="block text-xs">
                                   Has Proof of Land
                                </span>
                                        <input
                                            type={'checkbox'}
                                            className={'accent-green-500'}
                                            checked={state.has_proof_of_land}
                                            //value={state.isActive}
                                            onChange={()=>setState(prev=>({...prev,has_proof_of_land: !state.has_proof_of_land}))}
                                        />
                                    </div>

                                    <div className={'flex items-center justify-between'}>
                                <span className="block text-xs">
                                   Has Work Permit
                                </span>
                                        <input
                                            type={'checkbox'}
                                            className={'accent-green-500'}
                                            checked={state.has_work_permit}
                                            //value={state.isActive}
                                            onChange={()=>setState(prev=>({...prev,has_work_permit: !state.has_work_permit}))}
                                        />
                                    </div>

                                    <div className={'flex items-center justify-between'}>
                                <span className="block text-xs">
                                   Is The Company Registered
                                </span>
                                        <input
                                            type={'checkbox'}
                                            className={'accent-green-500'}
                                            checked={state.is_the_company_registered}
                                            //value={state.isActive}
                                            onChange={()=>setState(prev=>({...prev,is_the_company_registered: !state.is_the_company_registered}))}
                                        />
                                    </div>

                                    <div className={'flex items-center justify-between'}>
                                <span className="block text-xs">
                                   Has Signed Zida application
                                </span>
                                        <input
                                            type={'checkbox'}
                                            className={'accent-green-500'}
                                            checked={state.has_signed_zida_application}
                                            //value={state.isActive}
                                            onChange={()=>setState(prev=>({...prev,has_signed_zida_application: !state.has_signed_zida_application}))}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[400px] border-l border-zinc-800 p-10">
                            <div className="flex items-center space-x-1">
                                <span className="text-xs text-white font-medium">Create</span>
                                <span className="text-xs text-white font-medium">Duplicate</span>
                                <span className="text-xs text-white font-medium">Delete</span>
                            </div>
                            <div className="mt-10 grid grid-cols-2 gap-3">
                                <div>
                                    <button onClick={_submit} disabled={mutation.isLoading} className="w-full border py-4 border-zinc-700 text-xs text-zinc-400">
                                        {
                                            mutation.isLoading ? '...Updating' : 'Update'
                                        }
                                    </button>
                                </div>

                                <div>
                                    <button className="w-full bg-zinc-400 py-4 text-xs text-zinc-800">Publish</button>
                                </div>
                            </div>


                            <div className="mt-10">
                   <span className="block text-xs">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, atque!
                   </span>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}