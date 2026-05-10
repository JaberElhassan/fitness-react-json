import React from "react";
import jsonData from "../DB/exerciseData.json";
import './Card.css'



export default function Card({ searchQuery }) {

  // Filter the exercises based on search query
  const filteredExercises = jsonData.filter((exercise) =>
    exercise.exercise.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedExercises = filteredExercises.sort((a, b) =>
    a.exercise.localeCompare(b.exercise)
  );

  // if (sortedExercises.length === 0) {
  //   return
  //   <div className= "sortedExerciseZero">
  //     <p className="noExerciseFound">No exercises found for the search query. Try another search term!</p>
  //   </div>;
  // }

  return (
    <div className="cardContainer">
      {sortedExercises.map((exercise, index) => (
        <div key={index}>
          <div className="card">
            <div className="cardImage">
              <img
                loading="lazy"
                src={require(`../../assets/exercises/${exercise.image}.gif`)} 
                alt={exercise.exercise}
              />
            </div>

            <div className="details">
              <div className="exerciseName">
                {exercise.exercise}
              </div>

              <div className="detailsInfo">
                  {exercise.instructions}
              </div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
