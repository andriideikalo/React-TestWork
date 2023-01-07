import { HandlerClickPlus } from './JS/button';
import { HandlerClickMinus } from './JS/button';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <button
        type="button"
        style={{
          width: '100px',
          height: '100px',
          fontSize: '20px',
          fontWeight: '800',
        }}
        onClick={() => {
          HandlerClickPlus();
        }}
      >
        + Click
      </button>
      <button
        type="button"
        style={{
          width: '100px',
          height: '100px',
          fontSize: '20px',
          fontWeight: '800',
        }}
        onClick={() => {
          HandlerClickMinus();
        }}
      >
        - Click
      </button>
    </div>
  );
};
