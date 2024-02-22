import {Outlet} from "react-router-dom";

export default function AuthLayout(){
    return (
        <div className={'font-Inter'}>
            <Outlet/>
        </div>
    )
}