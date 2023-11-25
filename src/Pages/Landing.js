import React from 'react'
import NavbarLanding from '../Components/navbarLanding'
import HeroLanding from '../Components/Landing/heroLanding'
import RecompensaLanding from '../Components/Landing/recompensaLanding';
import OpinionesLanding from '../Components/Landing/opinionsLanding';
import SecurityLanding from '../Components/Landing/securityLanding';
import FaqsLanding from '../Components/Landing/faqsLanding';

import { Layout} from '@douyinfe/semi-ui';

const Landing = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Content>
        <HeroLanding />
        <RecompensaLanding />
        <OpinionesLanding />
        <SecurityLanding/>
        <FaqsLanding/>
      </Content>
    </Layout>
  )
}

export default Landing