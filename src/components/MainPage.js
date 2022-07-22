import React from 'react';
import Candidate from './Candidate';
import Header from './Header';
function MainPage() {
  return (
    <div className="bg-black h-screen">
      <Header />
      <Candidate
        name="Mohit Yadav"
        userId="mohityadav@gmail.com"
        steps={4}
        nutrition={3}
      />
      <Candidate
        name="Mohit Yadav"
        userId="mohityadav@gmail.com"
        steps={4}
        nutrition={3}
      />
      <Candidate
        name="Mohit Yadav"
        userId="mohityadav@gmail.com"
        steps={4}
        nutrition={3}
      />
    </div>
  );
}

export default MainPage;
