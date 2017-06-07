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
          <Intro2 />
          <div className="second-image">
          <Dev />
          </div>
          <Bio />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <div className="main-image-mobile">
            <NavMobile />
          </div>
          <CopyCarousel />
          <div style={{ padding: '1%' }}>
            <Grid />
          </div>
          <IntroMobile />
          <div className="second-image-mobile">
            <DevMobile />
          </div>
          <Bio />
        </MediaQuery>
      </div>
    );

  }
}

export default Home;
