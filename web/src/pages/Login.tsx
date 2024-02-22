import {Link, useNavigate} from "react-router-dom";
import React,{useState} from "react";
import {useToast} from "@/components/ui/use-toast.ts";
import {useMutation} from "react-query";
import http from "@/http.ts";
import {ACCESS_TOKEN_LABEL, REFRESH_TOKEN_LABEL} from "@/config.ts";

export default function Login(){

    const { toast } = useToast()
    const [state, setState] = useState({
        email:'',
        password:''
    })


    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=>{
        setState(prev=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }


    const navigate=useNavigate()


    const mutation=useMutation(async (value)=>{
        const {data}=await http.post('/login',value)
        return data
    },{
        onSuccess:async(data)=>{


            localStorage.setItem(ACCESS_TOKEN_LABEL,data.accessToken)
            localStorage.setItem(REFRESH_TOKEN_LABEL,data.refreshToken)


            toast({
                title: "Success Message!!!",
                description: `You are successfully authenticated`,
                className:'bg-green-600 text-white border-none'
            })
            navigate('/')


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
        <div className={'h-screen flex items-center justify-center bg-zinc-950 text-zinc-200'}>
            <div className="w-1/3">
                <div className="w-full bg-zinc-900 p-10">
                    <span className="block text-4xl font-light">Login</span>
                    <span className="block text-xs mt-3 font-light">Welcome to ATM Manager</span>

                    <div className="mt-5">
                        <div>
                            <span className="block text-sm font-medium mb-3">Email</span>
                            <input
                                type="email"
                                className="input"
                                placeholder={'enter your email address'}
                                name={'email'}
                                value={state.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={'mt-5'}>
                            <div className="flex items-center justify-between mb-3">
                                <span className="block text-sm font-medium">Password</span>
                                <Link to={'/forgot'}>
                                    <span className="block text-sm font-medium text-green-600">Forgot Password?</span>
                                </Link>
                            </div>
                            <input
                                type="password"
                                className="input"
                                name={'password'}
                                value={state.password}
                                onChange={handleChange}
                                placeholder={'enter your 8+ character password'}
                            />
                        </div>

                        <div className="mt-5">
                            <button onClick={_submit} disabled={mutation.isLoading} className="w-full py-4 bg-green-700 text-white text-sm font-medium">
                                {
                                    mutation.isLoading ? '...Logging in' : 'Login'
                                }
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <span className="block text-center text-sm">
                    Don't have an account?
                    <span className="text-green-700 font-medium"> Sign up</span>
                </span>
                </div>
            </div>
        </div>
    )
}