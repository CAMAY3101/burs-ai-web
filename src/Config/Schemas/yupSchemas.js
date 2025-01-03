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

export const datos_form = yup.object().shape({
    name: yup.string().required('El nombre es obligatorio').min(2, 'El nombre es obligatorio'),
    lastName: yup.string().required('El apellido es obligatorio').min(2, 'El apellido es obligatorio'),
    age: yup.number()
        .required('La edad es obligatoria')
        .integer('La edad debe ser un número entero')
        .min(18, 'Debes tener al menos 18 años')
        .max(100, 'La edad máxima es 100 años'),
    phone: yup.string()
        .required('El teléfono es obligatorio')
        .matches(/^\+\d{1,3}\s?\(?\d{1,3}\)?\s?\d{4}\s?\d{6}$/, 'El número de teléfono no es válido')
});


const historial_form = yup.object().shape({
    salarioMensual: yup.number().required('El salario mensual es obligatorio')
      .min(1, 'El salario mensual debe ser mayor a 0')
      .typeError('El salario mensual debe ser un número válido'),
    ocupacion: yup.array().min(1, 'Debes seleccionar al menos una ocupación')
      .required('La ocupación es obligatoria'),
    industria: yup.array().min(1, 'Debes seleccionar al menos una industria')
      .required('La industria es obligatoria'),
    subindustria: yup.array().min(1, 'Debes seleccionar al menos una subindustria')
      .required('La subindustria es obligatoria'),
    salarioFamiliar: yup.number().required('El salario familiar es obligatorio')
      .min(1, 'El salario familiar debe ser mayor a 0')
      .typeError('El salario familiar debe ser un número válido'),
    calificacionCrediticia: yup.array().min(1, 'Debes seleccionar al menos una calificación crediticia')
      .required('La calificación crediticia es obligatoria'),
    usoPrestamo: yup.array().min(1, 'Debes seleccionar al menos un uso para el préstamo')
      .required('El uso del préstamo es obligatorio'),
    pagoAtravesBanco: yup.boolean().required('Es necesario indicar si el pago es a través de un banco'),
  });


