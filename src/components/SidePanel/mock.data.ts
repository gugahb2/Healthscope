import { IProps } from './SidePanel'

export const data: IProps = {
  heading: 'Find a Specialist',
  subHeading: 'Specialist Search',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at accumsan enim ut donec eget mollis pellentesque. Varius mattis quis est, ut congue mi malesuada. In quam auctor turpis sagittis iaculis massa tristique. Ultricies tincidunt id pellentesque egestas.',
  dropdowns: [
    {
      name: 'state',
      label: 'State',
      items: [
        {
          value: 'VIC-1',
          label: 'VIC-1',
          selected: true
        },
        {
          value: 'VIC-2',
          label: 'VIC-2',
          selected: false
        },
        {
          value: 'VIC-3',
          label: 'VIC-3',
          selected: false
        },
      ],
      isBorder: true,
      handleParameter: (key: string, value: string) => {}
    },
    {
      name: 'specialty',
      label: 'Specialty',
      items: [
        {
          value: 'Cardiology',
          label: 'Cardiology',
          selected: false
        },
        {
          value: 'VIC-4',
          label: 'VIC-4',
          selected: true
        },
        {
          value: 'VIC-5',
          label: 'VIC-5',
          selected: false
        },
      ],
      isBorder: true,
      handleParameter: (key: string, value: string) => {}
    },
    {
      name: 'hospital',
      label: 'Hospital',
      items: [
        {
          value: 'Melbourne Private Hospital',
          label: 'Melbourne Private Hospital',
          selected: true
        },
        {
          value: 'VIC',
          label: 'VIC',
          selected: false
        },
        {
          value: 'VIC-6',
          label: 'VIC-6',
          selected: false
        },
      ],
      isBorder: true,
      handleParameter: (key: string, value: string) => {}
    },
  ],
}
