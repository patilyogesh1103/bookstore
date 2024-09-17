import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footeer from './Footeer';
import axios from 'axios';
import Card from './Card';
import { Link } from 'react-router-dom';

function Courses() {  // Removed the unused `item` prop
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log("API Response:", res.data);
        setBook(res.data);  // Ensure setBook is in scope
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

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
        <div className='mt-28 text-center items-center justify-center'>
          <h1 className='text-2xl md:text-4xl'> We're delighted to have you{" "}
            <span className='text-pink-500'> Here! :)</span>
          </h1>
          <p className='mt-12'>
            Books are the gateways to endless worlds, each page a portal to new adventures, wisdom, and dreams. They transform minds, nurture souls, and ignite imaginations. As Stephen King said, "Books are a uniquely portable magic." Dive into the pages and let every story leave an indelible mark on your heart.
          </p>
          <Link to="/">
            <button className='mt-6 text-white text-xl bg-pink-500 px-3 py-2 rounded-md hover:bg-pink-700 duration-200'>
              Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {book.length > 0 ? (
            book.map((item) => (
              <Card key={item.id} item={item} />
            ))
          ) : (
            <p>No books available.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Courses;

// cors policy-: when our frontend and backend both are exexuting on diff ports then 
// according to cors policy it will run so, to bind and execute them we are have to
// install cors at backend in index.js file