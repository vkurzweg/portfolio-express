import React from "react";


export class Intro extends React.Component {

  // render
  render() {

    return (
      <div style={{ backgroundColor: '#212121', color: '#FAFAFA', padding: '7%', marginTop: '-2%', textAlign: 'center', fontSize: '12px' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '3px' }}>Meet victoria</p>
      </div>
    );

  }
}

export default Intro;

// <img src="/media/profile.jpg" alt="Victoria Kurzweg" style={{ height: '200px', marginTop: '5%', marginLeft: '10%'}} />
