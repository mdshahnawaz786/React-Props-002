import React from 'react'
import './comp.css'

const Comp = (props) => {
  return (
    <>
    <div className='div'>
      <div className="left">
        <div className="one">
            <div className="poster">
    <img className='img' src={props.posterImage} alt="poster_img" />
            </div>
            <div className="movie_details">
                <h3>{props.movieName}</h3>
                <p>{props.releaseDate}</p>
                <div className='duration'>
                    <div className="time">
                        <p>{props.time}</p>
                    </div>
                    <p>{props.type}</p>
                </div>
            </div>
        </div>
        <div className="two">
            <p>{props.description}</p>
        </div>
        <div className="three">
        <div className='icon'>
        <i class="fa-sharp fa-solid fa-share-nodes"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-message"></i>
        </div>
        </div>
      </div>
      <div className="right">
        <img className='muviImg' src={props.movieImg} alt="movie_img" />
      </div>
      </div>
    </>
  )
}

export default Comp
