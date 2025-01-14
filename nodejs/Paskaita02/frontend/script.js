const response = await fetch("http://localhost:3000/about");
const data = await response.json();

console.log(data);
