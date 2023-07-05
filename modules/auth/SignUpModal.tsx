import React from "react";
import {z, ZodType} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {PageMetaData} from "@/utils/appData";
import {useLoginModalAtom, useRegisterModalAtom} from "@/providers/ModalState";
import {Input, Modal} from "@/components";
import {signUpUser} from "@/services/user/auth";

type SignupModalProps = {};

type SignupModalForm = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export const SignUpModal: React.FC<SignupModalProps> = () => {
    const {setRegisterModalState, registerModalState} = useRegisterModalAtom();
    const setLoginModalState = useLoginModalAtom(s => s.setLoginModalState);

    // Validation Schema
    const formSchema: ZodType<SignupModalForm> = z
        .object({
            name: z.string().min(3).max(32),
            email: z.string().email(),
            password: z.string().min(8).max(32),
            confirmPassword: z.string().min(8).max(32),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        });

    // Form
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<SignupModalForm>({resolver: zodResolver(formSchema)});

    // Handlers
    const handleRegister = async (data: SignupModalForm) => {
        try {
            const user = await signUpUser(data);
            if (user && user.data?.email) {
                setRegisterModalState(false);
            }
        } catch (error: any) {
        }
    };

    const handleCancel = () => {
        setRegisterModalState(false);
        reset();
    };

    const handleLogin = () => {
        setRegisterModalState(false);
        setLoginModalState(true);
    };

    // Footer
    const footer = (
        <div className={'flex justify-center'}>
            <button className="text-primary-500 text-xs font-light hover:text-primary-700"
                    onClick={handleLogin}>Already have an account?
            </button>
        </div>
    );

    // Render
    return (
        <>
            <Modal
                dialogFor="Sign Up"
                isOpen={registerModalState}
                onClose={handleCancel}
                title={PageMetaData.REGISTER.title}
                subtitle={PageMetaData.REGISTER.description}
                primaryAction="Sign up"
                primaryActionCallback={handleSubmit(handleRegister)}
                disable={false}
                footer={footer}>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col gap-y-8 mt-4">
                    <Input
                        id="name"
                        label="Full Name"
                        register={register("name", {required: true})}
                        errors={errors.name}
                        disabled={false}
                    />
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
                    <Input
                        id="confirmPassword"
                        label="Confirm Password"
                        register={register("confirmPassword", {required: true})}
                        errors={errors.confirmPassword}
                        type="password"
                        disabled={false}
                    />
                </form>
            </Modal>
        </>
    );
};
