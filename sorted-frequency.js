function sortedFrequency(arr, num) {
    let first = findFirst(arr, num);
    let last = findLast(arr, num);
    if( first == -1) return first;
    return last - first + 1;
}

function findFirst(arr, num, low = 0, high = arr.length -1) {
    if(high >= low) {
    let mid = Math.floor((low + high) / 2);

    if(arr[mid] === num) {
        console.log('MIDDLE')
        return mid
    } else if(num > arr[mid]) {
        return findFirst(arr, num, mid +1, high)
    } else {
        return findFirst(arr, num, low, mid -1)
    }
    }
    return -1
}

function findLast(arr, num, low = 0, high = arr.length -1) {
    if(high >= low) {
        let mid = Math.floor((low + high) /2);
        if(mid === arr.length -1 || num < arr[mid +1] && arr[mid] === num){
            return mid;
        } else if(num < arr[mid]) {
            return findLast(arr, num, low, mid -1)
        } else {
            return findLast(arr, num, mid + 1, high)
        }
    }
    return -1
}

/* 
sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1 */

module.exports = sortedFrequency