fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((post) => {
      const containerDiv = document.createElement("div");
      const bodyPar = document.createElement("p");
      bodyPar.textContent = post.body;

      const titleHeading = document.createElement("h6");
      titleHeading.textContent = post.title;

      containerDiv.append(titleHeading, bodyPar);
      // laikinai uzkomentuota, kad nebutu per daug dalyku ekrane
      // document.body.append(containerDiv);
    });
  });

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Klaida");
    }

    const data = await response.json();
    console.log("Viskas gerai ivyko");
  } catch (error) {
    console.log("nusokome i catch dali");

    console.log(error);
  }
  return "Labas";
}
console.log(await getPosts());

// CRUD
// Create
// Read
// Update
// Delete

const getPostButton = document.querySelector("button");
const containerDiv = document.querySelector("#container");
const postIdInput = document.querySelector("input");

getPostButton.addEventListener("click", async () => {
  try {
    const inputId = postIdInput.value;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${inputId}`);
    if (!response.ok) {
      throw new Error("Ivyko klaida");
    }
    const data = await response.json();
    console.log(data);

    const bodyPar = document.createElement("p");
    bodyPar.textContent = data.body;

    const titleHeading = document.createElement("h5");
    titleHeading.textContent = data.title;
    containerDiv.innerHTML = "";
    containerDiv.append(titleHeading, bodyPar);
  } catch (error) {
    alert("Ivyko klaida, pabandykite veliau");
  }
});
