function findFloor(arr, val, low=0, high=arr.length -1) {
  //  let low = 0;
    //let high = arr.length -1
    let middleIdx = Math.floor((low + high) / 2);

    if(arr[middleIdx] === val) {
        return arr[middleIdx]
    }
    if(arr[middleIdx -1] <= val && middleIdx > 0 && val < arr[middleIdx]) {
        console.log(arr[middleIdx])
        return arr[middleIdx -1];
    }
    if(arr[middleIdx] > val){
        return findFloor(arr, val, low, middleIdx -1)
    }

    if(val >= arr.length -1) {
        return arr[high]
    }
    return findFloor(arr, val, middleIdx +1, high)
}

module.exports = findFloor