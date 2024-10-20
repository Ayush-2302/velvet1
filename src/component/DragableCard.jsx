import React, { useState } from "react";

// Sample initial items with images, titles, and descriptions
const initialItems = [
  {
    id: "1",
    title: "Mountain Adventure",
    description: "Explore the breathtaking views of the Rocky Mountains.",
    image:
      "https://plus.unsplash.com/premium_photo-1697809257939-4f9d1b878d1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBhZHZlbnR1cmV8ZW58MHx8MHx8fDA%3D",
    bgColor: "bg-blue-500",
  },
  {
    id: "2",
    title: "City Lights",
    description: "Discover the vibrant nightlife of the city.",
    image:
      "https://plus.unsplash.com/premium_photo-1676423883826-574b115cb955?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMGxpZ2h0fGVufDB8fDB8fHww",
    bgColor: "bg-purple-500",
  },
  {
    id: "3",
    title: "Beach Paradise",
    description: "Relax on the pristine beaches of the Caribbean.",
    image:
      "https://plus.unsplash.com/premium_photo-1719955781545-c60219441bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2glMjBwYXJhZGlzZXxlbnwwfHwwfHx8MA%3D%3D",
    bgColor: "bg-yellow-500",
  },
  {
    id: "4",
    title: "Culinary Delights",
    description: "Savor the delicious flavors from around the world.",
    image:
      "https://images.unsplash.com/photo-1708597521669-f7312f312b29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3VsaW5hcnklMjBkZWxpZ2h0fGVufDB8fDB8fHww",
    bgColor: "bg-green-500",
    isBlog: true,
  },
  {
    id: "5",
    title: "Historical Landmarks",
    description: "Visit iconic landmarks that tell the story of our past.",
    image:
      "https://images.unsplash.com/photo-1705861145876-2efd5e0392a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGlzdG9yaWNhbCUyMGxhbmRtYXJrJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
    bgColor: "bg-red-500",
  },
  {
    id: "6",
    title: "Wildlife Safari",
    description:
      "Experience the thrill of seeing wildlife in their natural habitat.",
    image:
      "https://images.unsplash.com/photo-1706779091788-cb57bce32c5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbGRsaWZlJTIwc2FmYXJpfGVufDB8fDB8fHww",
    bgColor: "bg-orange-500",
  },
  {
    id: "7",
    title: "Cultural Festivals",
    description:
      "Join in the celebrations of diverse cultures around the world.",
    image:
      "https://images.unsplash.com/photo-1467307983825-619715426c70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3VsdHVyYWwlMjBmZXJ0aXZhbCUyMGluZGlhfGVufDB8MHwwfHx8MA%3D%3D",
    bgColor: "bg-teal-500",
  },
  {
    id: "8",
    title: "Relaxing Retreats",
    description: "Unwind at serene retreats designed for relaxation.",
    image:
      "https://plus.unsplash.com/premium_photo-1685133856025-c5b8383c92e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmVsYXhpbmclMjBSZXRyZWF0c3xlbnwwfDB8MHx8fDA%3D",
    bgColor: "bg-indigo-500",
  },
  {
    id: "9",
    title: "Adventure Sports",
    description: "Get your adrenaline pumping with thrilling adventure sports.",
    image:
      "https://images.unsplash.com/photo-1611424286271-876b84c07f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnQlMjBjcmlja2V0JTIwaW5kaWF8ZW58MHwwfDB8fHww",
    bgColor: "bg-pink-500",
  },
  {
    id: "10",
    title: "Art and Creativity",
    description: "Explore art and creativity through various mediums.",
    image:
      "https://images.unsplash.com/photo-1501366062246-723b4d3e4eb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydHxlbnwwfDB8MHx8fDA%3D",
    bgColor: "bg-gray-500",
  },
];

const DraggableCard = () => {
  const [items, setItems] = useState(initialItems);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDragOver = (index) => {
    if (draggedItemIndex === index) return;

    const itemsCopy = [...items];
    itemsCopy.splice(draggedItemIndex, 1);
    itemsCopy.splice(index, 0, items[draggedItemIndex]);

    setItems(itemsCopy);
    setDraggedItemIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedItemIndex(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDragEnd={handleDragEnd}
          className={`p-4 rounded-lg shadow-lg cursor-pointer transition-transform ${item.bgColor} text-white hover:scale-105`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-52 object-cover rounded-t-lg"
          />
          <h3 className="font-bold text-lg mt-2">{item.title}</h3>
          <p className="mt-2 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DraggableCard;
