import React from 'react';
import Review from './Review';
import people from './data';

function App() {
  return (<main>
    <section className="container">
    <div className="title">
      <h2>Our Reviews</h2>
      <div className="underline">
          
      </div>
    </div>
    <Review 
      people={people}
    />

    </section>
  </main>);
}

export default App;
