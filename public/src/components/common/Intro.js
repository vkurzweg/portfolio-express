import React from "react";


export class Intro extends React.Component {

  // render
  render() {

    return (
      <div className="container" style={{ width: '100%', backgroundColor: 'black', color: 'white', padding: '3%', fontSize: '16px' }}>
        <h1 style={{ textAlign: 'center', color: 'white', fontSize: '36px', letterSpacing: '4px', fontFamily: 'Roboto' }}><span style={{ color: '#3D8EE2' }}>inspired website</span> creation + iteration</h1>
        <h2 style={{ color: 'white', fontFamily: 'Roboto', fontSize: '26px', padding: '2em', letterSpacing: '3px', paddingTop: '2em' }}>Some very inspiring intro copy.</h2>
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
