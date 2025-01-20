import React from 'react';
import { useSelector } from 'react-redux';
import { increment, decrement } from './store';
import { useAppDispatch } from './store';

const App: React.FC = () => {
  const count = useSelector((state: any) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
    </div>
  );
};

export default App;
