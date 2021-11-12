import { useEffect } from 'react';
import { useAsyncEffect } from '../../hooks/useAsyncEffect';
import { useNumber } from '../../hooks/useNumber';
import { useRecordState } from '../../hooks/useRecordState';
import { useToggle } from '../../hooks/useToggle';
import './index.css';

type Payload = {
  name: string;
  age?: number;
  state: string;
};

export const Home = (): JSX.Element => {
  const [count, setCount] = useNumber(20);
  const [isActive, handleToggle] = useToggle(false);

  useAsyncEffect(async () => {
    const newPromise = await new Promise((res) => res('New Promise'));

    console.log(newPromise);
  }, () => {
    console.log('Desmontado')
  }, [count]);

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
