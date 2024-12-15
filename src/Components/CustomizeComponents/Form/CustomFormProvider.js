import PropTypes from 'prop-types';
import { FormProvider } from 'react-hook-form';

function CustomFormProvider({ children, methods, onSubmit }) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
}

CustomFormProvider.propTypes = {
  children: PropTypes.node,
  methods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CustomFormProvider;
