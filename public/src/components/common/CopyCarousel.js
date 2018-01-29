import React from "react";
import TextCarousel from 'react-text-carousel';

const phrases = [ 'Responsive websites + landing pages with', 'On-brand design', 'Intuitive interfaces', 'Concise copy', 'Strategic SEO' ]

// ['Responsive web design + Creative development + UX + Content enhancement + SEO + Brand management']
// ['Custom web design + development', 'On-brand content enhancement', 'Optimization + engagement across devices' ]
const interval = 3500;

export class CopyCarousel extends React.Component {

  // render
  render() {

    return (
      <div style={{ display: 'block', width: '100%', margin: '0 auto', fontFamily: 'Helvetica', textAlign: 'center', fontSize: '36px', color: '#FAFAFA', backgroundColor: 'black', letterSpacing: '1px' }}>
        <div style={{ display: 'inline-flex', padding: '5%' }}>
          <span style={{  }}>
            <TextCarousel phrases={phrases} interval={interval} />
          </span>
        </div>
      </div>
    );

  }
}

export default CopyCarousel;

// const phrases = ['Custom, on-brand website design and development.', 'Effective optimization and engagement across devices.', 'Professional editing and content enhancement.', 'Thoughtful UIs.', 'Seamless UX.', 'Inspired application of modern technologies and design principles.']
