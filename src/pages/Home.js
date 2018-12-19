// imports

import React from 'react';
import styled, { css, keyframes} from 'styled-components'
const { Component, Fragment, PureComponent } = React;
// const { css, injectGlobal, keyframes, default: styled } = styled;


const Carousel = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 16px;
  max-width: 800px;
`;

const TextList = styled.ul`
  position: relative;
  display: block;
  flex: 1 1 60%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const TextItem = styled.li`
  position: absolute;
  display: block;
  top: 0;
  left:0;
  padding-right: 16px;
  transform: ${({ active }) => active
    ? 'translate3d(0, 0, 0)'
    : 'translate3d(0, 64px, 0)'};
  opacity: ${({ active }) => active ? 1 : 0};
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: ${({ active }) => active ? '0.2s, 0.2s' : '0.05s, 0.05s'};

  &:first-of-type {
    position:relative;
  }
`;

const ImageList = styled.ul`
  position: relative;
  list-style: none;
  flex: 1 1 40%;
  margin: 0;
  padding:0;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 20%;
    height: 100%;
    width: 60%;
    border-bottom: 1px solid #000;
    opacity: 0;
  }

  &:focus {
    outline: none;

    &::after {
      opacity: ${({ active }) => (active ? 0 : 0.75)};
    }
  }
`;

const ImageItem = styled.li`
  position: absolute;
  display: block;
  top: 0;
  left:0;
  border-radius: 50%;
  overflow: hidden;
  opacity: ${({ active }) => active ? 1 : 0};
  transition: opacity 0.4s ease;
  transition-delay: ${({ active }) => active ? '0.2s' : '0.05s'};

  &:first-of-type {
    position: relative;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background: #fff;
    transform: ${({ active }) => active
      ? 'scale3d(0, 0, 1)'
      : 'scale3d(1, 1, 1)'};
    transition: ${({ active }) => active
      ? 'none'
      : 'transform 0.2s ease'};
  }
`;

const ImageMask = styled.div`
  width: 200%;
  margin: -50%;
  border-radius: 50%;
  overflow: hidden;
  transform: ${({ active }) => active
    ? 'scale3d(1, 1, 1)'
    : 'scale3d(0.01, 0.01, 1)'};
  transition: transform 0.4s cubic-bezier(0.66, 0.35, 0.66, 0.33) 0.2s;
  backface-visibility: hidden;
  perspective: 1000px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  transform: ${({ active }) => active
    ? 'scale3d(0.5, 0.5, 1)'
    : 'scale3d(50, 50, 1)'};
  transition: ${({ active }) => active
    ? 'transform 0.4s cubic-bezier(0, 0.84, 0, 0.98) 0.2s'
    : 'none'};
  backface-visibility: hidden;
  perspective: 1000px;
`;

const ThumbList = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 16px 0;
`;

const ThumbItem = styled.li`
  display: block;
`;

const ThumbButton = styled.button`
  position: relative;
  height: 40px;
  width: 40px;
  background: ${({ url }) => url
    ? `center / contain url('${url}')`
    : 'none'};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  appearance: none;
  transform: scale3d(0.75, 0.75, 1);
  transition: transform 0.2s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 100%;
  }

  &::before {
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 50%;
    filter: grayscale(100%) brightness(110%);
    background: ${({ url }) => url
      ? `center / contain url('${url}')`
      : 'none'};
    opacity: ${({ active }) => active ? 0 : 1};
    transition: opacity 0.4s ease;
  }

  &::after {
    top: 8px;
    left: 20%;
    width: 60%;
    border-bottom: 1px solid #000;
    opacity: 0;
  }

  &:hover {
    transform: scale3d(1, 1, 1);
  }

  &:focus {
    outline: none;

    &::after {
      opacity: ${({ active }) => (active ? 0 : 0.75)};
    }

    &:active::after {
      opacity: 0;
    }
  }
`;

class Home extends PureComponent {
  state = {
    activeIndex: 0
  }

  handleAdvance = () => {
    const { items } = this.props;
    
    this.setState(({ activeIndex }) => ({
      activeIndex: (activeIndex + 1) % items.length
    }));
  }
  
  handleGoToIndex = index => {
    this.setState({
      activeIndex: index
    });
  }
  
  handleAdvanceKeyPress = ({ key }) => {
    if (key === 'Enter') { 
      this.handleAdvance(); 
    }
  }

  render() {
    const { activeIndex } = this.state;
    
    const DATA = [{
      title: 'Paroxysm of Global Death',
      description: 'Emerged into consciousness permanence of the stars citizens of distant epochs hearts of the stars encyclopaedia galactica of brilliant syntheses. Tendrils of gossamer clouds star stuff harvesting star light concept of the number one tendrils of gossamer clouds muse about dream of the mind\'s eye.',
      photo: 'https://source.unsplash.com/vltMzn0jqsA/900x900'
    }, {
      title: 'Pale Blue Dot',
      description: 'With pretty stories for which there\'s little good evidence courage of our questions descended from astronomers globular star cluster invent the universe the only home we\'ve ever known and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
      photo: 'https://source.unsplash.com/8Hjx3GNZYeA/900x900'
    }, {
      title: 'Ash of Stellar Alchemy',
      description: 'Birth from which we spring vastness is bearable only through love the only home we\'ve ever known gathered by gravity ship of the imagination? With pretty stories for which there\'s little good evidence bits of moving fluff stirred by starlight citizens of distant epochs paroxysm of global death the sky calls to us?',
      photo: 'https://source.unsplash.com/rTZW4f02zY8/900x900'
    }, {
      title: 'Star Light Consciousness',
      description: 'Rich in mystery great turbulent clouds hundreds of thousands muse about concept of the number one muse about. Not a sunrise but a galaxyrise citizens of distant epochs Sea of Tranquility extraordinary claims require extraordinary evidence two ghostly white figures in coveralls and helmets are soflty dancing a mote of dust suspended in a sunbeam.',
      photo: 'https://source.unsplash.com/Yj1M5riCKk4/900x900'
    }];

    const items  = DATA;

    return (
      <Carousel>
        <TextList>
          {items.map((e, i) => (
            <TextItem active={activeIndex === i} key={i}>
              <h2>{e.title}</h2>
              <p>{e.description}</p>
            </TextItem>
          ))}
        </TextList>
        <ImageList
          onClick={this.handleAdvance}
          onKeyPress={this.handleAdvanceKeyPress}
          aria-role="button"
          tabIndex="0">
          {items.map((e, i) => (
            <ImageItem active={activeIndex === i} key={i}>
              <ImageMask active={activeIndex === i}>
                <Image
                  active={activeIndex === i}
                  src={e.photo} 
                />
              </ImageMask>
            </ImageItem>
          ))}
        </ImageList>
        <ThumbList>
          {items.map((e, i) => (
            <ThumbItem key={i}>
              <ThumbButton
                active={activeIndex === i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => this.handleGoToIndex(i)}
                url={e.photo}
              />
            </ThumbItem>
          ))}
        </ThumbList>
      </Carousel>
    )
  }
}

export default Home;
// global styles (body etc...)
// injectGlobal`
//   html {
//     box-sizing: border-box;
//   }

//   *, *:before, *:after {
//     box-sizing: inherit;
//   }

//   body {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
//     font-family: 'Montserrat', sans-serif;
//     background: linear-gradient(45deg, #ece9e6, #ffffff);
//   }
// `;

// add mounting point, mount, and render <App />
// const app = document.createElement('div');
// document.body.appendChild(app);
// ReactDOM.render(<App items={DATA} />, app);