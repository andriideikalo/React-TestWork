import React from 'react';

// import { HandlerClickPlus } from './JS/button';
// import { HandlerClickMinus } from './JS/button';
// import { BbuttonStyles } from './JS/botton.Styles';
// import { ContainerStyles } from './JS/containerStyles';
// import { render } from '@testing-library/react';

const Counter = () => (
  <div className="Counter">
    <span className="Counter_value">0</span>

    <div className="ClickPlus">
      <button type="button">+ Click</button>
      <button type="button">- Click</button>
    </div>
  </div>
);

export default Counter;
