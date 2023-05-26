import React from "react";
import {
    FieldError,
    UseFormRegisterReturn,
} from "react-hook-form";
import { BiDollar } from "react-icons/bi";


interface InputProps {
    id: string;
    label: string;
    register: UseFormRegisterReturn<any>,
    errors: FieldError | undefined;

    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
}

const Input: React.FC<InputProps> = ({
    id, label, type = "text", disabled, formatPrice,
    register, errors,
}) => {
    return (
        <div className="w-full relative">
            {formatPrice && <BiDollar size={24} className={priceIcon} />}

            <input id={id} disabled={disabled} placeholder=" " type={type} {...register}
                autoComplete={'off'} autoCorrect={'off'} autoCapitalize={'off'} spellCheck={false}
                className={`
                    ${input} 
                    ${formatPrice ? 'pl-9' : 'pl-4'} 
                    ${errors ? 'border-rose-500' : 'border-neutral-300'}
                    ${errors ? 'focus:border-rose-500' : 'focus:border-black'}`} />

            <label htmlFor={id}
                className={`
                    ${labelClass} 
                    ${formatPrice ? 'left-9' : 'left-4'} 
                    ${errors ? 'text-rose-500' : 'text-zinc-400'}`}> {label} </label>

            {errors && <p className="absolute right-[0.2rem] -bottom-4 text-rose-500 text-[0.6rem]">{errors.message}</p>}
        </div>
    );
}

export default Input;

const priceIcon = 'text-neutral-700 absolute top-5 left-2';
const input = 'peer w-full h-[3rem] font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70' +
    ' disabled:cursor-not-allowed';
const labelClass = 'absolute text-sm duration-150 transform scale-75 -translate-y-8 top-3.5 z-10 origin-[0] left-1' +
    ' cursor-text' +
    ' peer-placeholder-shown:scale-100 peer-placeholder-shown:left-4' +
    ' peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:left-1';