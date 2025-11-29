const maleNames = ["Jan", "Tomáš", "Jakub", "Adam", "David", "Petr", "Ondřej", "Martin", "Lukáš", "Michal", "Karel", "Pavel", "Václav", "Josef", "Marek", "Filip", "Matěj", "Šimon", "Dominik", "Daniel"];
const femaleNames = ["Anna", "Eliška", "Tereza", "Adéla", "Natálie", "Karolína", "Kristýna", "Lucie", "Barbora", "Veronika", "Kateřina", "Marie", "Sofie", "Eva", "Lenka", "Jana", "Petra", "Monika", "Alžběta", "Nikola"];
const maleSurnames = ["Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec", "Marek", "Pospíšil", "Pokorný", "Hájek", "Jelínek", "Král", "Růžička", "Beneš", "Fiala", "Sedlák"];
const femaleSurnames = ["Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová", "Marková", "Pospíšilová", "Pokorná", "Hájková", "Jelínková", "Králová", "Růžičková", "Benešová", "Fialová", "Sedláková"];
const genders = ["male", "female"];
const workloads = [10, 20, 30, 40];

/**
 * Creates a random birthdate for a person aged from <min, max>
 * @param {number} min age
 * @param {number} max age
 * @returns {string} birthdate in ISO format
 */
function createBirthdateFromAgeRange(min, max) {
  let lowerBound, upperBound, birthdate;
  let now = new Date();
  const milliseconds = 365.25 * 24 * 60 * 60 * 1000;

  lowerBound = now - max * milliseconds;
  upperBound = now - min * milliseconds;
  birthdate = lowerBound + Math.random() * (upperBound - lowerBound);

  return new Date(birthdate).toISOString();
}

/**
 * Creates a random list of employees.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */
function createEmployeeList(dtoIn) {
  let dtoOut = [];

  for (let i = 0; i < dtoIn.count; i++) {
    let gender, name, surname, birthdate, workload;

    gender = genders[Math.floor(Math.random() * genders.length)];

    if (gender === "male") {
      name = maleNames[Math.floor(Math.random() * maleNames.length)];
      surname = maleSurnames[Math.floor(Math.random() * maleSurnames.length)];
    }
    else {
      name = femaleNames[Math.floor(Math.random() * femaleNames.length)];
      surname = femaleSurnames[Math.floor(Math.random() * femaleSurnames.length)];
    }

    birthdate = createBirthdateFromAgeRange(dtoIn.age.min, dtoIn.age.max);
    workload = workloads[Math.floor(Math.random() * workloads.length)];

    dtoOut.push({gender, birthdate, name, surname, workload});
  }

  return dtoOut;
}

/**
 * The main function which calls the application. 
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */
export function main(dtoIn) {
  let dtoOut = createEmployeeList(dtoIn);

  return dtoOut;
}
