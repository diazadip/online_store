import * as React from 'react';
import { useForm } from 'react-hook-form';
import { rules } from './validation';

export default function Register() {
    let { register, handleSubmit, formState: { errors }, setError } = useForm();

    const onSubmit = async formData => {
        alert(JSON.stringify(formData));
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
                            {...register("validation_fullname", rules.full_name)}
                        />
                        <p>{errors.validation_fullname?.message}</p>
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
                            {...register("validation_email", rules.email)}
                        />
                        <p>{errors.validation_email?.message}</p>
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
                            {...register("validation_password", rules.password)}
                        />
                        <p>{errors.validation_password?.message}</p>
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
                            name="confirmation_password"
                            {...register("validation_confirmation_password", rules.password_confirmation)}
                        />
                        <p>{errors.validation_confirmation_password?.message}</p>
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
                        Sign up
                    </button>
                </form>
            </div>
        </>
    )
}

