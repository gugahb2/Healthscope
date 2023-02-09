import { data as imageTextPanelData } from '../../components/ImageTextPanel/mock.data'
import { specialtiesData } from '../../components/OurSpecialties/mock.data'
import { data as footerData } from '../../components/Footer/mock.data'
import { data as headerData } from '../../components/Navigation/mock.data'
import { data as specialistsSearchData } from '../../components/SpecialistsSearch/mock.data'
import { data as threeColumnTextPanelData } from '../../components/ThreeColumnTextPanel/mock.data'
import { data as featureImageTextPanelData } from '../../components/FeatureImageTextPanel/mock.data'
import { data as sidePanelData } from '../../components/SidePanel/mock.data'
import { IPageProps } from '../../interfaces/base'

export const homePageData: IPageProps = {
  status: 200,
  pageType: {
    type: 'type0',
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
      name: 'specialistssearch',
      props: specialistsSearchData,
    },
    {
      name: 'ourspecialties',
      props: specialtiesData,
    },
    {
      name: 'threecolumntextpanel',
      props: threeColumnTextPanelData,
    },
    {
      name: 'featureimagetextpanel',
      props: featureImageTextPanelData,
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
