import toast from 'react-hot-toast';

export const toastSucces = (message) => {
    toast.success(message);
}

export const toastError = (message) => {
    toast.error(message, {
        position: "top-center",  
    });
};