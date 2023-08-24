let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk",
  },
};

let passport2 = { ...passportMarried, address: { ...passportMarried.address } };
passport2.married = true;

console.log(passportMarried);
console.log(passport2);
