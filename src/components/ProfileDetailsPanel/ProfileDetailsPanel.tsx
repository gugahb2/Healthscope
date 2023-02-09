import React from 'react'
import { useRouter } from 'next/router'
import { usePDF } from '@react-pdf/renderer/lib/react-pdf.browser.cjs.js'

import ProfileDetailsCard, {
  ProfileProps as IProfileCardProps,
} from './ProfileDetailsCard'
import Wysiwyg from '../Wysiwyg/Wysiwyg'
import styles from './profile_detail.module.scss'
import classNames from 'classnames'
import PDFDocument from './PDFDocument';

export interface HospitalProps {
  name: string
  address: string
  phone: string
  fax: string
  email: string
  abn: string
}

export interface ProfileDetailProps {
  heading: string
  subHeading: string
  introText: string // allow html
  expertise?: string
  interest?: string
  profileCard: IProfileCardProps
  hospitals: HospitalProps[]
}

const ProfileDetailsPanel = ({
  heading,
  subHeading,
  introText,
  expertise,
  interest,
  profileCard,
  hospitals
}: ProfileDetailProps) => {
  const router = useRouter()
  const [instance, updateInstance] = usePDF({ document: PDFDocument({
    heading,
    subHeading,
    introText,
    expertise,
    interest,
    profileCard,
    hospitals
  })})

  return (
    <div className='section-container'>
      <div className='sm:mt-5 mt-14 text-body text-white flex justify-start'>
        <div className='cursor-pointer' onClick={() => router.back()}>
          <span className='mr-2'>{'<'}</span> Back
        </div>
      </div>
      <div className={styles.root}>
        <section>
          {profileCard && <ProfileDetailsCard {...profileCard} pdfInstance={instance}/>}
        </section>
        <section className={styles.detail}>
          {heading && (
            <h1 className={classNames(styles.title_1, 'text-heading-3 uppercase')}>
              {heading}
            </h1>
          )}
          {subHeading && (
            <h2 className={classNames(styles.title_2, 'text-heading-4')}>
              {subHeading}
            </h2>
          )}
          {introText && (
            <Wysiwyg
              content={introText}
              fullWidth={true}
              className={classNames(styles.text_2, 'text-heading-light')}
            />
          )}
          <div className={classNames(styles.grid, 'lg:grid grid-cols-12')}>
            {expertise && (
              <div className='col-span-12 md:col-span-6'>
                <h3 className={classNames(styles.title_3, 'text-heading-4')}>
                  Expertise
                </h3>
                <Wysiwyg
                  content={expertise}
                  fullWidth={true}
                  className={styles.text_3}
                />
              </div>
            )}
            {interest && (
              <div className='col-span-12 md:col-span-6'>
                <h3 className={classNames(styles.title_3, 'text-heading-4')}>
                  Interests
                </h3>
                <Wysiwyg
                  content={interest}
                  fullWidth={true}
                  className={styles.text_3}
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProfileDetailsPanel
