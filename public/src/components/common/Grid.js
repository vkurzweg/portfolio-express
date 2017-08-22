import React from "react";
import {GridList, GridTile} from 'material-ui/GridList';
import Modal from 'antd/lib/modal';
import Carousel from 'antd/lib/carousel';
import { Image } from 'cloudinary-react';
import styled from 'styled-components';
import Lightbox from 'react-images';
import LIGHTBOX_IMAGE_SET_SBGL from '../../data/LightboxSBGL';
import GALLERY_IMAGE_SET_SBGL from '../../data/GallerySBGL';
import LIGHTBOX_IMAGE_SET_ALOHA from '../../data/LightboxAloha';
import GALLERY_IMAGE_SET_ALOHA from '../../data/GalleryAloha';
import LIGHTBOX_IMAGE_SET_EMKR from '../../data/LightboxEmkr';
import GALLERY_IMAGE_SET_EMKR from '../../data/GalleryEmkr';
import LIGHTBOX_IMAGE_SET_MJ from '../../data/LightboxMj';
import GALLERY_IMAGE_SET_MJ from '../../data/GalleryMj';
import LIGHTBOX_IMAGE_SET_OTHER from '../../data/LightboxOther';
import GALLERY_IMAGE_SET_OTHER from '../../data/GalleryOther';
import LIGHTBOX_IMAGE_SET_HILTON from '../../data/LightboxHilton';
import GALLERY_IMAGE_SET_HILTON from '../../data/GalleryHilton';

const StyledGridTile = styled(GridTile)`
  &:hover {
    outline-style: outset;
    outline-color: #108EE9;
  }
`;

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
    marginBottom: '1%'
  },
};

const tilesData = [
  {
    img: 'screenshot_sbgl',
  }, {
    img: 'screenshot_dingdelight',
  }, {
    img: 'screenshot_bookmarc',
  }, {
    img: 'screenshot_emkr',
  }, {
    img: 'screenshot_other',
  }, {
    img: 'screenshot_calendonian',
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
      visible6: false,
      lightboxIsOpen: false,
      currentImage: 0,
    }
    this.showModal = this.showModal.bind(this);
    this.closeModal0 = this.closeModal0.bind(this);
    this.closeModal1 = this.closeModal1.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
    this.closeModal3 = this.closeModal3.bind(this);
    this.closeModal4 = this.closeModal4.bind(this);
    this.closeModal5 = this.closeModal5.bind(this);
    this.closeModal6 = this.closeModal6.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
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
      if (idx === 6){
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

  closeModal6() {
    this.setState({
      visible6: false,
    })
  }

  openLightbox(index) {
    console.log(index)
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }
  handleClickImage() {
    this.gotoNext();
  }

  // render
  render() {
    const childElementsSilicon = GALLERY_IMAGE_SET_SBGL.map((element, idx) => {
      return (
        <div key={idx} onClick={() => this.openLightbox(idx)} className="item-container" >
          <Image className="item" cloudName="kurzweg" publicId={element.src} alt={element.alt} quality="auto" crop="scale" responsive />
        </div>
      );
    });
    const childElementsAloha = GALLERY_IMAGE_SET_ALOHA.map((element, idx) => {
      return (
        <div key={idx} onClick={() => this.openLightbox(idx)} className="item-container" >
          <Image className="item" cloudName="kurzweg" publicId={element.src} alt={element.alt} width="300" quality="auto" crop="scale" responsive />
        </div>
      );
    });
    const childElementsEmkr = GALLERY_IMAGE_SET_EMKR.map((element, idx) => {
      return (
        <div key={idx} onClick={() => this.openLightbox(idx)} className="item-container" >
          <Image className="item" cloudName="kurzweg" publicId={element.src} alt={element.alt} width="300" quality="auto" crop="scale" responsive />
        </div>
      );
    });
    const childElementsBookmarc = GALLERY_IMAGE_SET_MJ.map((element, idx) => {
      return (
        <div key={idx} onClick={() => this.openLightbox(idx)} className="item-container" >
          <Image className="item" cloudName="kurzweg" publicId={element.src} alt={element.alt} width="300" quality="auto" crop="scale" responsive />
        </div>
      );
    });
    const childElementsOther = GALLERY_IMAGE_SET_OTHER.map((element, idx) => {
      return (
        <div key={idx} onClick={() => this.openLightbox(idx)} className="item-container" >
          <Image className="item" cloudName="kurzweg" publicId={element.src} alt={element.alt} width="300" quality="auto" crop="scale" responsive />
        </div>
      );
    });
    const childElementsHilton = GALLERY_IMAGE_SET_HILTON.map((element, idx) => {
      return (
        <div key={idx} onClick={() => this.openLightbox(idx)} className="item-container" >
          <Image className="item" cloudName="kurzweg" publicId={element.src} alt={element.alt} width="300" quality="auto" crop="scale" responsive />
        </div>
      );
    });
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {tilesData.map((tile, idx) => (
            <StyledGridTile
              key={tile.img}
              onClick={this.showModal.bind(this, idx)}
            >
              <Image cloudName="kurzweg" publicId={tile.img} width="400" quality="auto" responsive />
            </StyledGridTile>
          ))}
        </GridList>
        <p style={{ fontSize: '12px', fontStyle: 'italic', textAlign: 'center' }}>Click on any image for more info</p>
        <Modal title="Silicon Beach Guitar" visible={this.state.visible0} footer={null} onCancel={this.closeModal0} style={{ top: 50 }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 wrapper">
                <p style={{ textAlign: 'center', fontSize: '10px', marginBottom: '1%' }}><em>Click any image to enlarge</em></p>
                <div className="masonry">
                  {childElementsSilicon}
                  <Lightbox
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                    images={LIGHTBOX_IMAGE_SET_SBGL}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClose={this.closeLightbox}
                    backdropClosesModal
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Services</p>
                <div style={{ width: '85%', margin: '0 auto' }}>
                  <p>Web Development</p>
                  <p>UX, Web & UI Design</p>
                  <p>Branding</p>
                </div>
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Technologies</p>
                <div style={{ width: '85%', margin: '0 auto', columnCount: '2', marginBottom: '5%' }}>
                  <p>Node.js + Express</p>
                  <p>NPM</p>
                  <p>React + Redux</p>
                  <p>HTML, CSS/SCSS & JavaScript</p>
                  <p>Styled Components</p>
                  <p>Bootstrap</p>
                  <p>Photoshop</p>
                  <p>Sketch</p>
                </div>
              </div>
              <a href="https://siliconbeachguitar.herokuapp.com/" target="blank" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', margin: '0 auto', textAlign: 'center' }}><button className="btn btn-primary" style={{ backgroundColor: '#108EE9', border: 'none', width: '30%', margin: '0 auto', padding: '1%', textAlign: 'center' }}>VISIT</button></a>
            </div>
          </div>
        </Modal>
        <Modal title="Aloha Brothers" visible={this.state.visible1} footer={null} onCancel={this.closeModal1} style={{ top: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 wrapper">
              <p style={{ textAlign: 'center', fontSize: '10px', marginBottom: '1%' }}><em>Click any image to enlarge</em></p>
              <div className="masonry" style={{ width: '90%', margin: '0 auto' }}>
                {childElementsAloha}
                <Lightbox
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
                  images={LIGHTBOX_IMAGE_SET_ALOHA}
                  onClickImage={this.handleClickImage}
                  onClickNext={this.gotoNext}
                  onClickPrev={this.gotoPrevious}
                  onClose={this.closeLightbox}
                  backdropClosesModal
                />
              </div>
            </div>
            <div className="col-sm-6">
              <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Services</p>
              <div style={{ width: '90%', margin: '0 auto' }}>
                <p>Web Development</p>
                <p>Responsive Web & UI Design</p>
                <p>Branding & Brand Strategy</p>
                <p>Copyediting</p>
                <p>Workflow Optimization</p>
              </div>
              <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Technologies</p>
              <div style={{ width: '90%', margin: '0 auto', columnCount: '2', marginBottom: '5%' }}>
                <p>Node.js + Express</p>
                <p>NPM</p>
                <p>React + Redux</p>
                <p>HTML5, CSS/SCSS & JavaScript</p>
                <p>Material Design for React</p>
                <p>Styled Components</p>
                <p>Bootstrap</p>
                <p>Photoshop</p>
              </div>
            </div>
            <a href="http://alohabrothers.surf/" target="blank" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', margin: '0 auto', textAlign: 'center' }}><button className="btn btn-primary" style={{ backgroundColor: '#108EE9', border: 'none', width: '30%', margin: '0 auto', padding: '1%', textAlign: 'center' }}>VISIT</button></a>
          </div>
        </div>
        </Modal>
        <Modal title="Eventmakr" visible={this.state.visible3} footer={null} onCancel={this.closeModal3} style={{ top: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 wrapper">
              <p style={{ textAlign: 'center', fontSize: '10px', marginBottom: '1%' }}><em>Click any image to enlarge</em></p>
              <div className="masonry" style={{ width: '90%', margin: '0 auto' }}>
                {childElementsEmkr}
                <Lightbox
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
                  images={LIGHTBOX_IMAGE_SET_EMKR}
                  onClickImage={this.handleClickImage}
                  onClickNext={this.gotoNext}
                  onClickPrev={this.gotoPrevious}
                  onClose={this.closeLightbox}
                  backdropClosesModal
                />
              </div>
            </div>
            <div className="col-sm-6">
              <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Services</p>
              <div style={{ width: '90%', margin: '0 auto' }}>
                <p>Web Development (SaaS Minimum Viable Product)</p>
                <p>UX, Web & UI Design</p>
                <p>Branding & Brand Strategy</p>
                <p>Copyediting</p>
                <p>Marketing</p>
              </div>
              <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Technologies</p>
              <div style={{ width: '90%', margin: '0 auto', columnCount: '2', marginBottom: '5%' }}>
                <p>Node.js + Express</p>
                <p>MongoDB</p>
                <p>NPM</p>
                <p>React + Redux</p>
                <p>HTML5, CSS/SCSS & JavaScript</p>
                <p>Material Design for React</p>
                <p>Stripe.js</p>
                <p>Google Maps API</p>
                <p>Firebase</p>
                <p>Bootstrap</p>
                <p>Photoshop</p>
                <p>Sketch</p>
              </div>
            </div>
            <a href="http://app.eventmakr.com/" target="blank" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', margin: '0 auto', textAlign: 'center' }}><button className="btn btn-primary" style={{ backgroundColor: '#108EE9', border: 'none', width: '30%', margin: '0 auto', padding: '1%', textAlign: 'center' }}>VISIT</button></a>
          </div>
        </div>
        </Modal>
        <Modal
          title="Marc Jacobs"
          visible={this.state.visible2}
          footer={null}
          onCancel={this.closeModal2}
          style={{ top: 50 }}
        >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 wrapper">
              <p style={{ textAlign: 'center', fontSize: '10px', marginBottom: '1%' }}><em>Click any image to enlarge</em></p>
              <div className="masonry" style={{ width: '90%', margin: '0 auto' }}>
                {childElementsBookmarc}
                <Lightbox
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
                  images={LIGHTBOX_IMAGE_SET_MJ}
                  onClickImage={this.handleClickImage}
                  onClickNext={this.gotoNext}
                  onClickPrev={this.gotoPrevious}
                  onClose={this.closeLightbox}
                  backdropClosesModal
                />
              </div>
            </div>
              <div className="col-sm-6" style={{ padding: '3%' }}>
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Services</p>
                <div style={{ width: '90%', margin: '0 auto', marginBottom: '5%' }}>
                  <p>Brand Strategy</p>
                  <p>Search Engine Optimization</p>
                  <p>Art/Creative Direction</p>
                  <p>Copywriting (Print & Ecommerce)</p>
                </div>
              <a href="https://www.marcjacobs.com/bookmarc/" target="blank" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', margin: '0 auto', textAlign: 'center' }}><button className="btn btn-primary" style={{ backgroundColor: '#108EE9', border: 'none', width: '30%', margin: '0 auto', padding: '1%', textAlign: 'center' }}>VISIT</button></a>
            </div>
          </div>
         </div>
        </Modal>
        <Modal title="The Other" visible={this.state.visible4} footer={null} onCancel={this.closeModal4} style={{ top: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 wrapper">
              <p style={{ textAlign: 'center', fontSize: '10px', marginBottom: '1%' }}><em>Click any image to enlarge</em></p>
              <div className="masonry" style={{ width: '90%', margin: '0 auto' }}>
                {childElementsOther}
                <Lightbox
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
                  images={LIGHTBOX_IMAGE_SET_OTHER}
                  onClickImage={this.handleClickImage}
                  onClickNext={this.gotoNext}
                  onClickPrev={this.gotoPrevious}
                  onClose={this.closeLightbox}
                  backdropClosesModal
                />
              </div>
            </div>
            <div className="col-sm-6">
              <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Services</p>
              <div style={{ width: '90%', margin: '0 auto' }}>
                <p>Web Development (General Assembly WDI Final Project)</p>
                <p>Web & UI Design</p>
              </div>
              <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Technologies</p>
              <div style={{ width: '90%', margin: '0 auto', columnCount: '2', marginBottom: '5%' }}>
                <p>Node.js + Express</p>
                <p>MongoDB</p>
                <p>Angular.js</p>
                <p>HTML5, CSS3 & JavaScript</p>
                <p>jQuery</p>
                <p>Bootstrap</p>
                <p>Sketch</p>
              </div>
              <a href="http://the-other.herokuapp.com/#/" target="blank" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', margin: '0 auto', textAlign: 'center' }}><button className="btn btn-primary" style={{ backgroundColor: '#108EE9', border: 'none', width: '30%', margin: '0 auto', padding: '1%', textAlign: 'center' }}>VISIT</button></a>
            </div>
          </div>
        </div>
        </Modal>
        <Modal title="Hilton Worldwide EMEA" visible={this.state.visible5} footer={null} onCancel={this.closeModal5} style={{ top: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 wrapper">
              <p style={{ textAlign: 'center', fontSize: '10px', marginBottom: '1%' }}><em>Click any image to enlarge</em></p>
              <div className="masonry" style={{ width: '90%', margin: '0 auto' }}>
                {childElementsHilton}
                <Lightbox
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
                  images={LIGHTBOX_IMAGE_SET_HILTON}
                  onClickImage={this.handleClickImage}
                  onClickNext={this.gotoNext}
                  onClickPrev={this.gotoPrevious}
                  onClose={this.closeLightbox}
                  backdropClosesModal
                />
              </div>
            </div>
              <div className="col-sm-6" style={{ padding: '3%' }}>
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Services</p>
                <div style={{ width: '90%', margin: '0 auto', marginBottom: '5%' }}>
                  <p>Search Engine Optimization</p>
                  <p>Content Strategy</p>
                  <p>Copywriting for Ecommerce</p>
                </div>
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Technologies</p>
                <div style={{ width: '90%', margin: '0 auto', columnCount: '2', marginBottom: '5%' }}>
                  <p>HTML</p>
                  <p>WordPress</p>
                  <p>Google AdWords</p>
                </div>
              <a href="https://www.marcjacobs.com/bookmarc/" target="blank" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', margin: '0 auto', textAlign: 'center' }}><button className="btn btn-primary" style={{ backgroundColor: '#108EE9', border: 'none', width: '30%', margin: '0 auto', padding: '1%', textAlign: 'center' }}>VISIT</button></a>
            </div>
          </div>
        </div>
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
