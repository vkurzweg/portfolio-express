import React from "react";
import {GridList, GridTile} from 'material-ui/GridList';
import Modal from 'antd/lib/modal';
import Carousel from 'antd/lib/carousel';
import { Image } from 'cloudinary-react';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '3%',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
};

const tilesData = [
  {
    img: 'screenshot_emkr',
  }, {
    img: 'screenshot_bookmarc',
  }, {
    img: 'screenshot_other',
  }, {
    img: 'screenshot_calendonian',
  }, {
    img: 'screenshot_tripific',
  }, {
    img: 'screenshot_slot',
  }
]

export class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible0: false,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
    }
    this.showModal = this.showModal.bind(this);
    this.closeModal0 = this.closeModal0.bind(this);
    this.closeModal1 = this.closeModal1.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
    this.closeModal3 = this.closeModal3.bind(this);
    this.closeModal4 = this.closeModal4.bind(this);
    this.closeModal4 = this.closeModal4.bind(this);
    this.closeModal5 = this.closeModal5.bind(this);
  }

  showModal(idx){
    console.log(idx)
    if (idx === 0){
      this.setState({
        visible0: true,
      })}
    if (idx === 1){
      this.setState({
        visible1: true,
      })}
    if (idx === 2){
      this.setState({
        visible2: true,
      })}
    if (idx === 3){
      this.setState({
        visible3: true,
      })}
    if (idx === 4){
      this.setState({
        visible4: true,
      })}
    if (idx === 5){
      this.setState({
        visible5: true,
      })}
  }

  closeModal0() {
    this.setState({
      visible0: false,
    })
  }

  closeModal1() {
    this.setState({
      visible1: false,
    })
  }

  closeModal2() {
    this.setState({
      visible2: false,
    })
  }

  closeModal3() {
    this.setState({
      visible3: false,
    })
  }

  closeModal4() {
    this.setState({
      visible4: false,
    })
  }

  closeModal5() {
    this.setState({
      visible5: false,
    })
  }

  // render
  render() {

    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {tilesData.map((tile, idx) => (
            <GridTile
              key={tile.img}
              onClick={this.showModal.bind(this, idx)}
            >
              <Image cloudName="kurzweg" publicId={tile.img} width="400" quality="auto" responsive />
            </GridTile>
          ))}
        </GridList>
        <Modal title="Eventmakr" visible={this.state.visible0} footer={null} onCancel={this.closeModal0} style={{ top: 50 }}>
          <Carousel vertical="true">
            <div><Image cloudName="kurzweg" publicId="screenshot_emkr" width="400" quality="auto" responsive style={{ display: 'block', margin: '0 auto', height: '200px'}} /></div>
            <div><Image cloudName="kurzweg" publicId="screenshot_emkr2" quality="auto" responsive style={{ display: 'block', margin: '0 auto', height: '200px'}} /></div>
            <div><Image cloudName="kurzweg" publicId="screenshot_emkr3" width="400" quality="auto" responsive style={{ display: 'block', margin: '0 auto', height: '200px'}} /></div>
            <div><Image cloudName="kurzweg" publicId="screenshot_emkr4" width="400" quality="auto" responsive style={{ display: 'block', margin: '0 auto', height: '200px'}} /></div>
          </Carousel>
          <p style={{ textAlign: 'center', marginTop: '3%' }}><em>Bringing an early-stage startup from idea to <a href="http://app.eventmakr.com/" target="blank" style={{ textDecoration: 'none', color: '#108EE9', fontWeight: 'bold' }}>product</a></em></p>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '2%', marginBottom: '2%' }}>Development + UI Design</p>
          <ul style={{ width: '90%', display: 'block', margin: '0 auto', listStyleType: 'circle', textAlign: 'left', marginTop: '2%', lineHeight: '200%' }}>
            <li><b>Designed and built landing pages and MVP app</b> for Eventmakr, an early-stage startup in Santa Monica </li>
            <li><b>Led wireframing, prototyping, and UI design</b> during minimum viable product development</li>
            <li>Co-developed a <b>responsive React + Redux application</b> with search, chat, and payment features</li>
          </ul>
        </Modal>
        <Modal
          title="Marc Jacobs"
          visible={this.state.visible1}
          footer={null}
          onCancel={this.closeModal1}
          style={{ height: '75%', width: '50%', top: 50 }}
        >
          <Carousel vertical="true">
            <div><Image cloudName="kurzweg" publicId="screenshot_bookmarc" width="400" quality="auto" responsive style={{ display: 'block', margin: '0 auto', height: '200px'}} /></div>
            <div><Image cloudName="kurzweg" publicId="screenshot_bookmarc2" width="400" quality="auto" responsive  style={{ display: 'block', margin: '0 auto', height: '200px'}} /></div>
            <div><Image cloudName="kurzweg" publicId="screenshot_bookmarc3" width="400" quality="auto" responsive  style={{ display: 'block', margin: '0 auto', height: '200px'}} /></div>
            <div><Image cloudName="kurzweg" publicId="screenshot_bookmarc4" width="400" quality="auto" responsive  style={{ display: 'block', margin: '0 auto', height: '200px'}} /></div>
          </Carousel>
          <p style={{ marginTop: '3%' }}><em>Building digital presence and brand awareness for a fashion company’s lifestyle brand.</em></p>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '2%', marginBottom: '2%' }}>Strategy + Branding + Content</p>
          <ul style={{ width: '90%', display: 'block', margin: '0 auto', listStyleType: 'circle', textAlign: 'left', marginTop: '2%', lineHeight: '200%' }}>
            <li><b>Expanded digital presence</b> of Bookmarc, an LA-based lifestyle brand owned by fashion company Marc Jacobs</li>
            <li>Worked with Marc Jacobs headquarters to <b>revamp the Bookmarc <a href="https://www.marcjacobs.com/bookmarc/" target="blank" style={{ textDecoration: 'none', color: '#108EE9', fontWeight: 'bold' }}> website</a></b></li>
            <li>Wrote website copy and <b>optimized</b> page titles and meta descriptions</li>
            <li>Edited the brand's first print catalog, including <b>art direction and copywriting</b></li>
          </ul>
        </Modal>
        <Modal title="The Other" visible={this.state.visible2} footer={null} onCancel={this.closeModal2} style={{ top: 50 }}>
          <Carousel vertical="true">
            <div><Image cloudName="kurzweg" publicId="screenshot_other" width="400" quality="auto" style={{ display: 'block', margin: '0 auto', height: '200px'}} /></div>
            <div><Image cloudName="kurzweg" publicId="screenshot_other2" width="400" quality="auto" style={{ display: 'block', margin: '0 auto', height: '200px'}} /></div>
            <div><Image cloudName="kurzweg" publicId="other_sitemap" width="400" quality="auto" style={{ display: 'block', margin: '0 auto', height: '200px', width: '90%'}} /></div>
          </Carousel>
          <p style={{ textAlign: 'center', marginTop: '3%' }}><em>Building a <a href="http://the-other.herokuapp.com/#/" target="blank" style={{ textDecoration: 'none', color: '#108EE9', fontWeight: 'bold' }}>digital art gallery</a> in one week</em></p>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '2%', marginBottom: '2%' }}>Development + UI Design</p>
          <ul style={{ width: '90%', display: 'block', margin: '0 auto', listStyleType: 'circle', textAlign: 'left', marginTop: '2%', lineHeight: '200%' }}>
            <li><b>Created an online gallery</b> for Los Angeles curator Aaron Freshour for final project of General Assembly WDI program (one-week sprint)</li>
            <li><b>Built a custom CMS</b> using MEAN stack (MongoDB database, Express server, Angular 1 front end, Node.js runtime)</li>
            <li>Integrated a <b>responsive CSS</b> mosaic grid and hover effects</li>
          </ul>
        </Modal>
        <Modal title="Hilton Worldwide EMEA" visible={this.state.visible3} footer={null} onCancel={this.closeModal3} style={{ top: 50 }}>
          <Carousel vertical="true">
            <div><Image cloudName="kurzweg" publicId="screenshot_other" width="400" quality="auto" style={{ display: 'block', margin: '0 auto', height: '200px'}} /></div>
            <div><Image cloudName="kurzweg" publicId="screenshot_other2" width="400" quality="auto" style={{ display: 'block', margin: '0 auto', height: '200px'}} /></div>
            <div><Image cloudName="kurzweg" publicId="other_sitemap" width="400" quality="auto" style={{ display: 'block', margin: '0 auto', height: '200px', width: '90%'}} /></div>
          </Carousel>
          <p style={{ textAlign: 'center', marginTop: '3%' }}><em>Building a <a href="http://the-other.herokuapp.com/#/" target="blank" style={{ textDecoration: 'none', color: '#108EE9', fontWeight: 'bold' }}>digital art gallery</a> in one week</em></p>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '2%', marginBottom: '2%' }}>Development + UI Design</p>
          <ul style={{ width: '90%', display: 'block', margin: '0 auto', listStyleType: 'circle', textAlign: 'left', marginTop: '2%', lineHeight: '200%' }}>
            <li><b>Designed and built an online gallery</b> for Los Angeles curator Aaron Freshour for final project of General Assembly WDI program (one-week sprint)</li>
            <li><b>Created a custom CMS</b> using MEAN stack (MongoDB database, Express server, Angular 1 front end, Node.js runtime)</li>
            <li>Integrated a <b>responsive CSS</b> mosaic grid and hover effects</li>
          </ul>
        </Modal>
      </div>
    );

  }
}

export default Grid;

// <Modal title="Hilton Worldwide EMEA" visible={this.state.visible4} footer={null} onCancel={this.closeModal4}>
//   <p>some contents...</p>
//   <p>some contents...</p>
//   <p>some contents...</p>
// </Modal>
// <Modal title="Tripific" visible={this.state.visible3} footer={null} onCancel={this.closeModal3}>
//   <p>some contents...</p>
//   <p>some contents...</p>
//   <p>some contents...</p>
// </Modal>
// <Modal title="Slot Machine" visible={this.state.visible5} footer={null} onCancel={this.closeModal5}>
//   <p>some contents...</p>
//   <p>some contents...</p>
//   <p>some contents...</p>
// </Modal>
