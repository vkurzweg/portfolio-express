import React from "react";
import Nav from './common/Nav';
import NavMobile from './common/NavMobile';
import CopyCarousel from './common/CopyCarousel';
import Dev from './common/Dev';
import DevMobile from './common/DevMobile';
import Grid from './common/Grid';
import Intro from './common/Intro';
import IntroMobile from './common/IntroMobile';
import Bio from './common/Bio';
import MediaQuery from 'react-responsive';
import Intro2 from './common/Intro2';
import Intro2Mobile from './common/Intro2Mobile';
import Intro3Mobile from './common/Intro3Mobile';
import { Image } from 'cloudinary-react';



export class Home extends React.Component {

  // render
  render() {

    return (
      <div>
        <MediaQuery minWidth={768}>
          <div className="main-image">
            <Nav />
          </div>
          <CopyCarousel />
          <Grid />
          <Intro />
          <div className="second-image">
          <Dev />
          <Intro2 />
          </div>
          <Bio />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <Image cloudName="kurzweg" publicId="palmtrees" quality="auto" responsive style={{ width: '100%' }} />
          <div style={{ padding: '2%' }}>
            <CopyCarousel />
          </div>
          <Grid />
          <IntroMobile />
          <DevMobile />
          <Intro2Mobile />
          <Image cloudName="kurzweg" publicId="weho" quality="auto" responsive style={{ width: '100%' }} />
          <Intro3Mobile />
          <Bio />
        </MediaQuery>
      </div>
    );

  }
}

export default Home;
