import React from 'react';
import steps from '../assets/images/steps.png';
import dumble from '../assets/images/dumble.jpg';
import plate from '../assets/images/plate.png';
import HeaderItem from './HeaderItem';

function Header() {
  return (
    <div className="invisible lg:visible grid grid-cols-11 flex items-center">
      <div className="col-start-5 col-span-2 flex justify-start">
        <HeaderItem image={steps} name="Steps" />
      </div>
      <div className="col-start-7 col-span-2 flex justify-start">
        <HeaderItem image={dumble} name="Workout" />
      </div>
      <div className="col-start-9 col-span-2 flex justify-start">
        <HeaderItem image={plate} name="Nutrition" />
      </div>
    </div>
  );
}

export default Header;
