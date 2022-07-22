import React, { useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const styles = {
  stepsContainer: 'flex items-center justify-center lg:justify-start',
  progressBar: 'mr-2 items-center h-[80px] w-[80px]',
  stepsCount:
    'flex items-center justify-center flex-col text-white ml-0 mr-2 h-[85px] w-[40px]',
  button:
    'flex bg-black px-3 py-1 rounded-xl justify-center items-center h-[20px]',
};

function Steps({ step }) {
  const [steps, setSteps] = useState(step);

  const handleIncrement = () => {
    setSteps((prevState) => prevState + 0.5);
  };

  const handleDecrement = () => {
    setSteps((prev) => (prev === 0 ? 0 : prev - 0.5));
  };

  return (
    <div className={styles.stepsContainer}>
      <div className={styles.progressBar}>
        <CircularProgressbarWithChildren value={66}>
          <div className="flex flex-col items-center text-white">
            <strong>2547</strong>
            <span className="text-gray-400 text-xs">walked</span>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className={styles.stepsCount}>
        <div className={styles.button} onClick={handleIncrement}>
          <button>+</button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-xl mb-0 h-[20px]">{steps}k</span>
          <span className="text-xs text-gray-400 mt-0">target</span>
        </div>
        <div className={styles.button} onClick={handleDecrement}>
          <button>-</button>
        </div>
      </div>
    </div>
  );
}

export default Steps;
