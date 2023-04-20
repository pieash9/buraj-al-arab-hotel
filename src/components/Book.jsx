import React from 'react';

function Card({ name, price, personCount, imageUrl }) {
  return (
    <div className="max-w-xs mx-auto my-4 rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">
          Price: {price}
        </p>
        <p className="text-gray-700 text-base mb-2">
          Person Count: {personCount}
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Book Now
        </button>
      </div>
    </div>
  );
}

function Book() {
  const packages = [
    {
      id: 1,
      name: "Basic Package",
      price: "$99",
      personCount: "2-4",
      imageUrl: "https://source.unsplash.com/1600x900/?hotel-room-1"
    },
    {
      id: 2,
      name: "Family Package",
      price: "$199",
      personCount: "5-7",
      imageUrl: "https://source.unsplash.com/1600x900/?hotel-room-2"
    },
    {
      id: 3,
      name: "Luxury Package",
      price: "$299",
      personCount: "2-4",
      imageUrl: "https://source.unsplash.com/1600x900/?hotel-room-3"
    },
    {
      id: 4,
      name: "Honeymoon Package",
      price: "$399",
      personCount: "2",
      imageUrl: "https://source.unsplash.com/1600x900/?hotel-room-4"
    },
    {
      id: 5,
      name: "Adventure Package",
      price: "$499",
      personCount: "1-2",
      imageUrl: "https://source.unsplash.com/1600x900/?hotel-room-5"
    },
    {
      id: 6,
      name: "All-Inclusive Package",
      price: "$599",
      personCount: "2-4",
      imageUrl: "https://source.unsplash.com/1600x900/?hotel-room-6"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {packages.map((pkg) => (
        <Card
          key={pkg.id}
          name={pkg.name}
          price={pkg.price}
          personCount={pkg.personCount}
          imageUrl={pkg.imageUrl}
        />
      ))}
    </div>
  );
}

export default Book;
