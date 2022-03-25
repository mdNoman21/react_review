import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';



console.log(people.length);
const Review = () => {

 const [index, setIndex] = useState(0);
 const {image,job,name,text} = people[index];
 const checkNumber = (number) => {
  if (number > people.length - 1) {
    return 0;
  }
  if (number < 0) {
    return people.length - 1;
  }
  return number;
};
const nextPerson = () => {
  setIndex((index) => {
    let newIndex = index + 1;
    return checkNumber(newIndex);
  });
};
const prevPerson = () => {
  setIndex((index) => {
    let newIndex = index - 1;
    return checkNumber(newIndex);
  });
};
 const randomPerson = () => {
  let randomNumber = Math.floor(Math.random() *people.length);
  if(randomNumber === index){
    randomNumber = index+1;
  }
  setIndex(checkNumber(randomNumber));
  }
// console.log(randomNumber);
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name}></img>
        <span>
        <span class="quote-icon">{<FaQuoteRight />}</span>
        </span>
      </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button onClick={nextPerson} className="prev-btn">{<FaChevronLeft />}</button>
          <button onClick={prevPerson}className="next-btn">{<FaChevronRight />}</button>
        </div>
        <button onClick={randomPerson}className="random-btn">Surprise me</button>

    </article>
  )
  
}


export default Review;
