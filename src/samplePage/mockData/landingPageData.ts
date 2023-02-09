import { data as imageTextPanelData } from '../../components/ImageTextPanel/mock.data'
import { specialtiesData } from '../../components/OurSpecialties/mock.data'
import { data as footerData } from '../../components/Footer/mock.data'
import { data as headerData } from '../../components/Navigation/mock.data'
import { data as newsPanelData } from '../../components/NewsCardPanel/mock.data'
import { data as filterPanelData } from '../../components/FilterGroupPanel/mock.data'
import { data as profileCardsData } from '../../components/ProfileCardsContainer/mock.data'
import { data as ctaHeadingData } from '../../components/CTAPageHeading/mock.data'
import { data as mapsData} from '../../components/MapsPanel/mock.data'
import { data as sidePanelData } from '../../components/SidePanel/mock.data'
import { IPageProps } from '../../interfaces/base'

export const landingPageData: IPageProps = {
  status: 200,
  pageType: {
    type: 'type1',
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
      name: 'ctapageheading',
      props: {
        ...ctaHeadingData,
        heading: 'Melbourne Private Hospital',
        type: 'type2',
      },
    },
    {
      name: 'ourspecialties',
      props: specialtiesData,
    },
    {
      name: 'filtergrouppanel',
      props: filterPanelData,
    },
    {
      name: 'profilecardscontainer',
      props: profileCardsData
    },
    {
      name: 'newscardpanel',
      props: newsPanelData,
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
