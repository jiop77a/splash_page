import React, { Component } from 'react';
import logo from '../../images/logo.png';
import logos from '../../images/logos.png';
import hero from '../../images/hero_image.jpg';
import HeaderBody from './headerBody';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth});
  }

  computeBackground(width) {
    let background = {
      width: "100%",
      height: "0",
      backgroundSize: "contain",
      backgroundRepeat: 'no-repeat',
      paddingTop: "57.43%"
    };

    if (width > 900 || width < 800) {
      return {...background, backgroundImage: `url(${hero})`};
    } else {
      return {...background, backgroundColor: 'white'};
    }
  }

  render() {

    let {width} = this.state;

    return (
      <div className="header">
        <div className="logo-top">
          <img src={logo} />
          <div className="small-links">
            <a>Interested Student?</a>
            <a>Interested Company?</a>
          </div>
        </div>
        <HeaderBody style={this.computeBackground(width)}/>
        <div className="logos-bottom">
          <img src={logos} />
        </div>
      </div>
    );
  }
}


export default Header;
