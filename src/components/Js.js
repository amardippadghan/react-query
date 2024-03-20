import React from "react";

function Js() {
  const User = [
    {
      name: "Alice",
      ishave: {
        address: "amardip padghan ",
        number: "7517059705",
      },
      id: 1,
      isActive: true,
      age: 25,
    },
    {
      name: "Bob",
      ishave: {
        address: "amardip padghan ",
        number: "7517059705",
      },
      id: 2,
      isActive: false,
      age: 30,
    },
    {
      name: "Charlie",
      ishave: {
        address: "amardip padghan ",
        number: "7517059705",
      },
      id: 3,
      isActive: true,
      age: 22,
    },
    {
      name: "David",
      ishave: {
        address: "amardip padghan ",
        number: "7517059705",
      },
      id: 4,
      isActive: false,
      age: 35,
    },
    {
      name: "Eve",
      ishave: {
        address: "amardip padghan ",
        number: "7517059705",
      },
      id: 5,
      isActive: true,
      age: 28,
    },
  ];

  for (const user of User) {
    console.log(user.name);
  }

  User.forEach((element) => {
    console.log("for each ", element.name);
  });

  for (let i = 0; i < User.length; i++) {
    console.log("for loop ", User[i].name);
    console.log("inner loop ", User[i].ishave.address);
  }

  return <div>Js</div>;
}

export default Js;
