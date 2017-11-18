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
      <div className="container" style={{ width: '100%', backgroundColor: 'black', color: 'white', padding: '1%', fontSize: '16px' }}>
        <h1 style={{ color: 'white', fontSize: '50px', letterSpacing: '4px', fontFamily: 'Oswald', paddingTop: '3%', width: '60%', margin: '0 auto' }}><span style={{ color: '#3D8EE2' }}>responsive website</span> <br /></h1>
        <h1 style={{ color: '#C2C979', fontSize: '50px', letterSpacing: '4px', fontFamily: 'Oswald', paddingTop: '1%', width: '60%', margin: '0 auto', textAlign: 'center' }}>creation + iteration</h1>
        <h2 style={{ color: 'white', fontFamily: 'Share', fontSize: '26px', padding: '1em', letterSpacing: '1px', width: '60%', margin: '0 auto', marginTop: '2%', lineHeight: '1.5em' }}>VK Digital is a branding, design, and development consultancy.</h2>
        <h2 style={{ color: 'white', fontFamily: 'Share', fontSize: '26px', padding: '1em', letterSpacing: '1px', width: '60%', margin: '0 auto', lineHeight: '1em', marginTop: '-2%' }}>We specialize in making on-brand websites that look great on mobile + desktop.</h2>
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
