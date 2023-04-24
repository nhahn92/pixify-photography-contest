const imageSets = [
    {
      id:1,  
      name: 'Andrew Smith',
      title: 'Innocence',
      images: [
        'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
        'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
      ],
    },
    {
      id:2,
      name: 'Jane Doe',
      title: 'Nature Adventures',
      images: [
        'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
        'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
      ],
    },
    {
      id:3,
      name: 'Irna Tawsen',
      title: 'Faces of the World',
      images: [
        'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
        'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ],
    },
    {
      id:4,
      name: 'Mark Dale',
      title: 'Wild Animals',
      images: [
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
        'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
        'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ]
    }
  ];

// [Submissions Page] Creates new elements using object details to populate #images-container div
const imagesContainer = document.querySelector("#images-container");
const displaySubmissions = (images) => {
  const allImages = images.map(item => {
    return `<a class="image-submission" href="details.html?id=${item.id}">
    <img src=${item.images[0]} alt=${item.title} class="submission-image" />
      <div class="submission-details-container">
        <p>${item.title} - ${item.name}</p>
        <p class="see-more">see more</p>
      </div>
    </a>`;
  })
  // Adds new elements to the container and removes commas from array
  imagesContainer.innerHTML = allImages.join("");
}

// [Submissions Page] Populates #images-container div with image objects on page load
window.onload = function() {
    displaySubmissions(imageSets);
}

// [Submissions, About Us & Details Pages] Dark Mode/Light Mode Toggle
const themeButton = document.querySelector("#theme-button");
const toggleTheme = () => {
  const body = document.querySelector("body");
  const heading1 = document.querySelector("h1");
  const paragraph = document.querySelectorAll("p");
  const aboutUsSubmitButton = document.querySelector("#about-us-submit-button");

  if (body.style.backgroundColor === "var(--dark-blue)") {
    aboutUsSubmitButton.style.border = "none";
    body.style.backgroundColor = "var(--white)";
    heading1.style.color = "var(--black)";
    themeButton.innerHTML = "Dark Mode";
    // Loops through the collection "paragraph" to turn all nodes black for Light Mode
    for (let i = 0; i < paragraph.length; i++) {
      paragraph[i].style.color = "var(--black)";
    }
  } else {
    aboutUsSubmitButton.style.border = "2px solid var(--cyan)";
    body.style.backgroundColor = "var(--dark-blue)"
    heading1.style.color = "var(--white)";
    themeButton.innerHTML = "Light Mode";
    // Loops through the collection "paragraph" to turn all nodes white for Dark Mode
    for (let i = 0; i < paragraph.length; i++) {
      paragraph[i].style.color = "var(--white)";
    }
  }
}
// Adds the Dark Mode/Light Mode toggle (event handler) to the Dark Mode button
themeButton.onclick = toggleTheme;

// [Submissions Page] Adds new submissions to #images-container div from entered values
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener ("click", (e) => {
  // Prevents the form's default function of refreshing the page
  e.preventDefault();

  // Gets entered values from the form
  const name = document.querySelector("input[name='name']").value;
  const title = document.querySelector("input[name='title']").value;
  const imageUrlOne = document.querySelector("input[name='imageUrlOne']").value;
  const imageUrlTwo = document.querySelector("input[name='imageUrlTwo']").value;
  const imageUrlThree = document.querySelector("input[name='imageUrlThree']").value;
  const imageUrlFour = document.querySelector("input[name='imageUrlFour']").value;
  const imageUrlFive = document.querySelector("input[name='imageUrlFive']").value;

  // Creates a filtered array of entered URL values, excluding empty fields
  const imageUrlArray = [];
  [imageUrlOne, imageUrlTwo, imageUrlThree, imageUrlFour, imageUrlFive].filter(item => {
    if (item != "") {
      imageUrlArray.push(item);
    }
  });
  
  // Creates a new "a" element from the form values and filtered URLs
  let newImageId = 5;
  const createNewSubmission = array => {
    // Loops through array to add a class and href attribute
    for (let i = 0; i < array.length; i++) {
      const newSubmission = document.createElement("a");
      newSubmission.classList.add("submission-image");
      newSubmission.href = `details.html?id=${newImageId}`;
      // Increments href Id each loop
      newImageId += 1;

      // Adds the following HTML to each new "a" element
      newSubmission.innerHTML = `<img src=${array[i]} alt=${title} class="submission-image" />
        <div class="submission-details-container">
          <p>${title} - ${name}</p>
          <p class="see-more">see more</p>
        </div>`;
      // Appends the new "a" element to the existing #images-container div
      imagesContainer.appendChild(newSubmission);
    }
  }
  createNewSubmission(imageUrlArray);

  // Resets all form inputs
  document.querySelector("input[name='name']").value = "";
  document.querySelector("input[name='title']").value = "";
  document.querySelector("input[name='imageUrlOne']").value = "";
  document.querySelector("input[name='imageUrlTwo']").value = "";
  document.querySelector("input[name='imageUrlThree']").value = "";
  document.querySelector("input[name='imageUrlFour']").value = "";
  document.querySelector("input[name='imageUrlFive']").value = "";
})