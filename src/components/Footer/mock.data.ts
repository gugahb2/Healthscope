import { IProps as IFooter } from './Footer'

export const data: IFooter = {
  logo: {
    src: '/images/logo.svg',
    alt: 'LOGO',
  },
  menu: [
    {
      headingLink: { href: '#', target: '', text: 'Help', active: false },
      links: [
        {
          href: '#',
          target: '_blank',
          text: 'For Patients',
          active: false,
        },
        {
          href: '#',
          target: '_blank',
          text: 'For Visitors',
          active: false,
        },
        { href: '#', target: '_blank', text: 'For Doctors', active: false },
      ],
    },
    {
      headingLink: {
        href: '#',
        target: '',
        text: 'Our Assistance',
        active: false,
      },
      links: [
        { href: '#', target: '_blank', text: 'Contact Us', active: false },
        { href: '#', target: '_blank', text: 'Careers', active: false },
        {
          href: '#',
          target: '_blank',
          text: 'Specialist Search',
          active: false,
        },
      ],
    },
    {
      headingLink: {
        href: '#',
        target: '',
        text: 'Healthscope',
        active: false,
      },
      links: [
        { href: '#', target: '_blank', text: 'About', active: false },
        { href: '#', target: '_blank', text: 'Services', active: false },
      ],
    },
  ],
  footerLinks: [
    { href: '#', target: '', text: '© 2021 Healthscope' },
    { href: '#', target: '', text: 'All rights reserved' },
    { href: '#', target: '', text: 'Privacy Policy' },
  ],
}
