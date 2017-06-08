import React from "react";
import TextCarousel from 'react-text-carousel';

const phrases = ['Custom web design + development', 'On-brand content enhancement', 'Optimization + engagement across devices' ]
const interval = 2500;

export class CopyCarousel extends React.Component {

  // render
  render() {

    return (
      <div style={{ display: 'block', width: '100%', margin: '0 auto', fontFamily: 'Share', textAlign: 'center', fontSize: '18px', marginTop: '3%' }}>
        <div style={{ display: 'inline-flex' }}>
          <span style={{ fontWeight: 'bold' }}>
            <TextCarousel phrases={phrases} interval={interval} />
          </span>
        </div>
      </div>
    );

  }
}

export default CopyCarousel;

// const phrases = ['Custom, on-brand website design and development.', 'Effective optimization and engagement across devices.', 'Professional editing and content enhancement.', 'Thoughtful UIs.', 'Seamless UX.', 'Inspired application of modern technologies and design principles.']
