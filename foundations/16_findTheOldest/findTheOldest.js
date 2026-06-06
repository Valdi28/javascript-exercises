const findTheOldest = function(peopleArr) {

    const peopleSortedByAge = peopleArr.sort((a, b) => {
        let aAge;
        let bAge;

        if (a.yearOfDeath) {
            aAge = a.yearOfDeath - a.yearOfBirth
        } else {
            aAge = new Date().getFullYear() - a.yearOfBirth
            console.log(aAge);
            
        }

        if (b.yearOfDeath) {
            bAge = b.yearOfDeath - b.yearOfBirth
        } else {
            bAge = new Date().getFullYear() - b.yearOfBirth
            
        }

        return (bAge - aAge)
    })

    return peopleSortedByAge[0]
};


// Do not edit below this line
module.exports = findTheOldest;
