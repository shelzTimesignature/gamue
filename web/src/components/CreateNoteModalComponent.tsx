import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {useToast} from "@/components/ui/use-toast.ts";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import http from "@/http.ts";
export default function CreateNoteModalComponent(){

    const { toast } = useToast()


    const [state,setState]=useState({
        description:'',
        value:'',
    })

    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=>{
        setState(prev=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }


    const navigate=useNavigate()


    const mutation=useMutation(async (value)=>{
        const {data}=await http.post('/notes',value)
        return data
    },{
        onSuccess:async(data)=>{

            toast({
                title: "Success Message!!!",
                description: `Bank notes has been created successfully`,
                className:'bg-green-600 text-white border-none'
            })
            navigate('/notes')

            console.log(data)

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
        <Dialog>
            <DialogTrigger>
                <span className={'text-xs bg-zinc-800 px-3 py-1'}>
                    Create new
                </span>
            </DialogTrigger>
            <DialogContent className={'w-full bg-zinc-900 border-none text-zinc-300 p-10'}>
                <DialogHeader>
                    <DialogTitle className={'text-2xl'}>Create Notes</DialogTitle>
                    <div className="mt-10 grid grid-cols-1 gap-5">

                        <div>
                            <span className="block text-xs mb-3">
                               Description
                            </span>
                            <input
                                type="text"
                                className="input"
                                name={'description'}
                                value={state.description}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <span className="block text-xs mb-3">
                               Value
                            </span>
                            <input
                                type="text"
                                className="input"
                                name={'value'}
                                value={state.value}
                                onChange={handleChange}
                            />
                        </div>

                        <button onClick={_submit} disabled={mutation.isLoading} className="px-10 py-4 text-xs bg-zinc-300 text-zinc-900">
                            {
                                mutation.isLoading ? '...Creating' : 'Create'
                            }
                        </button>

                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}