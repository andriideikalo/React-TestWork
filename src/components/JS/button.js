import React from 'react';

// import { HandlerClickPlus } from './HandlerClick';
import { HandlerClickMinus } from './HandlerClick';
import { ButtonStyles } from './botton.Styles';
import { ContainerStyles } from './containerStyles';
import { TitleStyles } from './containerStyles';

class Counter extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       value: 5,
  //     };
  //   }
  // в react пишемо без конструктора, просто :
  // він сам потім добавляє конструктор і супер при компіляції

  state = {
    value: 5,
  };

  handlerIncriment = event => {
    this.setState({
      value: this.state.value + 1,
    });
    // console.log('press buttonPlas');
    // console.log(this);
    // console.log(event);
  };
  render() {
    return (
      <div
        className="Counter"
        // onMouseMove={() => {
        //   console.log('222');
        // }}
      >
        <TitleStyles className="Counter_value">{this.state.value}</TitleStyles>

        <ContainerStyles className="ClickPlus">
          <ButtonStyles type="button" onClick={this.handlerIncriment}>
            + Click
          </ButtonStyles>
          <ButtonStyles type="button" onClick={HandlerClickMinus}>
            - Click
          </ButtonStyles>
        </ContainerStyles>
      </div>
    );
  }
}

// const Counter = () => (
//   <div className="Counter">
//     <TitleStyles className="Counter_value">0</TitleStyles>

//     <ContainerStyles className="ClickPlus">
//       <ButtonStyles type="button" onClick={HandlerClickPlus}>
//         + Click
//       </ButtonStyles>
//       <ButtonStyles type="button" onClick={HandlerClickMinus}>
//         - Click
//       </ButtonStyles>
//     </ContainerStyles>
//   </div>
// );

export default Counter;
