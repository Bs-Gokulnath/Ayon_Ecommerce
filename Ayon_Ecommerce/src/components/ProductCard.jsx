import React from 'react';

const ProductCard = ({ record, onClick }) => {
  if (!record) return null;

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img 
          src={record.image1} 
          alt={record.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{record.name}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">₹{record.newprice}</span>
          {record.oldprice && (
            <>
              <span className="text-gray-400 line-through text-sm">₹{record.oldprice}</span>
              <span className="text-green-500 text-sm">
                ({Math.round(((parseInt(record.oldprice) - parseInt(record.newprice)) / parseInt(record.oldprice)) * 100)}% OFF)
              </span>
            </>
          )}
        </div>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{record.desc}</p>
      </div>
    </div>
  );
};

export default ProductCard; 