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
      status: "pending",
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
      status: "pending",
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
      status: "working",
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
      status: "completed",
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
      status: "working",
      age: 28,
    },
  ];

  // for (const user of User) {
  //   console.log(user.name);
  // }

  // User.forEach((element) => {
  //   console.log("for each ", element.name);
  // });

  // const names = [];

  // for (let i = 0; i < User.length; i++) {
  //   names.push(User[i].name);
  // }

  // console.log("names ", names);

  // const age = [];

  // const filterAge = User.filter((e) => {
  //   return e.age > 25;
  // });

  // const newage = filterAge.map((e) => {
  //   age.push({
  //     name: e.name,
  //     age: e.age,
  //   });
  // });
  // console.log("age", age);

  // const trueArray = [];

  // const isTrue = User.filter((e) => {
  //   return e.isActive === true;
  // });

  // const newarr = isTrue.map((e) => {
  //   trueArray.push({
  //     name: e.name,
  //     isActive: e.isActive,
  //   });
  // });

  // console.log(trueArray);

  // names.forEach((e) => {
  //   console.log("names in foreach", e);
  // });

  const filterStatus = [];

  const WorkingFilter = User.filter((e) => {
    return e.status === "working" || e.status === "completed";
  });
  WorkingFilter.forEach((e) => {
    filterStatus.push({
      name: e.name,
      status: e.status,
    });
  });

  console.log(filterStatus);

  for (let i = 0; i < filterStatus.length; i++) {
    console.log("forloop ", filterStatus[i].name);
  }

  return <div>Js</div>;
}

export default Js;
