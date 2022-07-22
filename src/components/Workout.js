import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  workoutContainer:
    'flex text-white justify-center items-center lg:justify-start h-[80px]',
  workoutDate: 'flex flex-col items-center justify-center mr-3',
};

function Workout({ userId }) {
  const navigate = useNavigate();

  return (
    <div className={styles.workoutContainer}>
      <div className={styles.workoutDate}>
        <div className="flex mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
          <span>15 Oct</span>
        </div>
        <div className=" flex mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>22 Oct</span>
        </div>
      </div>
      <div
        className="flex h-2/3 bg-black justify-center items-center rounded-lg"
        onClick={() => navigate(`${userId}/workout`)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white  hover:cursor-pointer"
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

export default Workout;
