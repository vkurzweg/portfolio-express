import React from "react";
import { Image } from 'cloudinary-react';
import styled from 'styled-components';

const Div = styled.div`
  height: 350px;
  width: 66%;
  margin: 0 auto;
  background-image: url('http://res.cloudinary.com/kurzweg/image/upload/v1510870097/palma2_logo.png');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`;

export class IntroMobile extends React.Component {

  // render
  render() {

    return (
      <div className="container" style={{ width: '100%', backgroundColor: 'black', color: 'white', padding: '1%', fontSize: '16px' }}>
        <h1 style={{ color: 'white', fontSize: '28px', letterSpacing: '4.5px', marginLeft: '2%', fontFamily: 'Oswald', paddingTop: '3%', margin: '0 auto', textAlign: 'center' }}><span style={{ color: '#3D8EE2' }}>responsive website</span> <br /></h1>
        <h1 style={{ color: '#C2C979', fontSize: '28px', letterSpacing: '4px', fontFamily: 'Oswald', paddingTop: '1%', margin: '0 auto', textAlign: 'center' }}>creation + iteration</h1>
        <div style={{ width: '90%', margin: '0 auto', fontFamily: 'Helvetica' }}>
          <h2 style={{ color: 'white', fontSize: '14px', padding: '1em', letterSpacing: '1px', width: '90%', margin: '0 auto', marginTop: '2%', lineHeight: '1.5em', textAlign: 'justify' }}>VK Digital is a branding, design, and development consultancy.</h2>
          <h2 style={{ color: 'white', fontSize: '14px', padding: '1em', letterSpacing: '1px', width: '90%', margin: '0 auto', lineHeight: '1.5em', marginTop: '-2%', textAlign: 'justify' }}>We specialize in making on-brand websites that look great on mobile + desktop.</h2>
        </div>
      </div>
    );

  }
}

export default IntroMobile;

// <img src="/media/profile.jpg" alt="Victoria Kurzweg" style={{ height: '200px', marginTop: '5%', marginLeft: '10%'}} />
