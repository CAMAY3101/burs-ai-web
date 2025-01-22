const api_local = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const endpoint = {
    checkToken: `${api_local}/check-cookie`,
    usuarios: {
        getUsuarios: `${api_local}/usuarios/getUsuarios`,
        login: `${api_local}/usuarios/login`,
        createUser: `${api_local}/usuarios/createUser`,
        logout: `${api_local}/usuarios/logout`,
        updateDataUser: `${api_local}/usuarios/updateDataUser`,
        getVerificacionStepStatus: `${api_local}/usuarios/getVerificacionStepStatus`,
        getSecureEmailUser: `${api_local}/usuarios/getSecureEmailUser`,
        getSecurePhoneUser: `${api_local}/usuarios/getSecurePhoneUser`,
    },
    verificacion: {
        sendOTPCodeEmail: `${api_local}/verificacion/sendOTPCodeEmail`,
        sendOTPCodePhoneNumber: `${api_local}/verificacion/sendOTPCodePhoneNumber`,
        resendOTPCodeEmail: `${api_local}/verificacion/resendOTPCodeEmail`,
        resendOTPCodePhoneNumber: `${api_local}/verificacion/resendOTPCodePhoneNumber`,
        verifyEmail: `${api_local}/verificacion/verifyEmail`,
        verifyPhoneNumber: `${api_local}/verificacion/verifyPhoneNumber`,
        verifyIdentity: `${api_local}/verificacion/verifyIdentity`,
        verifyID: `${api_local}/verificacion/verifyID`,
    },

    historial: {
        updateDataHistorial: `${api_local}/historial/updateDataHistorial`,
    },

    direccion: {
        createDireccion: `${api_local}/direccion/createDireccion`,
    },

    FAD: {
        generateToken: `${api_local}/FAD/generateToken`,
        createValidation: `${api_local}/FAD/createValidation`,
        getValidationStep: `${api_local}/FAD/getValidationStep`,
        getValidationData: `${api_local}/FAD/getValidationData`,
        getUserInFAD: `${api_local}/FAD/getUserInFAD`,
    },
};
