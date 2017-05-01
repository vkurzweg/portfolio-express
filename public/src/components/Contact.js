import React from "react";
import Nav from './common/Nav';
import NavMobile from './common/NavMobile';
import MediaQuery from 'react-responsive';


// app component
export default class Resume extends React.Component {

  // render
  render() {
    return (
      <div>
        <MediaQuery minWidth={768}>
          <div className="contact-image">
            <Nav />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <div className="contact-image-mobile">
            <NavMobile />
          </div>
        </MediaQuery>
      </div>
    );
  }
}
