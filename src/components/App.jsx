import { HandlerClickPlus } from './JS/button';
import { HandlerClickMinus } from './JS/button';
import { BbuttonStyles } from './JS/botton.Styles';
import { ContainerStyles } from './JS/containerStyles';

export const App = () => {
  return (
    <ContainerStyles>
      <BbuttonStyles
        type="button"
        onClick={() => {
          HandlerClickPlus();
        }}
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
};
