import { useNumber } from '../../hooks/useNumber';
import './index.css';

export const Home = (): JSX.Element => {
  const [count, setCount] = useNumber(20);

  return (
    <div>
      <h1>Hello world</h1>

      <h2>{count}</h2>

      <button type="button" onClick={() => setCount((prevState) => ++prevState)} >Counter</button>
    </div>
  );
};
