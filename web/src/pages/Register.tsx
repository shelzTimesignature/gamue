import {Link, useNavigate} from "react-router-dom";
import React,{useState} from "react";
import {useToast} from "@/components/ui/use-toast.ts";
import {useMutation} from "react-query";
import http from "@/http.ts";

export default function Register(){

    const { toast } = useToast()
    const [state, setState] = useState({
        email:'',
        password:'',
        phone:'',
        name:'',
        type:'',
        confirm:''
    })


    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=>{
        setState(prev=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }


    const navigate=useNavigate()


    const mutation=useMutation(async (value)=>{
        const {data}=await http.post('/users',value)
        return data
    },{
        onSuccess:async()=>{

            toast({
                title: "Success Message!!!",
                description: `You are successfully signed up`,
                className:'bg-green-600 text-white border-none'
            })
            navigate('/login')


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
        <div className={'h-screen flex bg-zinc-950 text-zinc-200 overflow-y-hidden'}>
            <div className="flex-1"></div>
            <div className="w-full sm:w-3/4 md:w-1/2 xl:w-1/3 bg-zinc-900 overflow-y-auto">
                <div className="w-full p-10">
                    <span className="block text-4xl font-light">Sign up</span>
                    <span className="block text-xs mt-3 font-light">Narcotics Drug Production License Manager</span>

                    <div className="mt-5 grid grid-cols-2 gap-8">
                        <div className={'col-span-2'}>
                            <span className="block text-sm font-medium mb-3">Name</span>
                            <input
                                type="text"
                                className="input"
                                placeholder={''}
                                name={'name'}
                                value={state.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <span className="block text-sm font-medium mb-3">phone</span>
                            <input
                                type="text"
                                className="input"
                                placeholder={''}
                                name={'phone'}
                                value={state.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <span className="block text-sm font-medium mb-3">Type</span>
                            <select
                                className="input"
                                name={'type'}
                                value={state.type}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="system">System</option>
                                <option value="company">Company</option>
                            </select>
                        </div>
                        <div></div>

                        <div className={'col-span-2'}>
                            <span className="block text-sm font-medium mb-3">Email</span>
                            <textarea
                                rows={4}
                                className="input"
                                placeholder={'enter your email address'}
                                name={'email'}
                                value={state.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <span className="block text-sm font-medium mb-3">Password</span>
                            <input
                                type="password"
                                className="input"
                                name={'password'}
                                value={state.password}
                                onChange={handleChange}
                                placeholder={'enter your 8+ character password'}
                            />
                        </div>

                        <div>
                            <span className="block text-sm font-medium mb-3">Confirm Password</span>
                            <input
                                type="password"
                                className="input"
                                name={'confirm'}
                                value={state.confirm}
                                onChange={handleChange}
                                placeholder={'password confirmation'}
                            />
                        </div>


                    </div>

                    <div className="mt-10">
                        <button onClick={_submit} disabled={mutation.isLoading} className="w-full py-4 bg-green-700 text-white text-sm font-medium">
                            {
                                mutation.isLoading ? '...Logging in' : 'Login'
                            }
                        </button>
                    </div>

                    <div className="mt-5">
                        <Link to={'/signup'}>
                        <span className="block text-center text-sm">
                        Don't have an account?
                        <span className="text-green-700 font-medium"> Sign up</span>
                    </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}