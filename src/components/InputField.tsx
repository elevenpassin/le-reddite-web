import { FC, InputHTMLAttributes } from 'react'
import { useField } from 'formik'
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/core'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
}

const InputField: FC<InputFieldProps> = ({ label, size: _, ...props }) => {
  const [field, { error }] = useField(props)
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}> {label} </FormLabel>
      <Input {...field} {...props} id={field.name} placeholder={props.placeholder} />
      {
        error ? <FormErrorMessage>{error}</FormErrorMessage> : null
      }
    </FormControl>
  )
}

export default InputField
