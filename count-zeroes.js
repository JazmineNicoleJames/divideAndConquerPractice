// countZeroes([1,1,0,0,0,0,0,0,0])

function countZeroes(arr) {
    let num = findNum(arr);

    console.log(num)
    return arr.length - num
}


function findNum(arr, leftIdx = 0, rightIdx = arr.length -1){
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    console.log(middleIdx)
    if(rightIdx >= leftIdx) {
        if(middleIdx === 0 || arr[middleIdx -1] === 1 && arr[middleIdx] === 0) {
            return middleIdx;
        } else if(arr[middleIdx] === 1) {
            return findNum(arr, middleIdx +1, rightIdx)
        }
        return findNum(arr, leftIdx, middleIdx -1)
    }
    return 0
}





module.exports = countZeroes