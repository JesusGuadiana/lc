var countCompleteDayPairs = function(hours) {
    //Create a frequency Map to map the amount of complements with have;
    const frequencyMap = {};
    //Counter to count how many pairs that gives us complete Days
    let count = 0;
    //Loop through hour array
    for(let i = 0; i < hours.length; i++){
        //We need to get the reminder to get the complement;
        const reminder = hours[i] % 24;
        //Here is the tricy part....
        let complement = 0;
        if(reminder === 0) {
            complement = 0;
        } else {
            complement = 24 - reminder;
        }

        if(frequencyMap[complement]){
            count += frequencyMap[complement]
        }
        
        if(frequencyMap[reminder] === undefined){
            frequencyMap[reminder] = 1;
        } else {
            frequencyMap[reminder]++;
        }

    }

    return count;    
};