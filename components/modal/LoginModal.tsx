import { useRecoilState } from 'recoil';
import { ZodType, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { PageMetaData } from '@/utils/appData';
import { loginModalAtom } from '@/state/ModalState';
import Modal from './Modal';
import { Input } from '@/components';

type LoginModalProps = {
}

type LoginModalForm = {
    email: string;
    password: string;
}

const LoginModal: React.FC<LoginModalProps> = () => {
    const [open, setOpen] = useRecoilState(loginModalAtom)

    // Validation Schema
    const formSchema: ZodType<LoginModalForm> = z.object({
        email: z.string().email(),
        password: z.string().min(8).max(32)
    })

    // Form
    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginModalForm>({ resolver: zodResolver(formSchema) })

    // Handlers
    const handleLogin = (data: LoginModalForm) => {
        // setOpen(false)
        console.log(data)
    }

    const handleCancel = () => {
        setOpen(false)
        reset()
    }

    // Footer
    const footer = (
        <div className="flex justify-center items-center gap-x-2">
            <p className="text-neutral-500 font-light text-sm">Don&apos;t have an account?</p>
            <button className="text-primary-600 text-sm hover:text-primary-400">Sign up</button>
        </div>
    )

    // Render
    return (
        <>
            <Modal dialogFor='Sign In' isOpen={open} onClose={handleCancel}
                title={PageMetaData.LOGIN.title} subtitle={PageMetaData.LOGIN.description}
                primaryAction="Sign in" primaryActionCallback={handleSubmit(handleLogin)}
                disable={false} footer={footer}>

                <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-y-6">
                    <Input id='email' label='Email' register={register('email', { required: true })} errors={errors.email} type='email' disabled={false} />
                    <Input id='password' label='Password' register={register('password', { required: true })} errors={errors.password} type='password' disabled={false} />

                    <div className="flex justify-end">
                        <button className="text-primary-500 text-xs font-light hover:text-primary-700">Forgot password?</button>
                    </div>
                </form>

            </Modal>
        </>
    )
}

export default LoginModal