import React from "react";
import { Image } from 'cloudinary-react';


export class Bio extends React.Component {

  // render
  render() {

    return (
      <div id="bio" className="container" style={{ width: '100%', backgroundColor: '#212121', color: '#FAFAFA', textAlign: 'center', fontSize: '16px' }}>
        <div className="row">
          <div className="col-sm-6">
            <Image cloudName="kurzweg" publicId="profile" quality="auto" responsive alt="Victoria Kurzweg" style={{ height: '250px', paddingTop: '2%', marginBottom: '2%', marginLeft: '5%'}} />
          </div>
          <div className="col-sm-6" style={{ marginTop: '6%', marginLeft: '3%', width: '100%', paddingBottom: '5%' }}>
            <p style={{ fontSize: '14px', textAlign: 'left', marginRight: '10%', marginLeft: '10%', marginBottom: '2%' }}>Before pivoting to tech, I worked in sales, international search marketing, journalism and public affairs.</p>
            <p style={{ fontSize: '14px', textAlign: 'left', marginRight: '10%', marginLeft: '10%', marginTop: '2%'}}>I love working on websites and applications at every stage of development, from ideation to iteration. I'm happy to create a website from scratch, or to revamp an existing site by applying new techniques and technologies. <a style={{ textDecoration: 'none', color: '#108EE9', backgroundColor: '#212121', marginTop: '2%', width: '30%', height: '3em', fontWeight: 'bold' }}>Let's talk!</a></p>
          </div>
        </div>
      </div>
    );

  }
}

export default Bio;

