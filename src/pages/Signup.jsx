import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router';

const Signup = () => {
    const { handleSubmit, register, control } = useForm();
    const password = useWatch({ control, name: 'password' });
    const confirmPassword = useWatch({ control, name: 'confirmPassword' });
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (
            password !== undefined &&
            password !== '' &&
            confirmPassword !== undefined &&
            confirmPassword !== '' &&
            password === confirmPassword
        ) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [password, confirmPassword]);

    const onSubmit = ({ name, email, password }) => {
        // Email Password signup
        console.log(name, email, password);
    };

    const handleGoogleLogin = () => {
        // Google Login
    };

    return (
        <div className="grid place-items-center">
            <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-10">
                <h1 className="mb-10 font-medium text-2xl">Sign up</h1>
                <form className="space-y-5 w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col items-start">
                        <label htmlFor="email">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full rounded-md"
                            {...register('name')}
                        />
                    </div>
                    <div className="flex flex-col items-start">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full rounded-md"
                            {...register('email')}
                        />
                    </div>
                    <div className="flex flex-col items-start">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full rounded-md"
                            {...register('password')}
                        />
                    </div>
                    <div className="flex flex-col items-start">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="w-full rounded-md"
                            {...register('confirmPassword')}
                        />
                    </div>
                    <div className="mt-8!">
                        <button
                            type="submit"
                            className="btn btn-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
                            disabled={disabled}
                        >
                            Sign up
                        </button>
                    </div>
                    <div>
                        <p>
                            Already have an account?{' '}
                            <span
                                className="text-primary hover:underline cursor-pointer"
                                onClick={() => navigate('/login')}
                            >
                                Login
                            </span>
                        </p>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary w-full"
                        onClick={handleGoogleLogin}
                    >
                        Login with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;