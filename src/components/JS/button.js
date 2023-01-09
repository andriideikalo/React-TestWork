import React from 'react';

// import { HandlerClickPlus } from './JS/button';
import { HandlerClickMinus } from './JS/button';
import { BbuttonStyles } from './JS/botton.Styles';
import { ContainerStyles } from './JS/containerStyles';
// import { render } from '@testing-library/react';

class ClickPlus extends React.Component {
  render() {
    return (
      <ContainerStyles className="ClickPlus">
        <BbuttonStyles
          type="button"
          // onClick={() => {
          // HandlerClickPlus();
          // }}
          onClick={this.classClickPlus}
        >
          + Click
        </BbuttonStyles>
        <BbuttonStyles
          type="button"
          onClick={() => {
            HandlerClickMinus();
          }}
        >
          - Click
        </BbuttonStyles>
      </ContainerStyles>
    );
    // };
  }
}

// export const HandlerClickPlus = () => {
//   console.log('press plus');
// };

// export const HandlerClickMinus = () => {
//   console.log('press minus');
// };
