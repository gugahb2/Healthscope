import { IProps } from './SpecialistResultsHeader'

export const data: IProps = {
  heading: 'Showing results for ',
  term: 'Cardiologists',
  dropdown: {
    name: 'sort',
    label: '',
    items: [
      {
        value: '0',
        label: 'Sort by',
        selected: true
      },
      {
        value: 'VIC',
        label: 'VIC',
        selected: false
      },
      {
        value: 'VIC',
        label: 'VIC',
        selected: false
      },
    ],
  }
}
