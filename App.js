/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';



export default class App extends React.Component{
  constructor(props) {
    super(props);
  }
  
  startLottieAnim(anim) {
    this.lottieAnim = anim;
    if (anim) {
      this.lottieAnim.play();
    }
  }

  render() {
    return (
      <LottieView loop autoPlay source={require('./assets/anim.json')} ref={c => this.startLottieAnim(c)}  />
    );
  }
}

