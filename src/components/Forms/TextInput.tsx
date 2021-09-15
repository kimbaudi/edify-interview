import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { FieldHookConfig, useField } from 'formik';
import { Label, Input, Error } from './styles';

function TextInput({
  label,
  ...props
}: {
  label: string;
} & FieldHookConfig<string>): EmotionJSX.Element {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input {...field} {...(props as InputProps)} />
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </>
  );
}

export default TextInput;
