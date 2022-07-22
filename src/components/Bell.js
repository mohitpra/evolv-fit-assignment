import React from 'react';
import bell from '../assets/images/bell.png';

function Bell() {
  return (
    <div className="invisible lg:visible bg-emerald-300 h-[40px] w-[40px] rounded-lg hover:cursor-pointer">
      <img src={bell} />
    </div>
  );
}

export default Bell;
