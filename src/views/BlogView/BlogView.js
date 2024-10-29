import React from 'react'
import "./BlogView.css"
import { useParams } from 'react-router-dom'
import blogs from "./../../data.js"


function BlogView() {
  const { id } = useParams();
  const selectedData= blogs.find((blogObject)=>blogObject.id===id);
  return (
         <>
         <h1 className="heading">{selectedData.title}</h1>
         <img
        src={selectedData.image}
        alt="Recipeimg"
        className="recipe-img"
      />

<div className="recepie-timing ">{selectedData.up}</div>
      <h4 className="recipe-description px-5 mt-2 mx-auto ">
        {selectedData.description}
      </h4>
      <h2 className="ingredient-title">
        {selectedData.ingredientTitle}
      </h2>

      <div className="ingredients-container mt-4">
        <ul className="ingredient-list ">
          {selectedData.ingredients.length > 1 ? (
            selectedData.ingredients.map((element, i) => (
              <li className="h6 mx-3 my-2" key={i}>
                {element}
              </li>
            ))
          ) : (
            <p>No element available.</p>
          )}
        </ul>

        <img
          src={selectedData.ingredientImg} alt="Ingredient-img"
          className="ingredient-list rounded-4 my-4  img-thumbnail"
        />
      </div>

      <h2 className="ingredient-title ">
        {" "}
        {selectedData.recipeName} Process
      </h2>

      <div className="recipe bg-secondary text-white p-4 h5 mt-3 mb-4 rounded-3 mx-auto">
        {selectedData.steps.map((element, i) => {
          return (
            <div className="steps m-1">
              <ul>
                <li>{element}</li>
              </ul>
            </div>
          );
        })}
      </div>

         </>
  )
}

export default BlogView