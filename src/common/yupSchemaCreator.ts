import * as yup from 'yup'

import { IFormGroup } from '../components/FormContainer/FormContainer'

export interface IYupSchemaFields {
  [key: string]:
    | yup.StringSchema<string | null | undefined, object>
    | yup.NumberSchema<number | null | undefined, object>
    | yup.BooleanSchema<boolean | null | undefined, object>
}

export const createYupSchema = (
  schema: IYupSchemaFields,
  config: IFormGroup
) => {
  const { name, validationType, validations = [] } = config
  if (!validationType) return schema
  if (!(yup as any)[validationType]) return schema
  let validator = (yup as any)[validationType]()
  validations.forEach((validation) => {
    const { params, type } = validation
    if (!validator[type]) {
      return
    }
    validator = validator[type](...params)
  })
  schema[name] = validator
  return schema
}
