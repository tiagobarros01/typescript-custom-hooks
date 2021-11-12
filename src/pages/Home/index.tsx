import { useEffect } from 'react';
import { useDebouncedValue } from '../../hooks/useDebouncedValue';
import { useNumber } from '../../hooks/useNumber';
import { useToggle } from '../../hooks/useToggle';
import './index.css';

export const Home = (): JSX.Element => {
  const [count, setCount] = useNumber(20);
  const [isActive, handleToggle] = useToggle(false);
  const debouncedCount = useDebouncedValue(count);

  useEffect(() => {
    console.log(debouncedCount);
  }, [debouncedCount]);

  console.log(isActive);

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
