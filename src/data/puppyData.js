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
    dob: '2024-07-06',
    images: getPuppyImages('Alex'),
	father: 'Charles',
	mother: 'Victoria'
  },
  {
    id: 2,
    name: 'Chloe',
    breed: 'Cavalier King Charles Spaniel',
	gender: 'Female',
    dob: '2024-07-06',
    images: getPuppyImages('Chloe'),
	father: 'Charles',
	mother: 'Victoria'
  },
  {
    id: 3,
    name: 'Lily',
    breed: 'Cavalier King Charles Spaniel',
	gender: 'Female',
    dob: '2024-07-06',
    images: getPuppyImages('Lily'),
	father: 'Charles',
	mother: 'Victoria'
  },
  {
    id: 4,
    name: 'Sophia',
    breed: 'Cavalier King Charles Spaniel',
	gender: 'Female',
    dob: '2024-07-06',
    images: getPuppyImages('Sophia'),
	father: 'Charles',
	mother: 'Victoria'
  },
  {
    id: 3,
    name: 'Theo',
    breed: 'Cavalier King Charles Spaniel',
	gender: 'Male',
    dob: '2024-07-06',
    images: getPuppyImages('Theo'),
	father: 'Charles',
	mother: 'Victoria'
  },
];

export default puppyData;
