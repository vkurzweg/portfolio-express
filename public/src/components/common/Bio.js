import React from "react";
import { Image } from 'cloudinary-react';


export class Bio extends React.Component {

  // render
  render() {
    let display = 'block';
    (this.props.isFormActive) ? display = 'block' : display = 'none';
    return (
      <div id="bio" className="container" style={{ width: '100%', backgroundColor: '#212121', color: '#FAFAFA', textAlign: 'center', fontSize: '16px', marginTop: '-2%' }}>
        <div className="row" style={{ width: '80%', margin: '0 auto' }}>
          <div className="col-sm-6">
            <Image cloudName="kurzweg" publicId="profile" quality="auto" responsive alt="Victoria Kurzweg" style={{ maxHeight: '250px', paddingTop: '5%'}} />
          </div>
          <div className="col-sm-6" style={{ marginTop: '3%', marginLeft: '3%', width: '100%', paddingBottom: '5%' }}>
            <p style={{ fontSize: '14px', textAlign: 'justify', marginRight: '10%', marginLeft: '10%', marginBottom: '3%' }}>Victoria Kurzweg is a designer and developer specializing in branding and content enhancement. She has worked with global brands including Marc Jacobs International and Waldorf Astoria, as well as startups in Silicon Beach. Victoria works primarily with Sketch and InVision for wireframing and prototyping, and React.js and Node.js for building responsive websites and applications.</p>
            <p style={{ fontSize: '14px', textAlign: 'justify', marginRight: '10%', marginLeft: '10%', marginTop: '2%', marginBottom: '5%'}}>Born in New Orleans, Victoria has lived in Los Angeles, Austin, and Washington, D.C. She has a master's degree in history of international relations from the London School of Economics.</p>
            <button onClick={this.props.toggleForm} style={{ textDecoration: 'none', backgroundColor: '#108EE9', color: '#212121', width: '10em', height: '3em', margin: '0 auto', border: 'none', textTransform: 'uppercase', letterSpacing: '2px', borderRadius: '2px' }}>Let's talk</button>
          </div>
        </div>
        <div style={{ display }}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfkddKTk4ox0pE_EasJZ5Url4g2HUngCt4IqLs5iYbwu8cTdA/viewform?embedded=true" width="100%" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
        </div>
      </div>
    );

  }
}

export default Bio;

