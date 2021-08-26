// PUT REQUEST
// Allows you to edit an object
// It's one of the most common methods for retrieving and sending
// data to a server
const data = {
  id: 29,
  name: "The Jucy Lucy",
  restaurant: "Matt's Bar",
  web: "www.mattsbar.com",
  description: "Beef burger with a hot melted surprise inside the patty",
  ingredients: [
    "beef",
    "cheese",
    "diced onion",
    "dill pickle slices",
    "ketchup",
    "mustard"
  ],
  addresses: [
    {
      addressId: 0,
      number: "3500",
      line1: "Cedar Ave S",
      line2: "Minneapolis, MN",
      postcode: "55407",
      country: "USA"
    }
  ]
};

function editData() {
  fetch("https://my-burger-api.herokuapp.com/burgers/29", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

editData();
