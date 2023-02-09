import React from 'react'
import styles from './styles.module.scss'
import FormContainer, {IFormGroup} from '../FormContainer/FormContainer'

export interface IProps {
  id: string
  heading: string
  formGroups: IFormGroup[]
}

const ContactUs = ({
  id,
  heading,
  formGroups
}: IProps) => {
  return (
    <div className='section-container'>
      <div className={styles.formWrapper}>
        {heading && (
          <h1 className={styles.heading}>{heading}</h1>
        )}
        <FormContainer
          formGroups={formGroups}
          formId={id}
        />
      </div>
    </div>
  )
}

export default ContactUs
