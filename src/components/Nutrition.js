import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useNavigate } from 'react-router-dom';

const styles = {
  nutritionContainer:
    'flex items-center justify-center lg:justify-start h-[80px]',
  progressBar: 'mr-2 items-center h-[80px] w-[80px]',
  stepsCount:
    'flex items-center justify-center flex-col text-white ml-0 mr-2 h-[85px] w-[40px]',
  button:
    'flex bg-black px-3 py-1 rounded-xl justify-center items-center h-[20px]',
};

function Nutrition({ userId, nutiAmount }) {
  const navigate = useNavigate();

  const [nutritionAmount, setNutritionAmount] = useState(nutiAmount);

  const handleIncrement = () => {
    setNutritionAmount((prev) => (prev * 10 + 1) / 10);
  };

  const handleDecrement = () => {
    setNutritionAmount((prev) => (prev === 0 ? 0 : (prev * 10 - 1) / 10));
  };

  return (
    <div className={styles.nutritionContainer}>
      <div className={styles.progressBar}>
        <PieChart
          center={[50, 50]}
          data={[
            {
              color: '#E38627',
              title: 'One',
              value: 10,
            },
            {
              color: '#C13C37',
              title: 'Two',
              value: 15,
            },
            {
              color: '#6A2135',
              title: 'Three',
              value: 20,
            },
          ]}
          labelPosition={50}
          lengthAngle={360}
          lineWidth={20}
          paddingAngle={0}
          radius={50}
          rounded
          startAngle={0}
          viewBoxSize={[100, 100]}
        />
      </div>
      <div className={styles.stepsCount}>
        <div className={styles.button} onClick={handleIncrement}>
          <button>+</button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-xl mb-0 h-[20px]">{nutritionAmount}k</span>
          <span className="text-xs text-gray-400 mt-0">target</span>
        </div>
        <div className={styles.button} onClick={handleDecrement}>
          <button>-</button>
        </div>
      </div>
      <div
        className="flex h-2/3 bg-black justify-center items-center rounded-lg"
        onClick={() => navigate(`${userId}/nutrition`)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white hover:cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
}

export default Nutrition;
