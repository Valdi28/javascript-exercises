const removeFromArray = function(array) {
    array = [...array]

    const args = Array.from(arguments)
    args.map((item, index) => {
        if (index === 0) return;

        while (array.includes(item)) {
            const itemToRemoveIndex = array.indexOf(item);
            console.log(array, item, itemToRemoveIndex);
            
            array.splice(itemToRemoveIndex, 1)
        } 
    })

    return array
};

console.log(removeFromArray([1, 2, 2, 3], 2));



// Do not edit below this line
module.exports = removeFromArray;
