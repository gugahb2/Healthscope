import { HeaderProps } from './Header'

const hospitals = [
  {
    href: '/melbourne_private_hospital',
    text: 'Melbourne Private Hospital',
    target: '',
  },
  {
    href: '/healthscope_head_office',
    text: 'Healthscope Head Office',
    target: '',
  },
  {
    href: '/john_fawkner_private_hospital',
    text: 'John Fawkner Private Hospital',
    target: '',
  },
  {
    href: '/dorset_rehabilitation_centre',
    text: 'Dorset Rehabilitation Centre',
    target: '',
  },
  {
    href: '/victoria_clinic',
    text: 'The Victoria Clinic',
    target: '',
  },
  {
    href: '/melbourne_clinic',
    text: 'The Melbourne Clinic',
    target: '',
  },
  {
    href: '/north_eastern_rehabilitation_centre',
    text: 'North Eastern Rehabilitation Centre',
    target: '',
  },
  {
    href: '/la_trobe_private_hospital',
    text: 'La Trobe Private Hospital',
    target: '',
  },
  {
    href: '/holmesglen_private_hospital',
    text: 'Holmesglen Private Hospital',
    target: '',
  },
  {
    href: '/northpark_private_hospital',
    text: 'Northpark Private Hospital',
    target: '',
  },
  {
    href: '/melbourne_private_hospital',
    text: 'Bellbird Private Hospital',
    target: '',
  },
  {
    href: '/victorian_rehabilitation_centre',
    text: 'The Victorian Rehabilitation Centre',
    target: '',
  },
  {
    href: '/knox_private_hospital',
    text: 'Knox Private Hospital',
    target: '',
  },
  {
    href: '/geelong_clinic',
    text: 'The Geelong Clinic',
    target: '',
  },
  {
    href: '/ringwood_private_hospital',
    text: 'Ringwood Private Hospital',
    target: '',
  },
  {
    href: '/frankston_private_hospital',
    text: 'Frankston Private Hospital',
    target: '',
  },
]

const specialties = [
  {
    href: '/bariatric_surgery',
    text: 'Bariatric surgery',
    target: '',
  },
  {
    href: '/cardiology',
    text: 'Cardiology',
    target: '',
  },
  {
    href: '/cardiothoracic_surgery',
    text: 'Cardiothoracic surgery',
    target: '',
  },
  {
    href: '/colorectal_surgery',
    text: 'Colorectal surgery',
    target: '',
  },
  {
    href: '/ear_nose_throat',
    text: 'Ear, Nose and Throat',
    target: '',
  },
  {
    href: '/endocrinology',
    text: 'Endocrinology',
    target: '',
  },
  {
    href: '/gastroenterology',
    text: 'Gastroenterology',
    target: '',
  },
  {
    href: '/general_surgery',
    text: 'General surgery',
    target: '',
  },
  {
    href: '/gynaecology',
    text: 'Gynaecology',
    target: '',
  },
  {
    href: '/haematology',
    text: 'Haematology',
    target: '',
  },
  {
    href: '/internal_medicine',
    text: 'Internal medicine',
    target: '',
  },
  {
    href: '/neurology',
    text: 'Neurology',
    target: '',
  },
  {
    href: '/neurosurgery',
    text: 'Neurosurgery',
    target: '',
  },
  {
    href: '/obstetrics_gynaecology',
    text: 'Obstetrics and Gynaecology',
    target: '',
  },
  {
    href: '/oncology',
    text: 'Oncology',
    target: '',
  },
  {
    href: '/oral_maxillo_surgery',
    text: 'Oral and Maxillo surgery',
    target: '',
  },
  {
    href: '/orthopaedic_surgery',
    text: 'Orthopaedic surgery',
    target: '',
  },
  {
    href: '/paediatric_surgery',
    text: 'Paediatric surgery',
    target: '',
  },
  {
    href: '/physicians',
    text: 'Physicians',
    target: '',
  },
  {
    href: '/plastic_reconstructive_surgery',
    text: 'Plastic & reconstructive surgery',
    target: '',
  },
  {
    href: '/respiratory_medicine',
    text: 'Respiratory medicine',
    target: '',
  },
  {
    href: '/urology',
    text: 'Urology',
    target: '',
  },
  {
    href: '/vascular_surgery',
    text: 'Vascular surgery',
    target: '',
  },
]

export const data: HeaderProps = {
  logo: {
    src: '/images/logo.svg',
    alt: 'LOGO',
  },
  mobileLogo: {
    src: '/images/logo_1.svg',
    alt: 'LOGO',
  },
  menuList: [
    {
      href: '',
      text: 'Hospitals',
      target: '',
      subMenu: {
        isGroup: true,
        heading: 'State',
        items: [
          {
            groupName: 'Australian Capital Territory',
            links: hospitals,
          },
          {
            groupName: 'New South Wales',
            links: hospitals.slice(3),
          },
          {
            groupName: 'Northern Territory',
            links: hospitals.slice(1),
          },
          {
            groupName: 'Queensland',
            links: hospitals.slice(5),
          },
          {
            groupName: 'South Australia',
            links: hospitals.slice(4),
          },
          {
            groupName: 'Tasmania',
            links: hospitals.slice(3),
          },
          {
            groupName: 'Victoria',
            links: hospitals.slice(7),
          },
          {
            groupName: 'Western Australia',
            links: hospitals.slice(2),
          },
        ],
      },
    },
    {
      href: '',
      text: 'Specialties',
      target: '',
      subMenu: {
        items: specialties,
      },
    },
    {
      href: '/locations',
      text: 'Locations',
      target: '',
    },
    {
      href: '/contact',
      text: 'Contact',
      target: '',
    },
  ],
}
