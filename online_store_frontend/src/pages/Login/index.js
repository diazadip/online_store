import * as React from 'react';
import { useForm } from 'react-hook-form';
import { rules } from './validation';
import { login } from '../../api/auth';
import { userLogin } from '../../features/Auth/actions';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const statuslist = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error',
}

export default function Login() {
    let { register, handleSubmit, formState: { errors }, setError } = useForm();
    let [status, setStatus] = React.useState(statuslist.idle);
    const dispatch = useDispatch();

    const onSubmit = async ({ email, password }) => {

        console.log(email);
        console.log(password);

        setStatus(statuslist.process);

        let { data } = await login(email, password);

        if (data.error) {
            // (2) dapatkan field terkait jika ada errors
            let fields = Object.keys(data.fields);
            // (3) untuk masing-masing field kita terapkan error dan tangkap pesan errornya
            fields.forEach(field => {
                setError('password', {
                    type: 'invalidCredential',
                    message: data.message
                })
            });

            setStatus(statuslist.error);
        }
        else
        {
            let {user, token} = data;
            dispatch(userLogin(user, token));
        }

        setStatus(statuslist.success);

        window.location = "/"
    }

    return (
        <>
            {/* <Provider store={store}> */}
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-6">
                        <input type="email" className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput125"
                            placeholder="Email address"
                            name="email"
                            {...register("email", rules.email)}
                        />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className="form-group mb-6">
                        <input type="password" className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput126"
                            placeholder="Password"
                            name="password"
                            {...register("password", rules.password)}
                        />
                        <p>{errors.password?.message}</p>
                    </div>
                    <button type="submit" className="
                        w-full
                        px-6
                        py-2.5
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out">

                        {status === statuslist.process ? "Sedang memproses" : "Sign In"}
                    </button>
                </form>
            </div>
            {/* </Provider> */}
        </>
    )
}

