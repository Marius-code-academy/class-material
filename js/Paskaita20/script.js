const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Mano duomenys");
  }, 2000);
});

console.log(promise);

promise
  .then((response) => {
    console.log(response);
    return "Kazkokia informacija is 1 then";
  })
  .then((data) => {
    console.log(data);
    return "Kazkokia informacija is 2 then";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally ivyko");
  });

console.log("Kazkas toliau");

// const getWeatherButton = document.querySelector("button");
const weatherPar = document.querySelector("p");

const weatherPromise = new Promise((resolve, reject) => {
  const data = {
    temperature: 5,
    city: "Kaunas",
    humidity: 80,
  };

  setTimeout(() => {
    if (data.city === "Kaunas") {
      reject("Nerasta duomenu");
    } else {
      resolve(data);
    }
  }, 2000);
});

weatherPromise
  .then((response) => {
    weatherPar.textContent = `
    City: ${response.city}
    Temperature: ${response.temperature}
    Humidity: ${response.humidity}
  `;
  })
  .catch((error) => {
    alert("Atsiprasau, bet Kauno duomenu nezinau");
  });
