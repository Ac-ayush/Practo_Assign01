
const data = [
    { image: 'https://www.shutterstock.com/image-photo/two-mature-smiling-doctors-having-600nw-1647340636.jpg', title: 'Card 1', description: 'Description for Card 1.' },
    { image: 'https://www.shutterstock.com/image-photo/two-mature-smiling-doctors-having-600nw-1647340636.jpg', title: 'Card 2', description: 'Description for Card 2.' },
    { image: 'https://www.shutterstock.com/image-photo/two-mature-smiling-doctors-having-600nw-1647340636.jpg', title: 'Card 3', description: 'Description for Card 3.' },
    { image: 'https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-during-daily-checkup-standing-white-background_1258-107867.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705276800&semt=sph', title: 'Card 4', description: 'Description for Card 3.' },
    { image: 'https://www.shutterstock.com/image-photo/two-mature-smiling-doctors-having-600nw-1647340636.jpg', title: 'Card 5', description: 'Description for Card 3.' },
    { image: 'https://www.shutterstock.com/image-photo/two-mature-smiling-doctors-having-600nw-1647340636.jpg', title: 'Card 6', description: 'Description for Card 3.' },
    { image: 'https://www.shutterstock.com/image-photo/two-mature-smiling-doctors-having-600nw-1647340636.jpg', title: 'Card 7', description: 'Description for Card 3.' },
    { image: 'https://www.shutterstock.com/image-photo/two-mature-smiling-doctors-having-600nw-1647340636.jpg', title: 'Card 8', description: 'Description for Card 3.' },
    { image: 'https://www.shutterstock.com/image-photo/two-mature-smiling-doctors-having-600nw-1647340636.jpg', title: 'Card 9', description: 'Description for Card 3.' }

];


const cardContainer = document.getElementById('cardContainer');


data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = `Image for ${item.title}`;

    const title = document.createElement('h2');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;

    const imgContainer = document.createElement('div');
    imgContainer.className = 'imgContainer';
    imgContainer.appendChild(image)


    card.appendChild(imgContainer);
    card.appendChild(title);
    card.appendChild(description);


    cardContainer.appendChild(card);
});

console.log(data);