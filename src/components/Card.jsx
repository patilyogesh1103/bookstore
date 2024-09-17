import React from 'react';

function Card({ item }) {
  return (
    <div className='mt-7 my-3 p-3'>
      <div className="card w-92 shadow-xl hover:scale-105 duration-200 bg-white text-black border dark:border-gray-800">
        <figure>
          <img
            src={item.image}  // Dynamically get the image URL
            alt={item.title || "Product Image"}  // Improved alt text
            className="object-cover h-30 w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline cursor-pointer rounded-full py-3 px-3 border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              Buy now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
