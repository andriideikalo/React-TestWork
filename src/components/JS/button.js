import React from 'react';

import { HandlerClickPlus } from './HandlerClick';
import { HandlerClickMinus } from './HandlerClick';
import { ButtonStyles } from './botton.Styles';
import { ContainerStyles } from './containerStyles';
import { TitleStyles } from './containerStyles';
// import { render } from '@testing-library/react';

const Counter = () => (
  <div className="Counter">
    <TitleStyles className="Counter_value">0</TitleStyles>

    <ContainerStyles className="ClickPlus">
      <ButtonStyles type="button" onClick={HandlerClickPlus}>
        + Click
      </ButtonStyles>
      <ButtonStyles type="button" onClick={HandlerClickMinus}>
        - Click
      </ButtonStyles>
    </ContainerStyles>
  </div>
);

export default Counter;
