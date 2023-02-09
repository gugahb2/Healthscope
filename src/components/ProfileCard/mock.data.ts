import { IProps } from './ProfileCard'

export const data: IProps = {
  avatar: {
    src: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    alt: 'LOGO',
  },
  firstName: 'Matthew',
  lastName: 'Brooks',
  title: 'Dr',
  roles: ['MBBS', 'BMedSci', 'FRACP'],
  location: `<p>Heart Specialists, Melbourne Private Hospital</p><p>Heart Specialists, Melbourne Private Hospital</p><p>Heart Specialists, Melbourne Private Hospital</p><p>Heart Specialists, Melbourne Private Hospital</p>`,
  specialties: ['Cardiology'],
  phone: '1300 437 758',
  fax: '1300 437 759',
  link: {
    href: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    text: 'View Profile',
  },
}
