import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { FieldHookConfig, useField } from 'formik';
import { Label, Select, Error } from './styles';

function SelectInput({
  label,
  ...props
}: {
  label: string;
} & FieldHookConfig<string>): EmotionJSX.Element {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Select {...field} {...(props as SelectProps)} />
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </>
  );
}

export default SelectInput;
