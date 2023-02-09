import { data as footerData } from '../../components/Footer/mock.data'
import { data as headerData } from '../../components/Navigation/mock.data'
import { data as breadcrumbsData } from '../../components/Breadcrumbs/mock.data'
import { data as profileDetailData } from '../../components/ProfileDetailsPanel/mock.data'
import { data as textSectionData } from '../../components/FeatureTextSection/mock.data'
import { data as contactData } from '../../components/ContactMapList/mock.data'
import { data as sidePanelData } from '../../components/SidePanel/mock.data'
import { IPageProps } from '../../interfaces/base'

export const speciallistProfileOneData: IPageProps = {
  status: 200,
  pageType: {
    type: 'type3',
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
      name: 'profiledetailspanel',
      props: profileDetailData
    },
    {
      name: 'featuretextsection',
      props: textSectionData,
    },
    {
      name: 'contactmaplist',
      props: {
        ...contactData,
        items: contactData.items.slice(0, 1)
      }
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
