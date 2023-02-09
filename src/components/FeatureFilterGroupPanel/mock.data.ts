import { IProps } from './FeatureFilterGroupPanel'

export const data: IProps = {
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
    },
  ],
  sorts: [
    {
      value: 'newest',
      label: 'Newest',
      selected: true,
    },
    {
      value: 'oldest',
      label: 'Oldest',
      selected: false,
    },
  ]
}
