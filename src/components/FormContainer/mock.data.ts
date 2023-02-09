export const successfulFormContainerData = {
  formGroups: [
    {
      id: 'term',
      name: 'term',
      type: 'search',
      label: '',
      placeholder: 'Search by Specialists\' name',
      required: true,
      defaultValue: '',
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Search field is required'],
        },
      ],
    },
    {
      id: 'state',
      name: 'state',
      type: 'select',
      label: 'State',
      required: true,
      width: 'w-full',
      defaultLabel: 'Select your State',
      options: [
        {
          label: 'Melbourne',
          value: 'melbourne',
        },
        {
          label: 'Sydney',
          value: 'Sydney',
        },
        {
          label: 'Canberra',
          value: 'canberra',
        },
      ],
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['State is required'],
        },
      ],
    },
    {
      id: 'specialty',
      name: 'specialty',
      type: 'select',
      label: 'Specialty',
      required: true,
      width: 'w-full',
      defaultLabel: 'Select your specialist',
      options: [
        {
          label: 'Melbourne',
          value: 'melbourne',
        },
        {
          label: 'Sydney',
          value: 'Sydney',
        },
        {
          label: 'Canberra',
          value: 'canberra',
        },
      ],
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Specialty is required'],
        },
      ],
    },
    {
      id: 'hospital',
      name: 'hospital',
      type: 'select',
      label: 'Hospital',
      required: true,
      width: 'w-full',
      defaultLabel: 'Select your hospital',
      options: [
        {
          label: 'Melbourne',
          value: 'melbourne',
        },
        {
          label: 'Sydney',
          value: 'Sydney',
        },
        {
          label: 'Canberra',
          value: 'canberra',
        },
      ],
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Hospital is required'],
        },
      ],
    },
    {
      id: 'submit',
      name: 'submit',
      type: 'submit',
      label: 'Find Specialist',
      width: 'third',
    },
  ],
  formId: '12345678'
}
