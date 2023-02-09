import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

import { IFormGroup } from './FormContainer'

interface IProps {
  formGroup: IFormGroup
  register?: any
  errors?: any
  formSubmitting?: boolean
}

const FormControlFactory = ({
  formGroup,
  register,
  errors = {},
  formSubmitting = false,
}: IProps) => {
  if (!formGroup.type) {
    return null
  }
  switch (formGroup.type) {
    case 'text':
      return (
        <div className={styles.formContent}>
          {formGroup.label && (
            <label
              className={`${classNames({ required: formGroup.required }, styles.form_label)}`}>
              {formGroup.label}
            </label>
          )}
          <div>
            <input
              type={formGroup.type}
              id={formGroup.name}
              name={formGroup.name}
              placeholder={formGroup.placeholder}
              className={styles.form_control}
              {...register(formGroup.name)}
            />
          </div>
        </div>
      )
    case 'search':
      return (
        <div className={styles.formContent}>
          {formGroup.label && (
            <label
              className={`${classNames({ required: formGroup.required }, styles.form_label)}`}>
              {formGroup.label}
            </label>
          )}
          <div className='relative'>
            <input
              type={formGroup.type}
              id={formGroup.name}
              name={formGroup.name}
              placeholder={formGroup.placeholder}
              className={styles.form_control}
              {...register(formGroup.name)}
            />
            <div className={styles.icon}><i className='hs hs-search' aria-hidden /></div>
          </div>
        </div>
      )
    case 'email':
    case 'password':
      return (
        <div className={styles.formContent}>
          {formGroup.label && (
            <label
              className={`${classNames({ required: formGroup.required }, styles.form_label)}`}>
              {formGroup.label}
            </label>
          )}
          <input
            type={formGroup.type}
            id={formGroup.name}
            name={formGroup.name}
            placeholder={formGroup.placeholder}
            className={styles.form_control}
            {...register(formGroup.name)}
          />
        </div>
      )
    case 'select':
      if (!formGroup.options?.length) {
        return null
      }
      return (
        <div className={styles.formContent}>
          {formGroup.label && (
            <label
              className={`${classNames({ required: formGroup.required }, styles.form_label)}`}>
              {formGroup.label}
            </label>
          )}
          <div className={styles.wrapper}>
            <select
              id={formGroup.name}
              name={formGroup.name}
              defaultValue={formGroup.defaultValue}
              className={styles.form_control}
              {...register(formGroup.name)}
            >
              {!formGroup.defaultValue && <option value='' className={styles.default_label}>{formGroup.defaultLabel}</option>}
              {formGroup.options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )
    case 'textarea':
      return (
        <div className={styles.formContent}>
          {formGroup.label && (
            <label
              className={`${classNames({ required: formGroup.required }, styles.form_label)}`}>
              {formGroup.label}
            </label>
          )}
          <div>
            <textarea
              id={formGroup.name}
              name={formGroup.name}
              placeholder={formGroup.placeholder}
              rows={formGroup.numOfRows || 5}
              className={styles.form_control}
              {...register(formGroup.name)}
            ></textarea>
          </div>
        </div>
      )
    case 'plaintext':
      if (!formGroup.defaultValue) return null
      return (
        <>
          <div
            className='display-text'
            dangerouslySetInnerHTML={{
              __html: formGroup.defaultValue.toString(),
            }}></div>
        </>
      )
    case 'submit':
      return (
        <button
          type='submit'
          className={styles.button}
          disabled={formSubmitting === true}>
            {formGroup.label || 'Submit'}
        </button>
      )
    case 'checkbox':
    case 'radio':
    default:
      return null
  }
}

export default FormControlFactory
