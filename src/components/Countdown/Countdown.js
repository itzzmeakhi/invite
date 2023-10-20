import React, { Component } from 'react';

import './Countdown.css';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  timer;
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    this.timer = setInterval(
      () => this.getTimeUntil(this.props.deadline),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
      <div className='countdown'>
        <div className='countdown-wrapper'>
          <div className="days">
            <p>{this.leading0(this.state.days)}</p> 
            <span>Days</span>
          </div>
          <div className="hours">
            <p>{this.leading0(this.state.hours)}</p> 
            <span>Hours</span>
          </div>
          <div className="minutes">
            <p>{this.leading0(this.state.minutes)}</p> 
            <span>Mins</span>
          </div>
          <div className="seconds">
            <p>{this.leading0(this.state.seconds)}</p> 
            <span>Secs</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Countdown;
