import React from 'react'
import NavbarLanding from '../Components/navbarLanding'
import HeroLanding from '../Components/heroLanding'
import RecompensaLanding from '../Components/recompensaLanding';
import OpinionesLanding from '../Components/opinionsLanding';
import CarouselOpinion from '../Components/carouselOpinion';

import { Layout} from '@douyinfe/semi-ui';

const Landing = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
        <NavbarLanding />
      <Content>
        <HeroLanding />
        <RecompensaLanding />
        <OpinionesLanding />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default Landing