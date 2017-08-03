import React from "react";
import Nav from './common/Nav';
import NavMobile from './common/NavMobile';
import MediaQuery from 'react-responsive';
import { Image } from 'cloudinary-react';


// app component
export default class Resume extends React.Component {

  // render
  render() {
    return (
      <div>
        <MediaQuery minWidth={768}>
          <div className="resume-image">
            <Nav />
          </div>
          <Image cloudName="kurzweg" publicId="kurzweg_resume" responsive style={{ display: 'block', margin: '0 auto', width: '80%'}} />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
            <NavMobile />
            <div className="resume-image-mobile"></div>
            <Image cloudName="kurzweg" publicId="kurzweg_resume" responsive style={{ display: 'block', margin: '0 auto', width: '90%'}} />
        </MediaQuery>
      </div>
    );
  }
}
