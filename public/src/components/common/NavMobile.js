import React from "react";
import AppBar from 'material-ui/AppBar';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import { Image } from 'cloudinary-react';


const SubMenu = Menu.SubMenu;

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      current: '1',
      showMenu: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  toggleMenu() {
    this.setState((prevState) => {
      return { showMenu: !prevState.showMenu };
    }).bind(this)
  }

  // render
  render() {
    let display = 'none';
    (this.state.showMenu) ? display = 'block' : display = 'none';
    const github = <div style={{ display: 'inline-flex', marginTop: '6%' }}>
                      <a style={{ padding: '5%' }} href="https://github.com/vkurzweg" target="blank" ><Icon type="github" style={{ color: 'white', fontSize: '20px', paddingRight: '10%'}} /></a>
                      <a style={{ padding: '5%' }} href="https://www.linkedin.com/in/victoriakurzweg/" target="blank"><img src="/media/linkedin.png" style={{ width: '20px', paddingRight: '10%' }} /></a>
                      <a style={{ padding: '5%' }} href="https://www.instagram.com/victoria.kurzweg/" target="blank"><img src="/media/instagram.png" style={{ width: '20px' }} /></a>
                    </div>
    const brand = <a href="/" style={{ color: 'white', fontFamily: 'Oswald', letterSpacing: '2px', fontSize: '20px' }}>portfolio</a>
    return (
      <div style={{ position: 'fixed', width: '100%', zIndex: '10' }}>
        <AppBar
            title={brand}
            style={{ width: '100%', backgroundColor: 'black' }}
            onLeftIconButtonTouchTap={this.toggleMenu}
            iconElementRight={github}
            iconStyleRight={{ marginTop: '3%', marginRight: '1.5%'}}
            onRightIconButtonTouchTap={this.handleGitTap}
          />
        <div style={{ display }}>
          <Menu
              theme={this.state.theme}
              onClick={this.handleClick}
              style={{ position: 'fixed', width: 240, backgroundColor: '#212121' }}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
              <Menu.Item key="1"><a href="/resume" style={{ textTransform: 'uppercase', letterSpacing: '3px' }} >Resume</a></Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}
