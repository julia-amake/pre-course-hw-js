let passport = {
  name: "Petr",
  surname: "Petrov",
};

const passportNew = {...passport};
passport2.name = 'Ivan';

console.log(passport);
console.log(passportNew);