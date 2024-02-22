import {ChevronRight} from "lucide-react";
import React, {useState} from "react";
import {useMutation} from "react-query";
import http from "@/http.ts";
import {useToast} from "@/components/ui/use-toast.ts";
import {Link, useNavigate} from "react-router-dom";

export default function CreateCompany(){


    const { toast } = useToast()


    const [state,setState]=useState({
        name:'',
        address:'',
        phone:'',
        email:'',
    })

    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=>{
        setState(prev=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }


    const navigate=useNavigate()


    const mutation=useMutation(async (value)=>{
        const {data}=await http.post('/company',value)
        return data
    },{
        onSuccess:async()=>{

            toast({
                title: "Success Message!!!",
                description: `Record has been created successfully`,
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
        <div className={'min-h-screen flex'}>
            <div className="flex-1 p-10">
                <div className="flex items-center space-x-1">
                    <Link to={'/banks'}>
                        <span className="block tracking-widest uppercase text-green-500 text-xs">Company</span>
                    </Link>
                    <ChevronRight size={10} />
                    <span className="block tracking-widest uppercase text-xs">Create</span>
                </div>

                <div className="mt-10">
                    <span className="block text-3xl uppercase tracking-widest font-bold">Create New</span>


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
                               Address
                            </span>
                            <textarea
                                rows={4}
                                className="input"
                                name={'address'}
                                value={state.address}
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

                        <div>
                            <span className="block text-xs mb-3">
                               Email
                            </span>
                            <input
                                type="text"
                                className="input"
                                name={'email'}
                                value={state.email}
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
                                mutation.isLoading ? '...Saving' : 'Save'
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