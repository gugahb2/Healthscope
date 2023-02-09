import dynamic from 'next/dynamic'

export const PageHeadingPanel = {
  type0: dynamic(
    () => import('../../components/PageHeadingPanelOne/PageHeadingPanelOne')
  ),
  type1: dynamic(
    () => import('../../components/PageHeadingPanelOne/PageHeadingPanelOne')
  ),
  type2: dynamic(
    () => import('../../components/PageHeadingPanelTwo/PageHeadingPanelTwo')
  ),
  type3: dynamic(
    () => import('../../components/PageHeadingPanelThree/PageHeadingPanelThree')
  ),
  type4: dynamic(
    () => import('../../components/PageHeadingPanelFour/PageHeadingPanelFour')
  ),
}
