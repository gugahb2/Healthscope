import React, { useState, Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import classnames from 'classnames'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import {
  createYupSchema,
  IYupSchemaFields,
} from '../../common/yupSchemaCreator'
import FormControlFactory from './FormControlFactory'
import Spinner from '../../shared-components/Spinner'

interface IOption {
  label: string
  value: string | number
  isDefault?: boolean
}

interface IFormValidation {
  type: string
  params: Array<any>
}

export interface IFormGroup {
  id?: string
  name: string
  type: string
  label?: string
  placeholder?: string
  required?: boolean
  helpText?: string
  options?: IOption[]
  width?: string
  numOfRows?: number
  inline?: boolean
  defaultValue?: string | number
  defaultLabel?: string
  validationType?: string
  validations?: IFormValidation[]
}

export interface IProps {
  formId: string
  formGroups: IFormGroup[]
}

const FormContainer = ({ formId, formGroups }: IProps) => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const schemaFields: IYupSchemaFields = formGroups?.reduce(createYupSchema, {})
  const schema = yup.object().shape(schemaFields)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_FORMSUBMISSION
    
    const payload = {
      URL: router && router.asPath,
      formId: formId,
      payload: getValues()
    }

    setLoading(true)

    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      setLoading(false)
      toast.success('Submitted the form successfully', {autoClose: 2000, theme: 'colored'})
    })
    .catch((error) => {
      setLoading(false)
      toast.error('Failed', {autoClose: 2000, theme: 'colored'})
    })
  }

  return formGroups && formGroups.length > 0 ? (
    <div className='custom-form-container'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        encType="multipart/form-data">
        <div className='flex-wrap block w-full md:flex'>
          {formGroups.map((formGroup, index) => {
            if (!formGroup.name) return null
            return (
              <Fragment key={index}>
                <div className={classnames(
                  'mb-5 w-full',
                  formGroup.width === 'w-1/2' ? 'md:w-1/2' : ''
                )}>
                  <FormControlFactory
                    formGroup={formGroup}
                    register={register}
                    errors={errors}
                  />
                  {formGroup.type !== 'radio' &&
                    formGroup.type !== 'checkbox' &&
                    errors[formGroup.name]?.message && (
                      <div className='px-3 text-red-500'>
                        {errors[formGroup.name].message}
                      </div>
                    )}
                </div>
              </Fragment>
            )
          })}
        </div>
      </form>
      {loading && <Spinner />}
    </div>
  ) : null
}

export default FormContainer
