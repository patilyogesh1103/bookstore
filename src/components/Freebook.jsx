import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
// react-slick is imported and these are its files
import Card from './Card';
import { useState,useEffect } from 'react';

function Freebook(){
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log("API Response:", res.data);
        setBook(res.data.filter((data) => data.category === 'Free'));  // Ensure setBook is in scope
      } catch (error) {
        console.log("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  // console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 py-10'>
      <div>
      <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>A room without books is like a body without a soul. A book is a dream that you
         hold in your hand. So reading books is a very good habit for everyone</p>
      </div>
    <div>
    <Slider {...settings}>
        {book.map((item)=>(  //item is a props pass to it
            <Card item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook