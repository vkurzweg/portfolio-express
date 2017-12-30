import React from "react";
import { Image } from 'cloudinary-react';
import Modal from 'antd/lib/modal';
import styled from 'styled-components';

const A = styled.a`
  color: #C2C979;
  &:hover {
    cursor: pointer;
  }
`;

export class Bio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    }
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal(){
    this.setState({
      visible: true
    })
  }

  closeModal(){
    this.setState({
      visible: false
    })
  }


  // render
  render() {
    let display = 'block';
    (this.props.isFormActive) ? display = 'block' : display = 'none';
    return (
      <div id="bio" className="container" style={{ width: '100%', backgroundColor: 'black', color: '#FAFAFA', textAlign: 'center', fontSize: '16px', marginTop: '-2%' }}>
        <div className="row" style={{ width: '100%', margin: '0 auto', display: 'inline-flex' }}>
          <div className="col-sm-6" style={{ display: 'block', margin: '0 auto' }}>
            <Image cloudName="kurzweg" publicId="headshot_edit3" quality="auto" responsive alt="Victoria Kurzweg" style={{ maxHeight: '450px', maxWidth: '100%', paddingTop: '5%', paddingBottom: '5%', display: 'block', margin: '0 auto'}} />
          </div>
          <div className="col-sm-6" style={{ marginTop: '5%', marginLeft: '3%', paddingBottom: '3%' }}>
            <p style={{ fontSize: '14px', textAlign: 'justify', marginRight: '10%', marginLeft: '10%', marginBottom: '3%' }}>Victoria Kurzweg is a designer and developer specializing in branding and content enhancement. She has worked with global brands in luxury fashion and hospitality, as well as startups in Silicon Beach. Victoria works primarily with Sketch and InVision for wireframing and prototyping, and React.js and Node.js for building responsive websites and applications.</p>
            <p style={{ fontSize: '14px', textAlign: 'justify', marginRight: '10%', marginLeft: '10%', marginBottom: '3%' }}>With a <A href="/resume" target="blank">background</A> in writing, Victoria approaches her work with an editorial eye and an appreciation for good storytelling. She was born in New Orleans and graduated with a master's degree in history of international relations from the London School of Economics. Her interests include food and drink, fashion, travel and contemporary art.</p>
            <button onClick={this.showModal} style={{ textDecoration: 'none', backgroundColor: '#108EE9', color: '#212121', width: '50%', height: '3em', margin: '0 auto', border: 'none', textTransform: 'uppercase', letterSpacing: '1px', borderRadius: '2px', fontSize: '18px', fontWeight: 'bold' }}>Let's talk</button>
          </div>
        </div>
        <Modal title="Contact VK" visible={this.state.visible} footer={null} onCancel={this.closeModal} style={{ top: 50 }}>
          <div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfkddKTk4ox0pE_EasJZ5Url4g2HUngCt4IqLs5iYbwu8cTdA/viewform?embedded=true" width="100%" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
          </div>
        </Modal>
      </div>
    );

  }
}

export default Bio;

