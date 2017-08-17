import React from "react";


export class Intro extends React.Component {

  // render
  render() {

    return (
      <div className="container" style={{ width: '100%', backgroundColor: '#212121', color: '#FAFAFA', padding: '5%', marginTop: '3%', fontSize: '16px' }}>
        <div className="row" style={{ width: '60%', margin: '0 auto' }}>
          <div className="col-xs-6">
            <ul style={{ display: 'block', width: '90%', margin: '0 auto', lineHeight: '200%', textTransform: 'uppercase', letterSpacing: '3px', textAlign: 'left', listStyleType: 'square' }}>
              <li>responsive web design</li>
              <li>creative development</li>
              <li>brand strategy</li>
            </ul>
          </div>
          <div className="col-xs-6">
            <ul style={{ display: 'block', width: '90%', margin: '0 auto',lineHeight: '200%', textTransform: 'uppercase', letterSpacing: '3px', textAlign: 'left', listStyleType: 'square' }}>
              <li>SEO</li>
              <li>copywriting</li>
              <li>UX</li>
            </ul>
          </div>
        </div>
      </div>
    );

  }
}

export default Intro;

// <img src="/media/profile.jpg" alt="Victoria Kurzweg" style={{ height: '200px', marginTop: '5%', marginLeft: '10%'}} />
