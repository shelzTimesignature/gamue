import {Link} from "react-router-dom";

export default function Forgot(){
    return (
        <div className={'h-screen flex items-center justify-center bg-zinc-950 text-zinc-200'}>
            <div className="w-1/3">
                <div className="w-full bg-zinc-900 p-10">
                    <span className="block text-4xl font-light">Forgot Password</span>
                    <span className="block text-xs mt-3 font-light">Enter your email and a reset password link will be sent to your email</span>

                    <div className="mt-5">
                        <div>
                            <span className="block text-sm font-medium mb-3">Email</span>
                            <input
                                type="email"
                                className="input"
                                placeholder={'enter your email address'}
                            />
                        </div>


                        <div className="mt-5">
                            <button className="w-full py-4 bg-green-700 text-white text-sm font-medium">Request Password Reset Link</button>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <Link to={'/login'}>
                        <span className="block text-center text-sm">
                            Remember your password ?
                            <span className="text-green-700 font-medium"> Sign in</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}