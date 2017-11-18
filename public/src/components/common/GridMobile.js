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
    cursor: pointer;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  &:hover {
    opacity: 0;
    cursor: pointer;
  }
`;

const TileCopy = styled.div`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  height: 275px;
  opacity: 0;
  background-color: black;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const StyledGridTileHead = styled(GridTile)`
  background-image: url('http://res.cloudinary.com/kurzweg/image/upload/v1510723938/palma_work_edit.png');
  width:100%;
  height:240px;
  background-repeat:no-repeat;
  background-size:cover;
  padding-bottom: 5%;
`;

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '1%',
    backgroundColor: 'black',
  },
  gridList: {
    width: '95%',
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto',
    margin: '0 auto',
    marginBottom: '5%'
  },
};

const tilesData = [
  {
    img: 'aloha_screenshot',
    title: 'aloha brothers surf',
    s1: 'Responsive Web Development',
    s2: 'Web + UI Design',
    s3: 'Brand Strategy',
    s4: 'Workflow Optimization',
  }, {
    img: 'screenshot_bookmarc',
    title: 'marc jacobs',
    s1: 'Brand Strategy',
    s2: 'Search Engine Optimization',
    s3: 'Art + Creative Direction',
    s4: 'Copywriting (Print + Ecommerce)',
  }, {
    img: 'screenshot_sbgl',
    title: 'silicon beach guitar',
    s1: 'Responsive Web Development',
    s2: 'Web + UI Design',
    s3: 'Visual Design',
    s4: 'Copyediting',
  }, {
    img: 'screenshot_caseyahern',
    title: 'casey ahern',
    s1: 'Responsive Web Development',
    s2: 'Visual Design',
    s3: 'Brand Strategy',
    s4: 'Copywriting',
  }, {
    img: 'screenshot_trianonpalace1',
    title: 'hilton worldwide EMEA',
    s1: 'Copywriting for Ecommerce',
    s2: 'Search Engine Optimization',
    s3: 'Content Strategy',
    s4: 'Content Management',
  }, {
    img: 'screenshot_emkr',
    title: 'eventmakr',
    s1: 'UX + Web Design',
    s2: 'Responsive Web Development',
    s3: 'Copyediting',
    s4: 'Email Template Design',
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
        <div key={idx} onClick={() => this.openLightbox(idx)} >
          <Image style={{ display: 'block', margin: '0 auto'}} cloudName="kurzweg" publicId={element.src} alt={element.alt} width="150" quality="auto" crop="scale" responsive />
        </div>
      );
    });
    const childElementsAloha = GALLERY_IMAGE_SET_ALOHA.map((element, idx) => {
      return (
        <div key={idx} onClick={() => this.openLightbox(idx)} >
          <Image style={{ display: 'block', margin: '0 auto' }} cloudName="kurzweg" publicId={element.src} alt={element.alt} width="150" quality="auto" crop="scale" responsive />
        </div>
      );
    });
    const childElementsEmkr = GALLERY_IMAGE_SET_EMKR.map((element, idx) => {
      return (
        <div key={idx} onClick={() => this.openLightbox(idx)} >
          <Image style={{ display: 'block', margin: '0 auto' }} cloudName="kurzweg" publicId={element.src} alt={element.alt} width="250" quality="auto" crop="scale" responsive />
        </div>
      );
    });
    const childElementsBookmarc = GALLERY_IMAGE_SET_MJ.map((element, idx) => {
      return (
        <div key={idx} onClick={() => this.openLightbox(idx)} >
          <Image style={{ display: 'block', margin: '0 auto' }} cloudName="kurzweg" publicId={element.src} alt={element.alt} width="250" quality="auto" crop="scale" responsive />
        </div>
      );
    });
    const childElementsHilton = GALLERY_IMAGE_SET_HILTON.map((element, idx) => {
      return (
        <div key={idx} onClick={() => this.openLightbox(idx)} >
          <Image style={{ display: 'block', margin: '0 auto' }} cloudName="kurzweg" publicId={element.src} alt={element.alt} width="250" quality="auto" crop="scale" responsive />
        </div>
      );
    });
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2} cellHeight={125}>
          {tilesData.map((tile, idx) => (
            <StyledGridTile
              key={tile.img}
              onClick={this.showModal.bind(this, idx)}
            >
              <TileCopy>
                <h3 style={{ letterSpacing: '2px', color: '#C2C979', fontSize: '30px', textAlign: 'center', fontFamily: 'Oswald', marginTop: '5%' }}>{tile.title}</h3>
                <p style={{ fontSize: '18px', padding: '1%', letterSpacing: '2px', textTransform: 'uppercase', color: 'white', fontFamily: 'Josefin Sans', marginTop: '4%' }}><Image style={{ width: '15px', marginLeft: '35px', marginRight: '10px', marginBottom: '1%' }} cloudName="kurzweg" publicId="logo_edit_white" quality="auto" crop="scale" responsive />{tile.s1}</p>
                <p style={{ fontSize: '18px', padding: '1%', letterSpacing: '2px', textTransform: 'uppercase', color: 'white', fontFamily: 'Josefin Sans', }}><Image style={{ width: '15px', marginLeft: '35px', marginRight: '10px', marginBottom: '1%' }} cloudName="kurzweg" publicId="logo_edit_white" quality="auto" crop="scale" responsive />{tile.s2}</p>
                <p style={{ fontSize: '18px', padding: '1%', letterSpacing: '2px', textTransform: 'uppercase', color: 'white', fontFamily: 'Josefin Sans', }}><Image style={{ width: '15px', marginLeft: '35px', marginRight: '10px', marginBottom: '1%' }} cloudName="kurzweg" publicId="logo_edit_white" quality="auto" crop="scale" responsive />{tile.s3}</p>
                <p style={{ fontSize: '18px', padding: '1%', letterSpacing: '2px', textTransform: 'uppercase', color: 'white', fontFamily: 'Josefin Sans', }}><Image style={{ width: '15px', marginLeft: '35px', marginRight: '10px', marginBottom: '1%' }} cloudName="kurzweg" publicId="logo_edit_white" quality="auto" crop="scale" responsive />{tile.s4}</p>
              </TileCopy>
              <StyledImage style={{ height: '100%' }} cloudName="kurzweg" publicId={tile.img} quality="auto" responsive />
            </StyledGridTile>
          ))}
        </GridList>
        <Modal title="case study: Silicon Beach Guitar" visible={this.state.visible2} footer={null} onCancel={this.closeModal2} style={{ top: 50 }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div>
                  {childElementsSilicon}
                  <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '1%', marginTop: '2%' }}><em>Click for more images</em></p>
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
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Challenges</p>
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Solutions</p>
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
              <a href="https://www.siliconbeachguitar.com/" target="blank" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', margin: '0 auto', textAlign: 'center' }}><button className="btn btn-primary" style={{ backgroundColor: '#108EE9', border: 'none', width: '30%', margin: '0 auto', padding: '1%', textAlign: 'center' }}>VISIT</button></a>
            </div>
          </div>
        </Modal>
        <Modal title="case study: Aloha Brothers" visible={this.state.visible0} footer={null} onCancel={this.closeModal0} style={{ top: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
                {childElementsAloha}
                <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '1%', marginTop: '2%' }}><em>Click for more images</em></p>
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
            <div className="col-sm-6">
              <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Challenges</p>
              <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Solutions</p>
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
        <Modal title="case study: Casey Ahern" visible={this.state.visible3} footer={null} onCancel={this.closeModal3} style={{ top: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
                <div onClick={() => this.openLightbox(2)} >
                  <Image style={{ display: 'block', margin: '0 auto' }} cloudName="kurzweg" publicId="wireframe_caseyahern" width="150" quality="auto" crop="scale" responsive />
                </div>
                <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '1%', marginTop: '2%' }}><em>Click for more images</em></p>
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
            <div className="col-sm-6">
              <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Challenges</p>
              <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Solutions</p>
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
        <Modal title="case study: Eventmakr" visible={this.state.visible5} footer={null} onCancel={this.closeModal5} style={{ top: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div style={{ width: '90%', margin: '0 auto' }}>
                {childElementsEmkr}
                <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '1%' }}><em>Click for more images</em></p>
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
              <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Challenges</p>
              <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Solutions</p>
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
          title="case study: Marc Jacobs"
          visible={this.state.visible1}
          footer={null}
          onCancel={this.closeModal1}
          style={{ top: 50 }}
        >
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div style={{ width: '90%', margin: '0 auto' }}>
                {childElementsBookmarc}
                <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '1%', marginTop: '2%' }}><em>Click for more images</em></p>
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
              <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Challenges</p>
              <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Solutions</p>
              <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Technologies</p>
              <a href="https://www.marcjacobs.com/bookmarc/" target="blank" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', margin: '0 auto', textAlign: 'center' }}><button className="btn btn-primary" style={{ backgroundColor: '#108EE9', border: 'none', width: '30%', margin: '0 auto', padding: '1%', textAlign: 'center' }}>VISIT</button></a>
            </div>
          </div>
         </div>
        </Modal>
        <Modal title="case study: Hilton Worldwide EMEA" visible={this.state.visible4} footer={null} onCancel={this.closeModal4} style={{ top: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div style={{ width: '90%', margin: '0 auto' }}>
                {childElementsHilton}
                <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '1%', marginTop: '2%' }}><em>Click for more images</em></p>
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
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Challenges</p>
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Solutions</p>
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


