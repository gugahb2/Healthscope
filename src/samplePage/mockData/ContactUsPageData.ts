import { data as footerData } from '../../components/Footer/mock.data'
import { data as headerData } from '../../components/Navigation/mock.data'
import { data as breadcrumbsData } from '../../components/Breadcrumbs/mock.data'
import { data as contactUsData } from '../../components/ContactUs/mock.data'
import { data as sidePanelData } from '../../components/SidePanel/mock.data'
import { IPageProps } from '../../interfaces/base'

export const contactUsPageData: IPageProps = {
  status: 200,
  pageType: {
    type: 'type4',
    image: {
      src: 'images/headerPanelImage.png',
      alt: 'header panel image',
    },
  },
  head: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content: 'About Us',
      },
    ],
  },
  components: [
    {
      name: 'header',
      props: headerData,
    },
    {
      name: 'breadcrumbs',
      props: breadcrumbsData
    },
    {
      name: 'contactus',
      props: contactUsData
    },
    {
      name: 'footer',
      props: footerData,
    },
    {
      name: 'sidepanel',
      props: sidePanelData,
    },
  ],
}
