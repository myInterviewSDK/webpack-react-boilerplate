import React, { PureComponent } from 'react';

class MyInterviewWidget extends PureComponent {
  componentWillMount() {
    const script = document.createElement('script');
    script.src = 'https://embed.myinterview.com/widget/2.23.0/widget.js';
    document.body.appendChild(script);
    script.onload = () => {
      // eslint-disable-next-line
      myInterviewWidget({
        container: '#mycustom-container', // querySelector to the element that will contain the widget
        config: {
          apiKey: 'TCeni10RVWO0jEJHN3uF',
        },
      });
    };
  }

  render() {
    return (
      <form>
        <div id="mycustom-container" />
      </form>
    );
  }
}

export default MyInterviewWidget;
