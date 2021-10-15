import React from "react";

const Rating = ({ value, rated, reviewArray, setRating }) => {
  function updatehover() {
    setRating([false, false, false, false, false]);
    console.log("HoverstateUpdated", rated);
  }
  function star(id) {
    console.log(id);

    reviewArray.forEach((element) => {
      if (element < id) {
        rated[element] = true;
      } else if (element === 0) {
        rated[element] = false;
      } else {
        rated[element] = false;
      }
    });
    setRating(rated);
    console.log(rated, "ratedd");
    // document.getElementById("star-rate").classList.add("text-warning");
  }
  return (
    <span id="star-rate" className="">
      <i
        className="bi bi-star-fill rating"
        onMouseOver={() => star(value)}
        onMouseOut={() => updatehover()}
      ></i>
    </span>
  );
};

export default Rating;
