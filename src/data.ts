import { Customer } from "./interface";

export const customers: Customer[] = [
    {
      id: 1,
      firstName: "Kathy",
      lastName: "Barker",
      year: 2016,
      make: "Ford",
      model: "Focus",
      service: [
        {
          id: 1,
          code: 1001,
          desc: "Oil change",
          date: new Date("January 25, 2019"),
          cost: 20.71,
        },
        {
          id: 2,
          code: 1001,
          desc: "Oil change",
          date: new Date("April 3, 2019"),
          cost: 22.13,
        },
        {
          id: 3,
          code: 1001,
          desc: "Oil change",
          date: new Date("August 5, 2019"),
          cost: 22.13,
        },
        {
          id: 4,
          code: 1009,
          desc: "Brake pad replacement",
          date: new Date("August 5, 2019"),
          cost: 258.41,
        },
      ],
    },
    {
      id: 2,
      firstName: "Ralph",
      lastName: "Benson",
      year: 2014,
      make: "Honda",
      model: "Civic",
      service: [
        {
          id: 5,
          code: 1001,
          desc: "Oil change",
          date: new Date("March 13, 2019"),
          cost: 36.42,
        },
        {
          id: 6,
          code: 1003,
          desc: "A/C recharge",
          date: new Date("March 13, 2019"),
          cost: 206.14,
        },
      ],
    },
    {
      id: 3,
      firstName: "Bob",
      lastName: "Douglas",
      year: 2016,
      make: "Ford",
      model: "F-150",
      service: [
        {
          id: 7,
          code: 1005,
          desc: "Tire patch (driver's side front)",
          date: new Date("May 12, 2020"),
          cost: 0,
        },
      ],
    },
    {
      id: 4,
      firstName: "Omar",
      lastName: "Adams",
      year: 2017,
      make: "Kia",
      model: "Sorento",
      service: [
        {
          id: 8,
          code: 1006,
          desc: "Rough shift from 2nd to 3rd",
          date: new Date("May 5, 2020"),
          cost: 223.43,
        },
      ],
    },
  ];
