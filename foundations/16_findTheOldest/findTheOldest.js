const findTheOldest = function(array) {
  function getAge(person){
    let today = new Date()
    let endYear = person.yearOfDeath ? person.yearOfDeath : today.getFullYear()
    return endYear - person.yearOfBirth
  }
  let oldest = array[0];
  for (let i = 0; i < array.length ; i++){
    if (getAge(array[i]) > getAge(oldest)){
        oldest = array[i]
    }
  }
  return oldest;
}
// Do not edit below this line
module.exports = findTheOldest;
