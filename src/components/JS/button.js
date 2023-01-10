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
    value: 0,
  };
  // для перезапису значення на інше використовуємо :
  //   handlerIncriment = event => {
  //     this.setState({
  //       value: 222,
  //     });
  // console.log('press buttonPlas');
  // console.log(this);
  // console.log(event);
  //   };

  // для зміни значення на інше від попереднього використовуємо функцію :

  handlerIncriment = event => {
    this.setState(presState => ({
      value: presState.value + 1,
    }));
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

// const Counter = () => (
//   <div className="Counter">
//     <TitleStyles className="Counter_value">0</TitleStyles>

//     <ContainerStyles className="ClickPlus">
//       <ButtonStyles type="button" onClick={HandlerClickPlus}>
