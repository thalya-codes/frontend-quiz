import { useState } from "react";

export function usePassword() {
    const [showPassword, setShowPassword] = useState(false);
    const passwordFieldType = showPassword ? 'text' : 'password';
    const passwordIconButtonSupportText = showPassword
    ? 'Ocultar senha'
    : 'Exibir senha';

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev)

    return {
        showPassword,
        passwordFieldType,
        passwordIconButtonSupportText,
        togglePasswordVisibility
    }
}