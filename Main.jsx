import React, {useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img1.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const  Data=[
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAAX',
    fees: '700$',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi optio debitis cupiditate quasi harum omnis odio hic, nemo provident aspernatur mollitia molestias ex fugit, impedit ad deleniti possimus at.'
  },

  {
    id:2,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAAX',
    fees: '700$',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi optio debitis cupiditate quasi harum omnis odio hic, nemo provident aspernatur mollitia molestias ex fugit, impedit ad deleniti possimus at.'
  },

  {
    id:3,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAAX',
    fees: '700$',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi optio debitis cupiditate quasi harum omnis odio hic, nemo provident aspernatur mollitia molestias ex fugit, impedit ad deleniti possimus at.'
  },


]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3>
          Most visited destinations
        </h3>
      </div>
      <div className='secContent grid'>
            {
              Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                return(
                  <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className='imageDiv'>
                    <img src={imgSrc} alt={destTitle}/>
                  </div>
                  
                  <div className='cardInfo'>
                    <h4 className='destTitle'>{destTitle}</h4>
                    <span className='continent flex'>
                      <HiOutlineLocationMarker class='icon'/>
                      <span className="name">{location}</span>
                    </span>

                      <div className='fees flex'>
                        <div className='grade'>
                          <span>{grade}<small>+1</small></span>
                        </div>
                        <div className='price'>
                          <h5>{fees}</h5>
                        </div>
                      </div>
                      
                      <div className='desc'>
                        <p>{description}</p>
                      </div>

                      <button className='btn flex'>
                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                      </button>
                  </div>

                  </div>
                )
              })
            }
      </div>
    </section>
  )
}

export default Main