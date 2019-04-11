'use strict';

const LinkedList = require('./sortinglinkedlist');

/*
      [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];
                                  //1
      [21, 1, 26, 45, 29, 28, 2, 9] [16, 49, 39, 27, 43, 34, 46, 40]
                  //2                             //3
     [21, 1, 26, 45] [29, 28, 2, 9] [16, 49, 39, 27] [43, 34, 46, 40]
          //4               //5            //6              //6
   [21, 1] [26, 45] [29, 28] [2, 9] [16, 49] [39, 27] [43, 34] [46, 40]
    //7       8         9       10      11      12        13      14 
[21] [1] [26] [45] [29] [28] [2] [9] [16] [49] [39] [27] [43] [34] [46] [40]
//  15       16        17       18       19        20        21        22
    [1, 21] [26, 45] [28, 29] [2, 9] [16, 49] [27, 39] [34, 43] [40, 46]

      [1, 21, 26, 45] [2, 9, 28, 29] [16, 27, 39, 49] [34, 40, 43, 46]

      [1, 2, 9, 21, 26, 28, 29, 45] [16, 27, 34, 39, 40, 43, 46, 49]

      [1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49]
*/

//1. Understanding merge sort

//1a. 
//[16, 49, 39, 27, 43, 34, 46, 40]

//1b.
// [26, 45]

//1c.
// [1, 21]

//1d.
// [34, 43]

//2. Understanding quicksort

// 2a.

// 14 or 17 could have been the pivot. All numbers to the left
// of either are less than while all to the right are greater than.

//2a.
// Using 12 as the pivot:
// 3, 9, 10, 12, 19, 14, 17, 16, 13, 15
//2b.
// Using 14 as pivot:
//[14,	13,	10,	3,	9,	12,	15,	16,	19,	17]


const data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }
  
  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }
  
  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
}


function qSort (array, start = 0, end = array.length) {
  if(start >= end){
    return array;
  }
  
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;

}

function mSort (array) {
  if (array.length <= 1){
    return array;
  }

  const middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);

  return merge(left, right, array);


}

// console.log(qSort(data));

function main() {
  let list = new LinkedList();
  list.insertFirst(14);
  list.insertFirst(28);
  list.insertFirst(56);
  list.insertFirst(30);
  list.insertFirst(66);
  list.insertFirst(7);

  //   console.log(list);

  linkedMerge(list);
}

function linkedMerge(ll) {
  let sortedArray = [];   
  let left = ll.head;
  let right = ll.next;

  console.log(ll.head.next.value);
  
  while (ll.head.next !== null) {
    sortedArray.push(ll.head.next.value);   
    ll.remove(ll.head.next.value);
  } 
  
  sortedArray.push(ll.head.value);
  
  console.log(mSort(sortedArray));

  
      
      
    
}

//  Bucket Sort

const newData = [5, 13, 1, 9, 11, 7, 3];

function bucketSort(arr, low) {
  let newArr = [];
    
  for(let i = 0; i <arr.length; i++){
    newArr[arr[i]-low] = (arr[i]);
  }
  console.log(newArr);
}
    
    
    
    
  



main();