import {IconType} from "react-icons";

export interface MenuListProps {
    name: string;
    link?: string;
    icon?: JSX.Element;
    onClick: () => void;
}

export interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;

    theme?: "primary" | "neutral";
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    type?: "button" | "submit" | "reset";
    icon?: IconType;
    className?: string;
}

export interface ModalProps {
    children: React.ReactNode;
    dialogFor: string;

    isOpen?: boolean;
    disable: boolean;
    title?: string;
    subtitle?: string;
    primaryAction: string;
    secondaryAction?: string;
    footer?: React.ReactNode;

    onClose: () => void;
    primaryActionCallback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    secondaryActionCallback?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface AuthUser {
    name?: string;
    email: string;
    password: string;
}
