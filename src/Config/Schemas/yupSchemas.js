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

    .typeError('La edad debe ser un número')
    .transform((value, originalValue) => (originalValue.trim() === '' ? undefined : value))
        .required('La edad es obligatoria')
        .integer('La edad debe ser un número entero')
        .min(18, 'Debes tener al menos 18 años')
        .max(100, 'La edad máxima es 100 años'),
    phone: yup.string()
    .matches(/^\+?\d+$/, 'El número de teléfono solo debe contener números y un prefijo opcional (+)')
      .transform((value) => {
          const cleanPhone = value.replace(/[^+\d]/g, ''); // Limpia caracteres extra
          const hasCountryCode = /^\+\d{1,3}/.test(cleanPhone);
          return hasCountryCode ? cleanPhone : `+52${cleanPhone}`;
      })
      .required('El número de teléfono es obligatorio'),
});


export const historial_form = yup.object().shape({
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

  export const login_form = yup.object().shape({
    correo: yup
      .string()
      .email('Ingresa un correo válido.')
      .required('El correo es obligatorio.'),
    contrasena: yup
      .string()
      .min(8, 'ingresa una contraseña válida.')
      .required('La contraseña es obligatoria.'),
  });

  export const create_form = yup.object().shape({
    correo: yup
      .string()
      .email('Ingresa un correo válido.')
      .required('El correo es obligatorio.'),
    contrasena: yup
      .string()
      .min(8, 'ingresa una contraseña válida.')
      .required('La contraseña es obligatoria.'),
  });


