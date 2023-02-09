import { data as footerData } from '../../components/Footer/mock.data'
import { data as headerData } from '../../components/Navigation/mock.data'
import { data as breadcrumbsData } from '../../components/Breadcrumbs/mock.data'
import { data as ctaHeadingData } from '../../components/CTAPageHeading/mock.data'
import { data as filterPanelData } from '../../components/FeatureFilterGroupPanel/mock.data'
import { data as profileCardsData } from '../../components/ProfileCardsContainer/mock.data'
import { data as mapsData } from '../../components/MapsPanel/mock.data'
import { data as imageTextPanelData } from '../../components/ImageTextPanel/mock.data'
import { data as sidePanelData } from '../../components/SidePanel/mock.data'
import { IPageProps } from '../../interfaces/base'

export const specialListPageTwoData: IPageProps = {
  status: 200,
  pageType: {
    type: 'type2',
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
      props: breadcrumbsData,
    },
    {
      name: 'ctapageheading',
      props: {
        ...ctaHeadingData,
        introText: '',
        heading: 'Melbourne Private Hospital Cardiologists',
        type: 'type1',
      },
    },
    {
      name: 'featurefiltergrouppanel',
      props: filterPanelData,
    },
    {
      name: 'profilecardscontainer',
      props: profileCardsData,
    },
    {
      name: 'mapspanel',
      props: mapsData,
    },
    {
      name: 'imagetextpanel',
      props: imageTextPanelData,
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
