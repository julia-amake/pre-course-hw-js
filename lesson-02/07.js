let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk",
  },
};

let passportMarriedCopy = { ...passport, address: { ...passport.address } };
passportMarriedCopy.married = true;

console.log(passportMarried);
console.log(passportMarriedCopy);
