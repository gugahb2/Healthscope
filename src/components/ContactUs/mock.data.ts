import { IProps as IContactUs } from './ContactUs'

export const data: IContactUs = {
  id: 'formId',
  heading: 'Contact',
  formGroups: [
    {
      id: 'category',
      name: 'category',
      type: 'select',
      label: 'Category',
      required: true,
      width: 'w-full',
      defaultLabel: 'Select your category',
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
          params: ['Category is required'],
        },
      ],
    },
    {
      id: 'name',
      name: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'Add your name',
      required: true,
      width: 'w-full',
      defaultValue: '',
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Name field is required'],
        },
      ],
    },
    {
      id: 'email',
      name: 'email',
      type: 'text',
      label: 'Email',
      placeholder: 'Add your email',
      required: true,
      width: 'w-full',
      defaultValue: '',
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Email field is required'],
        },
      ],
    },
    {
      id: 'phone_day',
      name: 'phone_day',
      type: 'text',
      label: 'Day time phone number',
      placeholder: 'Add phone Number',
      required: true,
      width: 'w-1/2',
      defaultValue: '',
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Phone number field is required'],
        },
      ],
    },
    {
      id: 'phone_night',
      name: 'phone_night',
      type: 'text',
      label: 'Night time phone number',
      placeholder: 'Add phone Number',
      required: true,
      width: 'w-1/2',
      defaultValue: '',
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Phone number field is required'],
        },
      ],
    },
    {
      id: 'contact_method',
      name: 'contact_method',
      type: 'select',
      label: 'Preferred contact method',
      required: true,
      width: 'w-full',
      defaultLabel: 'Select your preferred contact method',
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
          params: ['Contact method is required'],
        },
      ],
    },
    {
      id: 'contact_time',
      name: 'contact_time',
      type: 'select',
      label: 'Preferred contact time',
      required: true,
      width: 'w-full',
      defaultLabel: 'Select your preferred contact time',
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
          params: ['Contact time is required'],
        },
      ],
    },
    {
      id: 'message',
      name: 'message',
      type: 'textarea',
      label: 'Message',
      placeholder: 'Add any other details',
      required: false,
      width: 'w-full',
      defaultValue: '',
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Message field is required'],
        },
      ],
    },
    {
      id: 'submit',
      name: 'submit',
      type: 'submit',
      label: 'Send',
      width: 'third',
    },
  ],
}
