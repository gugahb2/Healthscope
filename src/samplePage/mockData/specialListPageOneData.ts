import { data as footerData } from '../../components/Footer/mock.data'
import { data as headerData } from '../../components/Navigation/mock.data'
import { data as specialistsSearchData } from '../../components/SpecialistsSearch/mock.data'
import { data as specialFilterData } from '../../components/SpecialistResultsHeader/mock.data'
import { data as featureImageTextPanelData } from '../../components/FeatureImageTextPanel/mock.data'
import { data as profileCardsData } from '../../components/ProfileCardsContainer/mock.data'
import { data as sidePanelData } from '../../components/SidePanel/mock.data'
import { IPageProps } from '../../interfaces/base'

export const specialListPageOneData: IPageProps = {
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
      name: 'specialistssearch',
      props: {...specialistsSearchData, isCenterAligned: true},
    },
    {
      name: 'speciallistresultsheader',
      props: specialFilterData
    },
    {
      name: 'profilecardscontainer',
      props: profileCardsData
    },
    {
      name: 'featureimagetextpanel',
      props: featureImageTextPanelData,
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
