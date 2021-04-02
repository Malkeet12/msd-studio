import React from "react";
import boom from './sounds/boom.wav';
import clap from './sounds/clap.wav';
import hihat from './sounds/hihat.wav';
import kick from './sounds/kick.wav';
import openhat from './sounds/openhat.wav';
import ride from './sounds/ride.wav';
import snare from './sounds/snare.wav';
import tink from './sounds/tink.wav';
import tom from './sounds/tom.wav';


import "./index.css";

class DrumKit extends React.Component {
  componentDidMount() {
    const keys = document.querySelectorAll(".keys");
    keys.forEach((key) =>
      key.addEventListener("transitionend", this.removeTransition)
    );

    window.addEventListener("keydown", (event) => this.playSound(event.keyCode));
  }
  playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key='${keyCode}']`);
    if (!audio) return
    const key = document.querySelector(`.key[data-key='${keyCode}']`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }

  playSoundOnTouch = (event) => {
    const keyCode = event.target.parentElement.getAttribute('data-key')
    this.playSound(keyCode)
  }
  removeTransition(e) {
    if (e.propertyName !== "transform") return; // skipping extra transitions
    e.target.classList.remove("playing");
  }
  render() {
    return (
      <div className="drum-kit">
        <div className="keys">
          <div data-key="65" onClick={this.playSoundOnTouch} className="key">
            <kbd>A</kbd>
            <span className="sound">clap</span>
          </div>
          <div data-key="83" onClick={this.playSoundOnTouch} className="key">
            <kbd>S</kbd>
            <span className="sound">hihat</span>
          </div>
          <div data-key="68" onClick={this.playSoundOnTouch} className="key">
            <kbd>D</kbd>
            <span className="sound">kick</span>
          </div>
          <div data-key="70" onClick={this.playSoundOnTouch} className="key">
            <kbd>F</kbd>
            <span className="sound">openhat</span>
          </div>
          <div data-key="71" onClick={this.playSoundOnTouch} className="key">
            <kbd>G</kbd>
            <span className="sound">boom</span>
          </div>
          <div data-key="72" onClick={this.playSoundOnTouch} className="key">
            <kbd>H</kbd>
            <span className="sound">ride</span>
          </div>
          <div data-key="74" onClick={this.playSoundOnTouch} className="key">
            <kbd>J</kbd>
            <span className="sound">snare</span>
          </div>
          <div data-key="75" onClick={this.playSoundOnTouch} className="key">
            <kbd>K</kbd>
            <span className="sound">tom</span>
          </div>
          <div data-key="76" onClick={this.playSoundOnTouch} className="key">
            <kbd>L</kbd>
            <span className="sound">tink</span>
          </div>
        </div>

        <audio data-key="65" src={clap}></audio>
        <audio data-key="83" src={hihat}></audio>
        <audio data-key="68" src={kick}></audio>
        <audio data-key="70" src={openhat}></audio>
        <audio data-key="71" src={boom}></audio>
        <audio data-key="72" src={ride}></audio>
        <audio data-key="74" src={snare}></audio>
        <audio data-key="75" src={tom}></audio>
        <audio data-key="76" src={tink}></audio>
      </div>
    );
  }
}
export default DrumKit;
