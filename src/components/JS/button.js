import React from 'react';

// import { HandlerClickPlus } from './JS/button';
// import { HandlerClickMinus } from './JS/button';
import { ButtonStyles } from './botton.Styles';
import { ContainerStyles } from './containerStyles';
import { TitleStyles } from './containerStyles';
// import { render } from '@testing-library/react';

const Counter = () => (
  <div className="Counter">
    <TitleStyles className="Counter_value">0</TitleStyles>

    <ContainerStyles className="ClickPlus">
      <ButtonStyles type="button">+ Click</ButtonStyles>
      <ButtonStyles type="button">- Click</ButtonStyles>
    </ContainerStyles>
  </div>
);

export default Counter;
