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
  height: 160px;
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
    width: '75%',
    height: '420px',
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
    s4: 'Branding',
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
        <GridList style={styles.gridList} cols={1} cellHeight={160}>
          {tilesData.map((tile, idx) => (
            <StyledGridTile
              key={tile.img}
              onClick={this.showModal.bind(this, idx)}
            >
              <TileCopy>
                <h3 style={{ letterSpacing: '2px', color: '#C2C979', fontSize: '16px', textAlign: 'center', fontFamily: 'Oswald', paddingTop: '5%', width: '80%', margin: '0 auto' }}>{tile.title}</h3>
                <p style={{ marginLeft: '10%', fontSize: '8px', padding: '1%', letterSpacing: '2px', textTransform: 'uppercase', color: 'white', fontFamily: 'Josefin Sans', marginTop: '4%' }}>{tile.s1}</p>
                <p style={{ marginLeft: '10%', fontSize: '8px', padding: '1%', letterSpacing: '2px', textTransform: 'uppercase', color: 'white', fontFamily: 'Josefin Sans', }}>{tile.s2}</p>
                <p style={{ marginLeft: '10%', fontSize: '8px', padding: '1%', letterSpacing: '2px', textTransform: 'uppercase', color: 'white', fontFamily: 'Josefin Sans', }}>{tile.s3}</p>
                <p style={{ marginLeft: '10%', fontSize: '8px', padding: '1%', letterSpacing: '2px', textTransform: 'uppercase', color: 'white', fontFamily: 'Josefin Sans', }}>{tile.s4}</p>
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
                  <p style={{ textAlign: 'center', fontSize: '18px', letterSpacing: '1px', marginBottom: '3%', marginTop: '2%', fontFamily: 'Oswald', textTransform: 'lowercase', color: '#3D8EE2' }}>Click image for screenshots</p>
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
                <div style={{ width: '95%', margin: '0 auto' }}>
                  <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Challenges</p>
                  <p>Ali Memarian writes and produces songs for feature films, award-winning television shows, and commercial advertisements. While pursuing a PhD in Musicology, Ali was inspired to become an educator himself and needed the digital infrastructure to get started.</p>
                  <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Solutions</p>
                  <p>First we created wireframes to illustrate Ali’s vision for his curriculum and offerings. Compared to his competitors in the L.A. area, Ali offered a wider range of courses including composition and music production, so we created a custom user interface to highlight this scope. The result was a fully responsive website through which Ali could present and promote his new services to the many aspiring musicians, songwriters and producers in his market.</p>
                  <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Technologies</p>
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
              </div>
              <a href="https://www.siliconbeachguitar.com/" target="blank" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', margin: '0 auto', textAlign: 'center' }}><button className="btn btn-primary" style={{ backgroundColor: '#108EE9', border: 'none', width: '80%', margin: '0 auto', padding: '3%', textAlign: 'center' }}>VISIT</button></a>
            </div>
          </div>
        </Modal>
        <Modal title="case study: Aloha Brothers" visible={this.state.visible0} footer={null} onCancel={this.closeModal0} style={{ top: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
                {childElementsAloha}
                <p style={{ textAlign: 'center', fontSize: '18px', letterSpacing: '1px', marginBottom: '3%', marginTop: '2%', fontFamily: 'Oswald', textTransform: 'lowercase', color: '#3D8EE2' }}>Click image for before & after shots</p>
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
              <div style={{ width: '95%', margin: '0 auto' }}>
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Challenges</p>
                <p>The top-reviewed surf lesson business in the L.A. market, Aloha Brothers Surf Lessons has built its brand on digital platforms including Yelp and TripAdvisor. After a sharp increase in new competitors, the company wanted to broaden its digital presence and enable the brand and business to continue to grow.</p>
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Solutions</p>
                <p>Aloha Brothers had outgrown its website, which was functional but several years old. We redesigned, expanded, and rebuilt the entire site, then relaunched on a shorter, more eye-catching domain, alohabrothers.surf. Key improvements included a technology upgrade to Node and React, leveraging modern UI components. We also made a number of optimizations resulting in a 93% increase in page speed. The new site is completely responsive, with separate versions for mobile, desktop, and large screens.</p>
                <p style={{ marginTop: '3%' }}>The new website also helped facilitate the expansion of Aloha Brothers’ service offerings, with new pages for surf retreats and instructors in Hawaii, as well as a microsite for surfboard repair.</p>
                <p style={{ marginTop: '3%' }}>While working closely with Aloha Brothers on the new site, we noticed another opportunity for improvement: the company’s time-consuming and cumbersome process of scheduling surf lessons. We improved the efficiency of their system dramatically by moving it to the cloud, leveraging applications including Google Drive, Calendar, and Maps.</p>
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Technologies</p>
                <div style={{ width: '70%', margin: '0 auto', columnCount: '2', marginBottom: '5%' }}>
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
              <a href="http://alohabrothers.surf/" target="blank" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', margin: '0 auto', textAlign: 'center' }}><button className="btn btn-primary" style={{ backgroundColor: '#108EE9', border: 'none', width: '80%', margin: '0 auto', padding: '3%', textAlign: 'center' }}>VISIT</button></a>
            </div>
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
            </div>
            <div className="col-sm-6">
              <div style={{ width: '95%', margin: '0 auto' }}>
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Challenge</p>
                <p>Casey Ahern is a country music singer and musician from Southern California. Having recently moved to Nashville, Casey wanted a website to help promote her music among fans, booking agents, and potential collaborators. The new site needed to be easy to update with new music and show schedules.</p>
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Solution</p>
                <p>In order to make it as easy as possible for Casey to keep her site updated, we opted for a customized Squarespace site with social media and music platform integration.</p>
                <p style={{ fontSize: '16px', fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center', marginTop: '5%', padding: '3%' }}>Currently in development!</p>
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Technologies</p>
                <div style={{ width: '90%', margin: '0 auto', columnCount: '2', marginBottom: '5%' }}>
                  <p>Squarespace</p>
                  <p>JSON-T</p>
                  <p>HTML5 & CSS</p>
                  <p>Git</p>
                  <p>Node.js + Express + React (for site teaser)</p>
                  <p>Photoshop</p>
                </div>
              </div>
            </div>
            <a href="http://caseyahern.com" target="blank" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', margin: '0 auto', textAlign: 'center' }}><button className="btn btn-primary" style={{ backgroundColor: '#108EE9', border: 'none', width: '80%', margin: '0 auto', padding: '3%', textAlign: 'center' }}>VISIT</button></a>
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
              <div style={{ width: '95%', margin: '0 auto' }}>
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Challenges</p>
                <p>An early-stage startup based in Santa Monica, Eventmakr began 2016 with a name and a vision: an app that would enable users to plan and pay for every aspect of an event - party rentals, catering, music, flowers, etc. - on one platform. VK had developed a landing page, email templates, and other digital assets for Eventmakr in late 2015, and the startup had attracted enough interest from investors to fund a minimum viable product (MVP).</p>
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Solutions</p>
                <p>As the first designer and developer hired by Eventmakr, VK took the lead in organizing the design and development of the MVP application. Working closely with the founder, we translated her ideas and guidelines into low-fidelity wireframes, which we then edited and organized into a user flow. Next, we created high-fidelity wireframes and a clickable prototype that became the jumping-off point for development.</p>
                <p style={{ marginTop: '2%' }}>VK recruited an additional developer to help select the technologies (Node.js and React + Redux) and build the MVP application. After three months, Eventmakr had a working proof of concept with a real-time chat feature, secure payment system, and responsive user interface.</p>
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Technologies</p>
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
            </div>
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
                <p style={{ textAlign: 'center', fontSize: '18px', letterSpacing: '1px', marginBottom: '3%', marginTop: '2%', fontFamily: 'Oswald', textTransform: 'lowercase', color: '#3D8EE2' }}>Click image for more</p>
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
                <div style={{ width: '95%', margin: '0 auto' }}>
                  <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Challenges</p>
                  <p>Bookmarc is an art book retailer, gallery, and lifestyle brand owned by global fashion company Marc Jacobs. Known for its celebrity book signings and creative visual merchandising, Bookmarc had developed a unique brand identity in the Marc Jacobs network. Outside of its brick and mortars, however, Bookmarc needed a stronger presence in order to survive in an increasingly digital world.</p>
                  <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Solutions</p>
                  <p>We approached an audit of the Bookmarc website from a search marketing perspective, but our recommendations sparked a complete overhaul of the brand’s microsite. Working with Bookmarc directors in LA and Marc Jacobs headquarters in NYC, we updated site content, helped revise site structure, and expanded ecommerce offerings, providing product selections and optimized copy.</p>
                  <p style={{ marginTop: '2%' }}>We also proposed a new marketing tool that would leverage the brand’s preferred medium: print. Working again with Bookmarc leadership and Marc Jacobs HQ, we created a print catalog for distribution to top clients and influencers. VK leveraged extensive knowledge of Bookmarc’s in-store selection to help curate the catalog, selecting products to feature, developing themes for product organization/presentation, and co-creating mockups for product photography. All copy for the catalog was also written by VK.</p>
                </div>
              <a href="https://www.marcjacobs.com/bookmarc/" target="blank" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', margin: '0 auto', textAlign: 'center' }}><button className="btn btn-primary" style={{ backgroundColor: '#108EE9', border: 'none', width: '80%', margin: '0 auto', padding: '3%', textAlign: 'center' }}>VISIT</button></a>
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
                <div style={{ width: '95%', margin: '0 auto' }}>
                  <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Challenges</p>
                  <p>With hundreds of properties in the EMEA region and more in the pipeline, Hilton Worldwide faced a number of challenges to its success in ecommerce. Improving organic search presence for new and existing properties in Hilton’s portfolio of brands - including Waldorf Astoria, Conrad and DoubleTree, among others - was crucial to its digital strategy.</p>
                  <p style={{ marginTop: '2%' }}>Having multiple hotels in London, Dubai, Istanbul and other major cities in the region, Hilton needed to ensure that its keyword targets were specific enough to maximize visibility for individual hotels in the same market. Site content then needed to be optimized according to those keyword selections, and updated to include information about renovations and new hotel openings.</p>
                  <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Solutions</p>
                  <p>Working with international search marketing agency Luau Group, we selected keyword targets for 110 properties based on search volume data, hotel location, brand, and amenities. We then incorporated the new targets into metadata (page titles and descriptions) of most-visited pages for each property. In order to update body copy for new and renovated properties, we also surveyed hotel managers in Africa and the Middle East. We worked closely with ecommerce managers to ensure accuracy and adherence to brand guidelines, then submitted all content for approval by Hilton’s content team in Glasgow. The result of the content overhaul was a 60:1 return on spend.</p>
                  <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '3%' }}>Technologies</p>
                  <div style={{ width: '90%', margin: '0 auto', columnCount: '2', marginBottom: '5%' }}>
                    <p>HTML</p>
                    <p>WordPress</p>
                    <p>Google AdWords</p>
                  </div>
                </div>
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

// <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Challenges</p>
// <p style={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', padding: '1%' }}>Solutions</p>

