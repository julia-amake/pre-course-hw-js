let passport = {
  name: "Petr",
  surname: "Petrov",
};

const passportNew = {...passport};
passportNew.name = 'Ivan';

console.log(passport);
console.log(passportNew);