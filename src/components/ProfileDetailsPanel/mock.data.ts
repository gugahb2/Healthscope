import { ProfileDetailProps } from './ProfileDetailsPanel'
import { ProfileProps } from './ProfileDetailsCard'

export const card: ProfileProps = {
  avatar: {
    src: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    alt: 'LOGO',
  },
  firstName: 'Matthew',
  lastName: 'Brooks',
  title: 'Dr',
  roles: ['MBBS', 'BMedSci', 'FRACP'],
  phone: '1300 437 758',
  fax: '1300 437 759',
  email: 'email@heartspecialists.com.au',
  site: 'www.heartspecialists.com.au',
  address: `<p>Suite 31, Showgrounds Village,</p><p>320-380 Epsom Road,</p><p>Flemington VIC 3031</p>`,
  link: {
    href: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    text: 'Book Apointment',
  },
  pdfInstance: {}
}

const hospitalInfo = {
  name: 'Norwest Private Hospital',
  address: '11 Norbrik Drive, Bella Vista NSW 2153',
  phone: '02 8882 8882',
  fax: '02 8882 8883',
  email: 'norwestprivatehospital.com.au',
  abn: '85 006 405 152'
}

export const data: ProfileDetailProps = {
  heading: 'Dr Matthew Brooks',
  subHeading: 'Cardiologist',
  introText: '<p>Matthew completed his medical training at the University of Melbourne followed by specialist cardiology and interventional training at the Royal Melbourne Hospital. He undertook two further fellowships at The Edinburgh Heart Centre and Copenhagen University Hospital with a focus on complex percutaneous coronary intervention and structural heart disease intervention.</p>',
  expertise: `<p>Matthew’s expertise is in:</p><br/>
  <p>Complex percutaneous coronary artery intervention, including</p>
  <ul><li>Chronic total occlusions, and</li>
  <li>Left main PCI and rotational atherectomy</li></ul>
  <p>Structural heart disease intervention including</p>
  <ul><li>Transcatheter aortic valve replacement and mitral valve repair/replacement,</li>
  <li>Percutaneous left atrial appendage closure,</li>
  <li>Device closure of interatrial defects, and</li>
  <li>Paravalvular leak closure.</li></ul>
  `,
  interest: `<p>Dr Matthew Brooks has specialist interests in</p>
  <p>Percutaneous coronary artery intervention</p>
  <p>Structural heart disease intervention</p><br/>
  <p>He is a consultant cardiologist at the Royal Melbourne Hospital and also practices at John Fawkner Private Hospital and Melbourne Private Hospital.</p>
  `,
  profileCard: card,
  hospitals: [hospitalInfo]
}
