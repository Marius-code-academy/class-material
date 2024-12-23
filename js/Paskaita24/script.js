const button = document.querySelector("button");

button.addEventListener("click", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Kazkoks posto title",
      body: "Didelis posto body",
      userId: 5,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
});

const updateButton = document.querySelector("#update-button");

updateButton.addEventListener("click", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      title: "Naujas title",
      body: "Naujas body",
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
});

const deleteButton = document.querySelector("#delete-button");

deleteButton.addEventListener("click", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/7", {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
});

const postForm = document.querySelector("form");
const titleInput = document.querySelector("#title-input");
const bodyInput = document.querySelector("#body-input");

postForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("Form submitted");

  const body = {
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1,
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  getAndDisplayPosts();
});

const postContainer = document.querySelector("#post-container");

async function getAndDisplayPosts() {
  const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await postsResponse.json();

  const postElements = posts.map((post) => {
    const div = document.createElement("div");

    const titleHeading = document.createElement("h5");
    titleHeading.textContent = post.title;

    const postBody = document.createElement("p");
    postBody.textContent = post.body;

    div.append(titleHeading, postBody);
    return div;
  });

  postContainer.innerHTML = "";
  postContainer.append(...postElements);
}

getAndDisplayPosts();
