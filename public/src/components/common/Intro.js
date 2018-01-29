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

export class Intro extends React.Component {

  // render
  render() {

    return (
      <div className="container" style={{ width: '100%', backgroundColor: 'black', padding: '1%', fontSize: '16px' }}>
        <div className="row">
          <div className = "col-sm-6">
            <h1 style={{ fontSize: '48px', letterSpacing: '4px', fontFamily: 'Oswald', textAlign: 'right', marginTop: '5%', marginBottom: '2%' }}><span style={{ color: '#3D8EE2' }}>Websites + Landing Pages</span></h1>
            <h2 style={{ color: '#C2C979', fontSize: '48px', letterSpacing: '4px', fontFamily: 'Oswald', textAlign: 'right', marginTop: '3%' }}>Mobile + Desktop</h2>
          </div>
          <div className = "col-sm-6">
            <h3 style={{ color: 'white', fontFamily: 'Oswald', fontSize: '26px', letterSpacing: '3px', width: '90%', margin: '0 auto', marginTop: '3%', marginBottom: '5%', lineHeight: '2em' }}>+ Engaging UIs<br/> + On-brand design<br />+ Copy that converts</h3>
          </div>
        </div>
      </div>
    );

  }
}

export default Intro;

// <img src="/media/profile.jpg" alt="Victoria Kurzweg" style={{ height: '200px', marginTop: '5%', marginLeft: '10%'}} />

// <div className="row" style={{ width: '70%', margin: '0 auto', paddingLeft: '10%' }}>
//   <div className="col-xs-6">
//     <ul style={{ lineHeight: '200%', textTransform: 'uppercase', letterSpacing: '3px', textAlign: 'left', listStyleType: 'square' }}>
//       <li>responsive web design</li>
//       <li>creative development</li>
//       <li>brand strategy</li>
//     </ul>
//   </div>
//   <div className="col-xs-6">
//     <ul style={{ lineHeight: '200%', textTransform: 'uppercase', letterSpacing: '3px', textAlign: 'left', listStyleType: 'square' }}>
//       <li>SEO</li>
//       <li>copywriting</li>
//       <li>UX</li>
//     </ul>
//   </div>
// </div>

// <Image style={{ maxHeight: '325px', display: 'block', margin: '0 auto'}} cloudName="kurzweg" publicId="palma2_logo" quality="auto" responsive />

// <Image style={{ marginRight: '1%' }} cloudName="kurzweg" publicId="logo_white_flip" width="35" quality="auto" responsive />
