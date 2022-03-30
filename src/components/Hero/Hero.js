import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          J'aime le sex dans les 5reb
        </SectionText>
        <Button onClick={() => window.location = 'https://mohamed.chedliiy@gmail.com'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;