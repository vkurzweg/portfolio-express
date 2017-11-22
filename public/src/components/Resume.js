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
      <div style={{ backgroundColor: 'black' }}>
        <MediaQuery minWidth={768}>
          <div className="resume-image">
            <Nav />
          </div>
          <Image cloudName="kurzweg" publicId="ResumeNov2" responsive style={{ display: 'block', margin: '0 auto', width: '80%', paddingTop: '3%', paddingBottom: '3%'}} />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
            <NavMobile />
            <Image cloudName="kurzweg" publicId="palms" quality="auto" responsive style={{ width: '100%', marginTop: '10%' }} />
            <Image cloudName="kurzweg" publicId="ResumeNov2" responsive style={{ display: 'block', margin: '0 auto', width: '90%', paddingTop: '3%', paddingBottom: '10%'}} />
        </MediaQuery>
      </div>
    );
  }
}
