import { Fragment } from 'react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { FieldHookConfig, useField } from 'formik';
import { Label, Input, Error } from './styles';

type Props = FieldHookConfig<string> & {
  children: React.ReactNode;
};

function CheckboxInput({ children, ...props }: Props): EmotionJSX.Element {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <Fragment>
      <Label>
        <Input type="checkbox" {...field} {...(props as InputProps)} />
        {children}
      </Label>
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </Fragment>
  );
}

export default CheckboxInput;
