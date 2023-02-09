export interface IComponentList {
  [key: string]: Function
}

export interface IComponent {
  name: string
  props: {
    [key: string]: any
  }
}

export interface IPageProps {
  status: number
  pageType?: {
    type: string
    image?: IImage
  }

  head: {
    title: string
    meta: {
      name: string
      content: string
    }[]
  }
  components?: IComponent[]
}

export interface ILink {
  href: string
  target?: string
  text?: string
  active?: boolean
}

export interface IImage {
  src: string
  alt: string
}

export interface IAddress {
  state: string
  street: string
  area: string
}
export interface ILoaction {
  lat: number
  lng: number
}

export interface IMapIcon {
  url: string
  width?: number
  height?: number
}

