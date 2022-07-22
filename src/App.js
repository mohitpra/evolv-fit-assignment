import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import UserNutrition from './components/UserNutrition';
import UserWorkout from './components/UserWorkout';
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/mohityadav@gmail.com/nutrition"
            element={<UserNutrition />}
          />
          <Route
            path="/mohityadav@gmail.com/workout"
            element={<UserWorkout />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
