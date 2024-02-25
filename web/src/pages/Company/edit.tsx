import {ChevronRight} from "lucide-react";
import React, {useEffect, useState} from "react";
import {useMutation} from "react-query";
import http from "@/http.ts";
import {useToast} from "@/components/ui/use-toast.ts";
import {Link, useNavigate, useParams} from "react-router-dom";
import useDataQuery from "@/hooks/useDataQuery.ts";

export default function EditCompany(){



    const [state,setState]=useState({
        name:'',
        address:'',
        phone:'',
        email:'',
        type:'',
        isActive:false
    })

    const {id}=useParams()
    const {data,isLoading,isError}=useDataQuery(`users-${id}`,`/users/${id}`)


    useEffect(()=>{
        if(data){
            setState(prev=>({
                ...prev,
                name: data.name,
                phone:data.phone,
                email: data.email,
                type:data.type,
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
        const {data}=await http.patch(`/users/${id}`,value)
        return data
    },{
        onSuccess:async()=>{

            toast({
                title: "Success Message!!!",
                description: `Record has been modified successfully`,
                className:'bg-green-600 text-white border-none'
            })
            navigate('/company')


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
                                <Link to={'/company'}>
                                    <span className="block tracking-widest uppercase text-green-500 text-xs">Company</span>
                                </Link>
                                <ChevronRight size={10} />
                                <span className="block tracking-widest uppercase text-xs">Update</span>
                            </div>

                            <div className="mt-10">
                                <span className="block text-3xl uppercase tracking-widest font-bold">Modify</span>


                                <div className="mt-10 grid grid-cols-2 gap-8">
                                    <div>
                                        <span className="block text-xs mb-3">
                                           Name
                                        </span>
                                        <input
                                            type="text"
                                            className="input"
                                            name={'name'}
                                            value={state.name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={'col-span-2'}>
                            <span className="block text-xs mb-3">
                               Email Address
                            </span>
                                        <textarea
                                            rows={4}
                                            className="input"
                                            name={'email'}
                                            value={state.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div>
                            <span className="block text-xs mb-3">
                               Phone
                            </span>
                                        <input
                                            type="text"
                                            className="input"
                                            name={'phone'}
                                            value={state.phone}
                                            onChange={handleChange}
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