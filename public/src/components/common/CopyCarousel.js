import React from "react";
import TextCarousel from 'react-text-carousel';

const phrases = ['Custom, on-brand web design + development', 'Optimization + engagement across devices', 'Professional editing + content enhancement', 'Thoughtful UIs + seamless UX', 'Application of modern technologies + design principles']
const interval = 2000;

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
