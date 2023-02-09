import React, { Fragment } from 'react'
import { ILink, IImage } from '../../interfaces/base'
import RoundButton from '../../shared-components/RoundButton'
import WaveBackground from '../../shared-components/WaveBackground'
import Wysiwyg from '../Wysiwyg/Wysiwyg'
import classnames from 'classnames'
import styles from './profile_detail.module.scss'
import DownloadButton from './DownloadButton'
import { formatAddress, formatPhoneNumber, isValidPhoneNumber } from '../../scripts/utils'
import { IContactProps } from '../ProfileCard/ProfileCard'

export interface ProfileProps {
  avatar?: IImage
  name?: string
  title?: string
  firstName?: string
  lastName?: string
  roles?: string[]
  phone?: string
  fax?: string
  email?: string
  site?: string
  address?: string
  link?: ILink
  hideEmail?: boolean
  hidePhone?: boolean
  hideFax?: boolean
  specialties?: string[]
  contactDetails?: IContactProps[]
  pdfInstance: any
}

const ProfileDetailsCard = ({
  avatar,
  name,
  title,
  firstName,
  lastName,
  roles,
  site,
  link,
  hideEmail,
  hidePhone,
  hideFax,
  specialties,
  contactDetails,
  pdfInstance
}: ProfileProps) => {
  const names = [];
  if (title) names.push(title);
  if (firstName) names.push(firstName);
  if (lastName) names.push(lastName);
  const fullName = names.length > 0 ? names.join(' ') : '';
  const avatar_url = avatar && avatar.src ? avatar.src : '/images/default_avatar.jpg'
  const roles_str = roles && roles.length > 0 ? roles.join(', ') : null
  const specialty_str = specialties ? specialties.join(", ") : ""
  let infoList = []
  const temp = contactDetails.map((item) => {
    const info = {
      phone: hidePhone
        ? null
        : isValidPhoneNumber(item.alternatePhone, 'alt')
          ? formatPhoneNumber(item.alternatePhone)
          : isValidPhoneNumber(item.phone, 'no-alt') ? formatPhoneNumber(item.phone) : null,
      fax: !hideFax && isValidPhoneNumber(item.fax, 'no-alt') ? formatPhoneNumber(item.fax) : null,
      email: !hideEmail && item.email && item.email !== ' ' ? item.email : null,
      hospital: item.hospitalName,
      address: formatAddress(item?.consultingAddress) || formatAddress(item?.address)
    }
    const index = infoList.findIndex(x =>
      x.phone === info.phone
      && x.fax === info.fax
      && x.email === info.email
      && x.address === info.address
    )
    
    if (index === -1) {
      infoList.push(info)
      return info
    }
    return null
  })
  const contactInfo = temp.filter((item) => !!item)
  const fileName = name.split(' ').join('_') + 'pdf';

  const downloadLink: ILink = {
    href: pdfInstance?.loading ? '' : (pdfInstance?.url || ''),
    text: pdfInstance?.loading ? 'Loading...' : 'Download PDF'
  }

  return (
    <>
      <div className={styles.profile__card}>
        <WaveBackground className={styles.waveBg} />
        {avatar_url && (
          <div className={styles.avatar}>
            <div
              className={styles.avatarImage}
              role="img"
              aria-label={`${name || fullName}-${specialty_str}`}
              style={{ backgroundImage: `url('${avatar_url}')` }}></div>
          </div>
        )}
        <div className={styles.description}>
          {(name || fullName) && <h2 className='text-heading-4 uppercase'>{name || fullName}</h2>}
          {roles_str && <h3>{roles_str}</h3>}
        </div>
        <ul className={styles.table}>
          {(contactInfo.length === 1 || contactInfo.length < contactDetails.length) && (
            <h3 className='mt-4 mb-2 font-bold uppercase'>Contact Details</h3>
          )}
          {contactInfo.map((item, index) => {
            if (!item) return
            return (
              <Fragment key={index}>
                <>
                  {contactInfo.length > 1 && contactInfo.length === contactDetails.length && item.hospital && (
                    <h3 className='mt-4 mb-2 font-bold uppercase'>{item.hospital}</h3>
                  )}
                  {(item.phone || item.fax) &&
                    <li className='flex'>
                      {item.phone &&
                        <a
                          href={`tel:${item.phone}`}
                          className={classnames(
                            styles.space2,
                            'flex items-center flex-1',
                            { 'border-right': item.fax }
                          )}>
                          <i className='hs hs-phone-alt' aria-hidden />
                          <p>{item.phone || ''}</p>
                        </a>
                      }
                      {item.fax &&
                        <a
                          href={`tel:${item.fax}`}
                          className={classnames(
                            styles.space2,
                            'flex items-center flex-1',
                            { 'pl-3': item.phone }
                          )}>
                          <i className='hs hs-fax-alt' aria-hidden />
                          <p>{item.fax || ''}</p>
                        </a>
                      }
                    </li>
                  }
                  {item.email && (
                    <li className={styles.space1}>
                      <a href={`mailto:${item.email.toLowerCase()}`}>{item.email}</a>
                    </li>
                  )}
                  <li className={styles.space1}>
                    <label>Consulting Address</label>
                    <Wysiwyg content={item.address} fullWidth={true} />
                  </li>
                </>
              </Fragment>
            )
          })}
          {site && (
            <li className={styles.space1}>
            <label>Website</label>
            <p>
              <a
                target="_blank"
                href={
                  site.startsWith("http") ? site : `http://${site}`
                }
                rel="noreferrer"
              >
                {site}
              </a>
            </p>
          </li>
          )}
        </ul>
        {link && <RoundButton label={link.text || ''} link={link} />}
        {downloadLink && <DownloadButton label={downloadLink.text || ''} link={downloadLink} fileName={fileName} />}
      </div>
    </>
  )
}

export default ProfileDetailsCard
