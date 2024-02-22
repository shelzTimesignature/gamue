import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {useNavigate} from "react-router-dom";


interface Props{
    children:React.ReactNode
}

export default function LogoutModalComponent({children}:Props){



    const navigate=useNavigate()


    const logout=()=>{
        localStorage.clear()
        navigate('/login')
    }


    return (
        <AlertDialog>
            <AlertDialogTrigger>{children}</AlertDialogTrigger>
            <AlertDialogContent className={'bg-zinc-900 border-none text-zinc-100'}>
                <AlertDialogHeader>
                    <AlertDialogTitle className={'text-3xl'}>Are you absolutely sure you want to do this ?</AlertDialogTitle>
                    <AlertDialogDescription className={'text-zinc-100'}>
                        This action cannot be undone. This will remove your account detail from this browser but you can log back in again whenever you want.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className={'bg-zinc-300 text-zinc-700'}>Cancel</AlertDialogCancel>
                    <AlertDialogAction className={'bg-zinc-700'} onClick={logout}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}