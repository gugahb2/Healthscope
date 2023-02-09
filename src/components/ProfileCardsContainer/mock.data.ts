import { IProps } from './ProfileCardsContainer'
import { IProps as IProfileCard} from '../ProfileCard/ProfileCard'
const profileItem: IProfileCard = {
  avatar: {
    src: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    alt: 'LOGO'
  },
  firstName: 'Matthew',
  lastName: 'Brooks',
  title: 'Dr',
  roles: ["MBBS", "BMedSci", "FRACP"],
  specialties: ["Cardiology"],
  location: "Heart Specialists, Melbourne Private Hospital",
  phone: "1300 437 759",
  link: {
    href: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    text: 'View Profile'
  }
}

export const data: IProps = {
  items: [
    profileItem,
    profileItem,
    profileItem,
    profileItem,
    profileItem,
    profileItem,
    profileItem,
    profileItem,
    profileItem,
    profileItem,
    profileItem,
    profileItem,
    profileItem,
    profileItem
  ],
}
