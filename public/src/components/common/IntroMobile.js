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
      <div className="row">
        <h1 style={{ fontSize: '26px', letterSpacing: '4px', fontFamily: 'Oswald', margin: '0 auto', textAlign: 'center', marginTop: '4%' }}><span style={{ color: '#3D8EE2' }}>Websites + Landing Pages</span> <br /></h1>
        <h2 style={{ color: '#C2C979', fontSize: '26px', letterSpacing: '4px', fontFamily: 'Oswald',margin: '0 auto', textAlign: 'center', marginTop: '3%' }}>Mobile + Desktop</h2>
        <div style={{ width: '50%', margin: '0 auto' }}>
          <h3 style={{ color: 'white', fontFamily: 'Oswald', fontSize: '16px', letterSpacing: '3px', width: '90%', margin: '0 auto', marginTop: '3%', marginBottom: '5%', lineHeight: '2em', textAlign: 'center' }}>Engaging UIs<br/> On-brand design<br />Copy that converts</h3>
        </div>
      </div>
      </div>
    );

  }
}

export default IntroMobile;

// <img src="/media/profile.jpg" alt="Victoria Kurzweg" style={{ height: '200px', marginTop: '5%', marginLeft: '10%'}} />
