// https://leetcode.com/problems/most-profit-assigning-work/description/

//NEEDS FURTHER OPTIMIZATION

var maxProfitAssignment = function(difficulty, profit, worker) {
    let jobs = [];
    let maxProfit = 0;

    for(let i = 0; i < difficulty.length; i++){
        jobs.push([difficulty[i], profit[i]])
    }

    for(let i = 0; i < worker.length; i++){
        let workerMax = 0;
        for(let j = 0; j < jobs.length; j++){
            if(jobs[j][0] <= worker[i]){
                workerMax = Math.max(workerMax, jobs[j][1]);
            }
        }
        maxProfit += workerMax;
    }

    return maxProfit;    
};