import { useEventListener } from '../../hooks/useEventListener';
import { useNumber } from '../../hooks/useNumber';
import { useToggle } from '../../hooks/useToggle';
import './index.css';

export const Home = (): JSX.Element => {
  const [count, setCount] = useNumber(20);
  const [isActive, handleToggle] = useToggle(false);

  useEventListener(
    'keydown',
    (event) => {
      if (event.key === 'Enter') {
        console.log('Enter was pressed');
      }
    },
    {
      target: window,
    }
  );

  return (
    <div>
      <h1>Hello world</h1>

      <h2>{count}</h2>

      <button
        type="button"
        onClick={() => {
          setCount((prevState) => ++prevState);
          handleToggle();
        }}
      >
        Counter
      </button>
    </div>
  );
};
