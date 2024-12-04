import * as yup from 'yup';

// Esquema de validación con Yup
export const address_form = yup.object().shape({
    calle: yup.string().required('La calle es obligatoria'),
    numExt: yup.string().required('El número exterior es obligatorio'),
    numInt: yup.string().nullable(),
    colonia: yup.string().required('La colonia es obligatoria'),
    cp: yup.string().required('El código postal es obligatorio')
        .matches(/^\d{5}$/, 'El código postal debe ser un número de 5 dígitos'),
    municipio: yup.string().required('El municipio es obligatorio'),
    estado: yup.string().required('El estado es obligatorio'),
    tipoVivienda: yup.string().required('El tipo de vivienda es obligatorio'),
});