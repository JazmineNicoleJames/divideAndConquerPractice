function findRotationCount(arr) {
    let start = 0;
    let end = arr.length -1;
    let middleIdx = Math.floor((start + end) /2)


    if(arr[start] < arr[end] && arr[end -1] > arr[start + 1]) {
        console.log(arr[start])
        return 0
    }

    if(middleIdx < end && arr[middleIdx +1] < arr[middleIdx]){
        return middleIdx +1
    }

    if(middleIdx > start && arr[middleIdx] < arr[middleIdx -1]){
        return middleIdx;
    }

    if(arr[end] > arr[middleIdx]) {
        return findRotationCount(arr, start, middleIdx -1)
    }
    return findRotationCount(arr, middleIdx +1, end)

}




// findRotationCount([15, 18, 2, 3, 6, 12]) // 2

module.exports = findRotationCount