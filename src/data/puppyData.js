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
    breed: 'Cavalier King Charles Spaniel',
	gender: 'Male',
    dob: '07/06/2024',
	takehome: '08/31/2024',
    images: getPuppyImages('Alex')
  },
  {
    id: 2,
    name: 'Chloe',
    breed: 'Cavalier King Charles Spaniel',
	gender: 'Female',
    dob: '07/06/2024',
	takehome: '08/31/2024',
    images: getPuppyImages('Chloe')
  },
  {
    id: 3,
    name: 'Lily',
    breed: 'Cavalier King Charles Spaniel',
	gender: 'Female',
    dob: '07/06/2024',
	takehome: '08/31/2024',
    images: getPuppyImages('Lily')
  },
  // Add more puppies here
];

export default puppyData;
