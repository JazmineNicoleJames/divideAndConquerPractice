
function findRotatedIndex(arr, int) {
    let num = find(arr)
    console.log(num)
    if(num > 0 && int >= arr[0] && int <= arr[num -1]) {
        return binarySearch(arr, int, 0, find -1)
    } else {
        return binarySearch(arr, int, find, arr.length-1)
    }
}

function binarySearch(arr, int, low, high) {
    console.log(arr)
    if(arr.length === 0) return -1
    let middleIdx = Math.floor((low + high) / 2);
    console.log(middleIdx)

    if(arr[middleIdx] === int) {
        return middleIdx;
    } else if(int < arr[middleIdx]) {
        high = middleIdx -1
    } else {
        low = middleIdx +1
    }
    return -1
}

function find(array) {
    let low = 0;
    let high = array.length -1;
    let middleIdx = Math.floor((low + high) / 2);
    console.log(array[middleIdx])
    if(array[middleIdx] > array[middleIdx +1]) {
        console.log('MIDDLE IDX GREATER THANK NEXT NUM')
        return middleIdx +1
    }else if(array[low] <= array[middleIdx]) {
        low = middleIdx + 1
    } else {
        high = middleIdx -1
    }

}

//findRotatedIndex([3,4,1,7,8,2], 2)


module.exports = findRotatedIndex