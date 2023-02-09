import dynamic from 'next/dynamic'

import { IComponentList } from '../interfaces/base'

export const componentList: IComponentList = {
  breadcrumbs: dynamic(() => import(`../components/Breadcrumbs/Breadcrumbs`)),
  contactmaplist: dynamic(
    () => import(`../components/ContactMapList/ContactMapList`)
  ),
  ctapageheading: dynamic(
    () => import(`../components/CTAPageHeading/CTAPageHeading`)
  ),
  featureimagetextpanel: dynamic(
    () => import(`../components/FeatureImageTextPanel/FeatureImageTextPanel`)
  ),
  featuretextsection: dynamic(
    () => import(`../components/FeatureTextSection/FeatureTextSection`)
  ),
  featurefiltergrouppanel: dynamic(
    () =>
      import(`../components/FeatureFilterGroupPanel/FeatureFilterGroupPanel`)
  ),
  filtergrouppanel: dynamic(
    () => import(`../components/FilterGroupPanel/FilterGroupPanel`)
  ),
  footer: dynamic(() => import(`../components/Footer/Footer`)),
  header: dynamic(() => import(`../components/Navigation/Header`)),
  imagecardtile: dynamic(
    () => import(`../components/ImageCardTile/ImageCardTile`)
  ),
  imagetextpanel: dynamic(
    () => import(`../components/ImageTextPanel/ImageTextPanel`)
  ),
  mapspanel: dynamic(() => import(`../components/MapsPanel/MapsPanel`)),
  newscardpanel: dynamic(
    () => import(`../components/NewsCardPanel/NewsCardPanel`)
  ),
  ourspecialties: dynamic(
    () => import(`../components/OurSpecialties/OurSpecialties`)
  ),
  profilecard: dynamic(() => import(`../components/ProfileCard/ProfileCard`)),
  profilecardscontainer: dynamic(
    () => import(`../components/ProfileCardsContainer/ProfileCardsContainer`)
  ),
  profiledetailscard: dynamic(
    () => import(`../components/ProfileDetailsPanel/ProfileDetailsCard`)
  ),
  profiledetailspanel: dynamic(
    () => import(`../components/ProfileDetailsPanel/ProfileDetailsPanel`)
  ),
  specialistssearch: dynamic(
    () => import(`../components/SpecialistsSearch/SpecialistsSearch`)
  ),
  threecolumntextpanel: dynamic(
    () => import(`../components/ThreeColumnTextPanel/ThreeColumnTextPanel`)
  ),
  contactus: dynamic(
    () => import(`../components/ContactUs/ContactUs`)
  ),
  wysiwyg: dynamic(() => import(`../components/Wysiwyg/Wysiwyg`)),
  sidepanel: dynamic(() => import(`../components/SidePanel/SidePanel`)),
  speciallistresultsheader: dynamic(
    () =>
      import(`../components/SpecialistResultsHeader/SpecialistResultsHeader`)
  ),
}
