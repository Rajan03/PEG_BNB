import React from "react";
import {ZodType, z} from "zod";
import {signIn} from "next-auth/react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {PageMetaData} from "@/utils/appData";
import {useLoginModalAtom, useRegisterModalAtom} from "@/providers/ModalState";
import {Input, Modal} from "@/components";

type LoginModalProps = {};

type LoginModalForm = {
    email: string;
    password: string;
};

export const LoginModal: React.FC<LoginModalProps> = () => {
    const {loginModalState, setLoginModalState} = useLoginModalAtom();
    const setRegisterModalState = useRegisterModalAtom(s => s.setRegisterModalState);

    // Validation Schema
    const formSchema: ZodType<LoginModalForm> = z.object({
        email: z.string().email(),
        password: z.string().min(8).max(32),
    });

    // Form
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<LoginModalForm>({resolver: zodResolver(formSchema)});

    // Handlers
    const handleLogin = async (data: LoginModalForm) => {
        try {
            const res = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            })

            if (res?.ok) {
                setLoginModalState(false);
            }
        } catch (error: any) {
        }
    };

    const handleCancel = () => {
        setLoginModalState(false);
        reset();
    };

    const handleRegister = () => {
        setLoginModalState(false);
        setRegisterModalState(true);
    };

    // Footer
    const footer = (
        <div className="flex justify-center items-center gap-x-2">
            <p className="text-neutral-500 font-light text-sm">
                Don&apos;t have an account?
            </p>
            <button
                className="text-primary-600 text-sm hover:text-primary-400"
                onClick={handleRegister}
            >
                Sign up
            </button>
        </div>
    );

    // Render
    return (
        <>
            <Modal
                dialogFor="Sign In"
                isOpen={loginModalState}
                onClose={handleCancel}
                title={PageMetaData.LOGIN.title}
                subtitle={PageMetaData.LOGIN.description}
                primaryAction="Sign in"
                primaryActionCallback={handleSubmit(handleLogin)}
                disable={false}
                footer={footer}
            >
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col gap-y-6 mt-4">
                    <Input
                        id="email"
                        label="Email"
                        register={register("email", {required: true})}
                        errors={errors.email}
                        type="email"
                        disabled={false}
                    />
                    <Input
                        id="password"
                        label="Password"
                        register={register("password", {required: true})}
                        errors={errors.password}
                        type="password"
                        disabled={false}
                    />

                    <div className="flex justify-end">
                        <button className="text-primary-500 text-xs font-light hover:text-primary-700">
                            Forgot password?
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
};
