
import React from "react";
import { ButtonProps } from "@/types/appTypes";

//#region Styles
const btnClass = 'relative disabled:opacity-70 disabled:cursor-not-allowed rounded-md' +
    ' hover:opacity-80 transition flex flex-row items-center justify-between';
const iconCls = 'absolute left-4';
const labelCls = 'flex-1 text-center text-lg';
//#endregion

const Button: React.FC<ButtonProps> = ({
    label, onClick, disabled, outline, small,
    icon: Icon, className, type = 'button', theme = 'primary'
}) => {

    return (
        <button disabled={disabled} onClick={onClick} type={type}
            className={`
            ${btnClass}
            ${outline ? ' bg-white ' : (theme === 'primary' ? 'bg-primary-600' : 'bg-neutral-200/30')}
            ${outline ? ' border-black ' : (theme === 'primary' ? 'border-primary-600' : 'border-neutral-200/20')}
            ${outline ? ' text-black' : (theme === 'primary' ? 'text-white' : 'text-primary-600')}
            ${small ? ' text-sm' : ' text-md'}
            ${small ? ' py-1' : ' py-2'}
            ${small ? ' font-light' : ' font-medium'}
            ${small ? ' border-[1px]' : ' border-2'}
            ${small ? ' px-3' : ' px-5'}
            ${className}
            `}>
            {Icon && <Icon size={20} className={iconCls} />}
            <span className={labelCls}>{label}</span>
        </button>
    );
}

export default Button;
