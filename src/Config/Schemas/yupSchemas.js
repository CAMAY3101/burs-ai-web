import * as yup from 'yup';

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

const phoneSchema = yup
  .string()
  .transform((value, originalValue) => {
    if (!originalValue) return originalValue;
    const cleanPhone = originalValue.replace(/[^+\d]/g, '');
    const hasCountryCode = /^\+\d{1,3}/.test(cleanPhone);
    return hasCountryCode ? cleanPhone : `+52${cleanPhone}`;
  })
  .matches(
    /^\+?\d{10,15}$/,
    'El número de teléfono debe tener entre 10 y 15 dígitos y puede incluir un prefijo internacional (+)'
  )
  .test(
    'valid-length',
    'El número de teléfono debe tener al menos 10 dígitos sin incluir el prefijo',
    (value) => {
      if (!value) return false;
      const digitsOnly = value.replace(/\D/g, '');
      return digitsOnly.length >= 10;
    }
  );

export const datos_form = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio').min(2, 'El nombre es obligatorio'),
  apellidos: yup.string().required('El apellido es obligatorio').min(2, 'El apellido es obligatorio'),
  curp: yup.string().trim().required('La CURP es obligatoria').length(18, 'La CURP debe tener 18 caracteres')
    .matches(
      /^[A-Z]{4}\d{6}[HM][A-Z]{5}[0-9A-Z]{2}$/,
      'La CURP no es válida'
    ),
  fecha_nacimiento: yup
    .date()
    .typeError('La fecha de nacimiento es inválida')
    .required('La fecha de nacimiento es obligatoria'),
  telefono: phoneSchema,
  op_telefono: phoneSchema,
});


export const historial_form = yup.object().shape({
  salarioMensual: yup.number().required('El salario mensual es obligatorio')
    .min(1, 'El salario mensual debe ser mayor a 0')
    .typeError('El salario mensual debe ser un número válido'),
  ocupacion: yup.string().min(1, 'Debes seleccionar al menos una ocupación')
    .required('La ocupación es obligatoria'),
  industria: yup.string().min(1, 'Debes seleccionar al menos una industria')
    .required('La industria es obligatoria'),
  subindustria: yup.string().min(1, 'Debes seleccionar al menos una subindustria')
    .required('La subindustria es obligatoria'),
  salarioFamiliar: yup.number().required('El salario familiar es obligatorio')
    .min(1, 'El salario familiar debe ser mayor a 0')
    .typeError('El salario familiar debe ser un número válido'),
  calificacionCrediticia: yup.string().min(1, 'Debes seleccionar al menos una calificación crediticia')
    .required('La calificación crediticia es obligatoria'),
  usoPrestamo: yup.string().min(1, 'Debes seleccionar al menos un uso para el préstamo')
    .required('El uso del préstamo es obligatorio'),
  pagoAtravesBanco: yup.bool()
    .transform((value) => {
      const res = value === "Sí" ? true : false
      return res
    })
    .required('Es necesario indicar si el pago es a través de un banco'),
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

export const email_Verification = yup.object({
  otpCode: yup
    .string()
    .required('El código OTP es obligatorio')
    .matches(/^\d{6}$/, 'El código OTP debe contener exactamente 6 números'),
});

export const phone_Verification = yup.object({
  otpCode: yup
    .string()
    .required('El código OTP es obligatorio')
    .matches(/^\d{6}$/, 'El código OTP debe contener exactamente 6 números'),
});

