import React from "react";
import { Image } from 'cloudinary-react';


export class Bio extends React.Component {

  // render
  render() {

    return (
      <div id="bio" className="container" style={{ width: '100%', backgroundColor: '#212121', color: '#FAFAFA', textAlign: 'center', fontSize: '16px' }}>
        <div className="row" style={{ width: '80%', margin: '0 auto' }}>
          <div className="col-sm-6">
            <Image cloudName="kurzweg" publicId="profile" quality="auto" responsive alt="Victoria Kurzweg" style={{ maxHeight: '250px', paddingTop: '10%'}} />
          </div>
          <div className="col-sm-6" style={{ marginTop: '6%', marginLeft: '3%', width: '100%', paddingBottom: '5%' }}>
            <p style={{ fontSize: '14px', textAlign: 'left', marginRight: '10%', marginLeft: '10%', marginBottom: '2%' }}>Hello, I'm Victoria. I'm a web designer and developer based in West Hollywood.</p>
            <p style={{ fontSize: '14px', textAlign: 'left', marginRight: '10%', marginLeft: '10%', marginTop: '2%'}}>I love working on websites and applications at every stage of development, from ideation to iteration. I'm happy to create a website from scratch, or to revamp an existing site by applying new techniques and technologies.</p>
            <button style={{ textDecoration: 'none', backgroundColor: '#108EE9', color: '#212121', marginTop: '3%', width: '10em', height: '3em', margin: '0 auto', border: 'none', textTransform: 'uppercase', letterSpacing: '2px', borderRadius: '2px' }}>Let's talk</button>
          </div>
        </div>
      </div>
    );

  }
}

export default Bio;

