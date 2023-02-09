import { IProps } from './SpecialistsSearch'

export const data: IProps = {
  heading: 'Find a specialist',
  description: 'Healthscope Assist is a fast and convenient way to find and contact the most appropriate and highly trained medical practitioners across our Australian hospital network.',
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
          value: 'AAA',
          label: 'AAA',
          selected: false
        },
        {
          value: 'VIC-5',
          label: 'VIC-5',
          selected: false
        },
        {
          value: 'ALL',
          label: 'ALL',
          selected: false
        },
      ],
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
      handleParameter: (key: string, value: string) => {}
    },
  ],
  isCenterAligned: false,
}
