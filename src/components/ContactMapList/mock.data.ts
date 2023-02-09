import { ContactMapListProps } from './ContactMapList'

const itemData = {
  name: 'Hospital Name',
  phone: '03 9374 4884',
  fax: '03 9374 4884',
  address: `<p>Suite 31, Showgrounds Village,</p><p>320-380 Epsom Road,</p><p>Flemington VIC 3031</p>`,
  map: {
    zoom: 19,
    center: { lat: -37.7983627, lng: 144.9572084 },
    locations: [{ lat: -37.7983627, lng: 144.9572084 }],
    mapIcon: {
      url: '/images/marker_icon.png',
      width: 50,
      height: 50,
    },
  },
}

export const data: ContactMapListProps = {
  heading: 'Dr Alex Eskander',
  subHeading: 'is available at',
  items: [itemData, itemData, itemData],
  backgroundColour: 'bg-light',
}
