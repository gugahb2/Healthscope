import React, { Fragment } from 'react'
import { ILink, IImage } from '../../interfaces/base'
import RoundButton from '../../shared-components/RoundButton'
import WaveBackground from '../../shared-components/WaveBackground'
import Wysiwyg from '../Wysiwyg/Wysiwyg'
import classnames from 'classnames'
import styles from './styles.module.scss'
import { formatPhoneNumber, isValidPhoneNumber } from '../../scripts/utils'

export interface IContactProps {
  address?: string
  consultingAddress?: string
  email?: string
  fax?: string
  hospitalName?: string
  phone?: string
  alternatePhone?: string
  site?: string
  isPrimaryHospital?: boolean
}
export interface IProps {
  avatar?: IImage
  name?: string
  firstName?: string
  lastName?: string
  title?: string
  roles?: string[]
  specialties?: string[]
  location?: string
  phone?: string
  fax?: string
  link?: ILink
  hidePhone?: boolean
  hideFax?: boolean
  contactDetails?: IContactProps[]
}

const ProfileCard = ({
  avatar,
  name,
  firstName,
  lastName,
  title,
  roles,
  specialties,
  location,
  link,
  hidePhone,
  hideFax,
  contactDetails
}: IProps) => {
  const names = [];
  if (title) names.push(title);
  if (firstName) names.push(firstName);
  if (lastName) names.push(lastName);
  const fullName = names.length > 0 ? names.join(' ') : '';
  const avatar_url =
    avatar && avatar.src ? avatar.src : '/images/default_avatar.jpg'
  const roles_str = roles && roles.length > 0 ? roles.join(', ') : null
  const specialties_str =
    specialties && specialties.length > 0 ? specialties.join(', ') : null
  const link_url = link ? link.href : '#'
  const idx = contactDetails.findIndex((item) => item.isPrimaryHospital)
  const primaryIndex = (idx > -1) ? idx : 0
  const primaryHospital = contactDetails && contactDetails.length > 0 && contactDetails[primaryIndex]
  const phoneNumber = hidePhone
    ? null
    : isValidPhoneNumber(primaryHospital.alternatePhone, 'alt')
      ? formatPhoneNumber(primaryHospital.alternatePhone)
      : isValidPhoneNumber(primaryHospital.phone, 'no-alt')
        ? formatPhoneNumber(primaryHospital.phone)
        : null;

  const faxNumber = !hideFax && isValidPhoneNumber(primaryHospital.fax, 'no-alt')
        ? formatPhoneNumber(primaryHospital.fax)
        : null;

  return (
    <>
      <div className={styles.profile__card}>
        <WaveBackground className={styles.waveBg} />
        <div>
          {avatar_url && (
            <div className={styles.avatar}>
              <a href={link_url}>
                <div
                  className={styles.avatarImage}
                  style={{ backgroundImage: `url('${avatar_url}')` }}></div>
              </a>
            </div>
          )}
          <div className={styles.description}>
            {(name || fullName) && (
              <h4 className='text-heading-4'>
                <a href={link_url}>{name || fullName}</a>
              </h4>
            )}
            {roles_str && <p>{roles_str}</p>}
          </div>
        </div>
        <ul className={styles.table}>
          {specialties_str && (
            <li className={styles.space1}>
              <label>Areas of Practice</label>
              <p>{specialties_str}</p>
            </li>
          )}
          {location && (
            <li className={styles.space1}>
              <label>Locations</label>
              <Wysiwyg content={location} fullWidth={true} />
            </li>
          )}
          {(phoneNumber || faxNumber) && (
            <li className='flex'>
              {phoneNumber && (
                <a
                  href={`tel:${phoneNumber}`}
                  className={classnames(styles.space2, 'flex items-center flex-1', {
                    'border-right': faxNumber,
                  })}>
                  <i className='hs hs-phone-alt' aria-hidden />
                  <p>{phoneNumber || ''}</p>
                </a>
              )}
              {faxNumber && (
                <a
                  href={`tel:${faxNumber}`}
                  className={classnames(styles.space2, 'flex items-center flex-1', {
                    'pl-3': phoneNumber,
                  })}>
                  <i className='hs hs-fax-alt' aria-hidden />
                  <p>{faxNumber || ''}</p>
                </a>
              )}
            </li>
          )}
        </ul>
        {link && <RoundButton label={link.text || ''} link={link} />}
      </div>
    </>
  )
}

export default ProfileCard
