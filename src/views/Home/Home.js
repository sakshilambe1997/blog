import React from 'react'
import blogs from "./../../data.js"
import "./Home.css"
import BlogCard from '../../components/BlogCard/BlogCard.js'
function Home() {
  return (
    <div>
      <h1 className='heading'>Receipe Blogs</h1>
      <div className='blog-cards-contai'>
       {
        blogs.map((blogObject,i)=>{
          const {
            id,
            title,
            up,
            image,
            description,
            time,
            categories,
            recipeName,
            descriptiontitle,
            recipe,
            ingredientTitle,
            ingredients,
            steps,
            ingredientimg,
          } = blogObject;
       

        return(<BlogCard
          id={id}
          key={i}
          title={title}
          up={up}
          image={image}
          description={description}
          time={time}
          categories={categories}
          recipeName={recipeName}
          descriptiontitle={descriptiontitle}
          recipe={recipe}
          ingredientTitle={ingredientTitle}
          ingredients={ingredients}
          steps={steps}
          ingredientimg={ingredientimg}
          
        />
        )
      })
       }

      </div>
    </div>
  )
}

export default Home