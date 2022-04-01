import * as React from 'react';
import { useForm } from 'react-hook-form';
import { rules } from './validation';
import { registerUser } from '../../api/auth';

const statuslist = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error',
}

export default function Register() {
    let { register, handleSubmit, formState: { errors }, setError } = useForm();

    let [status, setStatus] = React.useState(statuslist.idle);

    const onSubmit = async formData => {
        console.log(formData)
        // (1) dapatkan variabel password dan password_confirmation
        let { password, password_confirmation } = formData;
        console.log(password);
        console.log(password_confirmation);
        // (2) cek password vs password_confirmation
        if (password !== password_confirmation) {
            return setError('password_confirmation', {
                type: 'equality',
                message: 'Konfirmasi password harus dama dengan password'
            });
        }

        setStatus(statuslist.process);

        let { data } = await registerUser(formData);

        if (data.error) {
            // (2) dapatkan field terkait jika ada errors
            let fields = Object.keys(data.fields);
            // (3) untuk masing-masing field kita terapkan error dan tangkap pesan errornya
            fields.forEach(field => {
                setError(field, {
                    type: 'server', message:
                        data.fields[field]?.properties?.message
                })
            });

            setStatus(statuslist.error);
            return;
        }

        setStatus(statuslist.success);

        window.location = "/"
    }

    return (
        <>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control
                            block
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
                            id="exampleInput123"
                            aria-describedby="emailHelp123"
                            placeholder="Nama Lenkap"
                            name="full_name"
                            {...register("full_name", rules.full_name)}
                        />
                        <p>{errors.fullname?.message}</p>
                    </div>
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
                            placeholder="Konfirmasi Password"
                            name="password_confirmation"
                            {...register("password_confirmation", rules.password_confirmation)}
                        />
                        <p>{errors.password_confirmation?.message}</p>
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
                        
                        {status === statuslist.process ? "Sedang memproses" : "Sign Up"}
                    </button>
                </form>
            </div>
        </>
    )
}

