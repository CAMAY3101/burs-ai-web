import React from 'react'
import NavbarLanding from '../Components/navbarLanding'
import HeroLanding from '../Components/heroLanding'
import RecompensaLanding from '../Components/recompensaLanding';

import { Layout} from '@douyinfe/semi-ui';

const Landing = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
        <NavbarLanding />
      <Content>
        <HeroLanding />
        <RecompensaLanding />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default Landing