import React from 'react';

const Controls = ({count, counter}) => {

    const Increment = () => counter(count + 1)
    const Decrement = () => count > 0 && counter(count-1)
    const Double = () => counter(count*2)
    const Reset = () => counter(0)

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex gap-3">
        <button onClick={Increment} className="border p-2 bg-green-500 text-white rounded cursor-pointer">Increment</button>
        <button onClick={Decrement} className="border p-2 bg-red-500 text-white rounded cursor-pointer">Decrement</button>
        <button onClick={Double} className="border p-2 bg-yellow-500 text-white rounded cursor-pointer">Double</button>
        <button onClick={Reset} className="border p-2 bg-blue-500 text-white rounded cursor-pointer">Reset</button>
      </div>
    </div>
  );
};


export default Controls;

