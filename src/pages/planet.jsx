import React, { useState } from 'react';

const planets = [
  {
    name: "Mercury",
    size: "4,880 km (diameter)",
    distanceFromSun: "57.91 million km",
    notableFeature: "Smallest planet and closest to the Sun",
    image: "https://media.istockphoto.com/id/1295829498/photo/mercury-elongation-4k-footage.webp?a=1&b=1&s=612x612&w=0&k=20&c=DeHIILpJ-YnXeBFwSwxH34Sne_9j8iZgMdfevvw2ZKg=",
  },
  {
    name: "Venus",
    size: "12,104 km (diameter)",
    distanceFromSun: "108.2 million km",
    notableFeature: "Hottest planet due to thick atmosphere",
    image: "https://media.istockphoto.com/id/1295829494/photo/venus-elongation-4k-footage.webp?a=1&b=1&s=612x612&w=0&k=20&c=77RjdkqHXkE1rfGPWNcHmsM8QMrBPBTOImgX_vlavpY=",
  },
  {
    name: "Earth",
    size: "12,742 km (diameter)",
    distanceFromSun: "149.6 million km",
    notableFeature: "Supports life and has abundant water",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWVyY3VyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Mars",
    size: "6,779 km (diameter)",
    distanceFromSun: "227.9 million km",
    notableFeature: "Known as the Red Planet with evidence of ancient water",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWVyY3VyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Jupiter",
    size: "139,820 km (diameter)",
    distanceFromSun: "778.5 million km",
    notableFeature: "Largest planet with a giant red storm",
    image: "https://media.istockphoto.com/id/1482783826/photo/artist-view-of-the-jupiter-planet.webp?b=1&s=612x612&w=0&k=20&c=34iDRYKUd67vu_3JriAsDI6c2txUm3TIKMeXe5zXnJI=",
  },
  {
    name: "Saturn",
    size: "116,460 km (diameter)",
    distanceFromSun: "1.434 billion km",
    notableFeature: "Famous for its stunning ring system",
    image: "https://cdn.pixabay.com/photo/2022/07/14/23/19/saturn-7322056_1280.jpg",
  },
  {
    name: "Uranus",
    size: "50,724 km (diameter)",
    distanceFromSun: "2.871 billion km",
    notableFeature: "Rotates on its side with a faint ring system",
    image: "https://cdn.pixabay.com/photo/2012/01/09/10/56/uranus-11625_1280.jpg",
  },
  {
    name: "Neptune",
    size: "49,244 km (diameter)",
    distanceFromSun: "4.495 billion km",
    notableFeature: "Strongest winds in the Solar System",
    image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWVyY3VyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const PlanetsMap = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlanets = planets.filter((planet) =>
    planet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-t from-blue-200 to-purple-300 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for a planet..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mb-8 bg-white/90 backdrop-blur-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Planets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
          {filteredPlanets.map((planet) => (
            <div
              key={planet.name}
              className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={planet.image}
                alt={planet.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{planet.name}</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Size:</span> {planet.size}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Distance from Sun:</span> {planet.distanceFromSun}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Notable Feature:</span> {planet.notableFeature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanetsMap;