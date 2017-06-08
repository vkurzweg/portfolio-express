import React from "react";
import Steps from 'antd/lib/steps';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import Timeline from 'antd/lib/timeline';
import { Image } from 'cloudinary-react';


const Step = Steps.Step;

const steps = [{
  title: 'Design',
  content:
    <div>
      <p style={{ fontSize: '14px' }}><b>Wireframes, Prototypes & Responsive User Interfaces</b></p>
      <div className="container" style={{ lineHeight: '200%', textAlign: 'center', display: 'block', margin: '0 auto', marginTop: '2%'}}>
        <div className="row">
          <div style={{ padding: '1%' }}>
            <img src="/media/responsive_blue.png" style={{ marginBottom: '1%'}} />
            <ul>
              <li>Professional design research and competitive analysis</li>
              <li>Mobile-first wireframing and prototyping</li>
              <li>Responsive framework and library integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
}, {
  title: 'Code',
  content:
    <div className="container">
      <div className="row" style={{ }}>
        <div>
          <p style={{ textAlign: 'center', marginTop: '1%', marginBottom: '2%'}}><b>Responsive websites and applications</b> built with:</p>
          <Image cloudName="kurzweg" publicId="logos" quality="auto" responsive style={{ display: 'block', width: '90%', margin: '0 auto' }} />
        </div>
      </div>
    </div>
}, {
  title: 'Content',
  content:
    <div>
      <div style={{ marginTop: '5%', margin: '0 auto', textAlign: 'left'}}>
        <h4 style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '5%' }}>Content creation and marketing since 2008</h4>
        <div>
          <ul style={{ width: '80%', display: 'block', margin: '0 auto', listStyleType: 'circle', textAlign: 'left', marginTop: '2%', lineHeight: '200%' }}>
            <li>Clear, consistent, concise copy based on research and brand guidelines</li>
            <li>Wide range of writing experience (public affairs, PR, journalism, commercial) in digital and print media</li>
            <li>SEO copywriting</li>
          </ul>
        </div>
      </div>
    </div>
}]

export class Dev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    }
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  // render
  render() {
    const { current } = this.state;
    return (
      <div style={{ display: 'block', margin: '0 auto', backgroundColor: '#FFFFFF' }}>
        <Steps current={current} style={{ paddingTop: '10%', paddingBottom: '4%', width: '90%', margin: '0 auto', backgroundColor: '#FFFFFF' }}>
          <Step style={{ margin: '0 auto' }} title="Design" icon={<Icon type="desktop" />} />
          <Step style={{ margin: '0 auto' }} title="Code" icon={<Icon type="code-o" />} />
          <Step style={{ margin: '0 auto' }} title="Content" icon={<Icon type="edit" />} />
        </Steps>
        <div style={{ height: '210px' }} className="steps-content">{steps[this.state.current].content}</div>
          <div className="steps-action">
            {
              this.state.current < steps.length
              &&
              <Button style={{ display: 'inline-block', margin: '0 auto' }} onClick={() => this.prev()}>
                <Icon type="arrow-left" />
              </Button>
            }
            {
              this.state.current < steps.length
              &&
              <Button style={{ display: 'inline-block', margin: '0 auto', marginLeft: '5%'}} type="primary" onClick={() => this.next()}><Icon type="arrow-right" /></Button>
            }
          </div>
      </div>
    );

  }
}

export default Dev;

// <div style={{ display: 'inline-flex', marginTop: '3%', fontSize: '14px' }}>
//   <ul style={{ listStyleType: 'circle', textAlign: 'left', lineHeight: '200%' }}>
//     <li>HTML5, CSS3, Javascript ES6</li>
//     <li>React + Redux and Angular</li>
//     <li>Node.js</li>
//     <li>MongoDB</li>
//   </ul>
//   <ul style={{ listStyleType: 'circle', textAlign: 'left', paddingLeft: '10%', lineHeight: '200%' }}>
//     <li>Stripe.js payment integration</li>
//     <li>Facebook and Google oAuth</li>
//     <li>Google Maps Geocoding</li>
//   </ul>
// </div>
