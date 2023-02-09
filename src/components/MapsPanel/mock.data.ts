import { IProps } from './MapsPanel'

export const data: IProps = {
  heading: 'Find us',
  content: `
  <p>Melbourne Private Hospital</p>
  <p>Royal Parade, Parkville VIC 3052</p>
  <p>Phone: 03 8341 3400  |  Fax: 03 8341 3421</p>`,
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
