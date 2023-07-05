import {create} from "zustand";

type loginModalState = {
    loginModalState: boolean;
    setLoginModalState: (state: boolean) => void;
}

export const useLoginModalAtom = create<loginModalState>((set) => ({
    loginModalState: false,
    setLoginModalState: (state: boolean) => set({loginModalState: state}),
}));

type registerModalState = {
    registerModalState: boolean;
    setRegisterModalState: (state: boolean) => void;
}
export const useRegisterModalAtom = create<registerModalState>((set) => ({
    registerModalState: false,
    setRegisterModalState: (state: boolean) => set({registerModalState: state}),
}));

type forgotPasswordModalState = {
    forgotPasswordModalState: boolean;
    setForgotPasswordModalState: (state: boolean) => void;
}
export const useForgotPasswordModalAtom = create<forgotPasswordModalState>((set) => ({
    forgotPasswordModalState: false,
    setForgotPasswordModalState: (state: boolean) => set({forgotPasswordModalState: state}),
}));

type resetPasswordModalState = {
    resetPasswordModalState: boolean;
    setResetPasswordModalState: (state: boolean) => void;
}
export const useResetPasswordModalAtom = create<resetPasswordModalState>((set) => ({
    resetPasswordModalState: false,
    setResetPasswordModalState: (state: boolean) => set({resetPasswordModalState: state}),
}));

type changePasswordModalState = {
    changePasswordModalState: boolean;
    setChangePasswordModalState: (state: boolean) => void;
}
export const useChangePasswordModalAtom = create<changePasswordModalState>((set) => ({
    changePasswordModalState: false,
    setChangePasswordModalState: (state: boolean) => set({changePasswordModalState: state}),
}));

type successModalState = {
    successModalState: boolean;
    setSuccessModalState: (state: boolean) => void;
}
export const useSuccessModalAtom = create<successModalState>((set) => ({
    successModalState: false,
    setSuccessModalState: (state: boolean) => set({successModalState: state}),
}));
