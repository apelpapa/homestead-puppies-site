const getPuppyImages = (name) => {
  const images = [];
  for (let i = 1; i <= 5; i++) { // Assuming a maximum of 5 images per puppy
    const imagePath = `/images/puppies/${name}${i}.jpg`;
    console.log(`Checking path: ${imagePath}`);
    images.push(imagePath);
  }
  return images;
};

const puppyData = [
  {
    id: 1,
    name: 'Alex',
    breed: 'Golden Retriever',
    age: '8 weeks',
    images: getPuppyImages('Alex')
  },
  {
    id: 2,
    name: 'Chloe',
    breed: 'Cavalier King Charles Spaniel',
    age: '10 weeks',
    images: getPuppyImages('Chloe')
  },
  {
    id: 3,
    name: 'Lily',
    breed: 'Shih Tzu',
    age: '9 weeks',
    images: getPuppyImages('Lily')
  },
  // Add more puppies here
];

export default puppyData;
