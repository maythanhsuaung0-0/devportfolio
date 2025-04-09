---
title: "Sorting Algorithms"
cover: "/sort.jpeg"
category: "Data Structure"
date: "29-07-2024"
readingTime: "00:05:00"
subTitles:
  - ttl: "Basic Sort"
    content:
      - "Bubble Sort"
      - "Selection Sort"
      - "Insertion Sort"
  - ttl: "Advanced Sort"
    content:
      - "Merge Sort"
      - "Quick Sort"
---

# Sorting Algorithms
## Basic Sorts
1. Bubble sort
2. Selection Sort
3. Insertion Sort

## Advanced Sorts
1. quick sort
2. merge sort

### Bubble Sort
* for each round, the values will be compared one by one from left to right
* after each round, the rightmost value will be firstly sorted and then towards the left
* will be O(n^2) because there is nested loop

#### example (for 1 round only)

| Pass | 12 | 7  | 9  | 24 | 7  | 29 | 5  | 3  | 11 | 7  |
|------|----|----|----|----|----|----|----|----|----|----|
| 1    | 7  | 9  | 12 | 24 | 7  | 29 | 5  | 3  | 11 | 7  |
| 2    | 7  | 9  | 12 | 12 | 5  | 3  | 11 | 7  | 24 | 29 |
| 3    | 7  | 7  | 9  | 5  | 3  | 11 | 7  | 12 | 24 | 29 |
| 4    | 7  | 7  | 5  | 3  | 9  | 7  | 11 | 12 | 24 | 29 |
| 5    | 7  | 5  | 3  | 7  | 7  | 9  | 11 | 12 | 24 | 29 |
| 6    | 5  | 3  | 7  | 7  | 7  | 9  | 11 | 12 | 24 | 29 |
| 7    | 3  | 5  | 7  | 7  | 7  | 9  | 11 | 12 | 24 | 29 |

```
def bubbleSort(arr):
    arr_len = len(arr) - 1
    pass_counter = 0
    for j in range(arr_len, 0, -1): # the rightmost values will be sorted first
so, the nums to sort will be reduced one by one
        for i in range(arr_len): compared from left to right for all the length of arr
            if arr[i] > arr[i+1]:
                arr[i],arr[i+1] = arr[i+1], arr[i]
        pass_counter += 1
        print("Pass: ",pass_counter)
    return arr
```

### Selection Sort
* let the first value be smallest value
* set it aside
* select the smallest value from the rest of the values by comparing with the previous smallest
* if it’s smallest, set it aside and swap with the previous smallest
* let the first value from the rest of the list to be smallest
repeat the process

| Pass | 12 | 7  | 9  | 24 | 7  | 29 | 5  | 3  | 11 | 7  |
|------|----|----|----|----|----|----|----|----|----|----|
| 1    | 3  | 7  | 9  | 24 | 7  | 29 | 5  | 12 | 11 | 7  |
| 2    | 3  | 5  | 9  | 24 | 7  | 29 | 7  | 12 | 11 | 7  |
| 3    | 3  | 5  | 7  | 24 | 9  | 29 | 7  | 12 | 11 | 7  |
| 4    | 3  | 5  | 7  | 7  | 9  | 29 | 24 | 12 | 11 | 7  |
| 5    | 3  | 5  | 7  | 7  | 7  | 29 | 24 | 12 | 11 | 9  |
| 6    | 3  | 5  | 7  | 7  | 7  | 9  | 24 | 12 | 11 | 29 |
| 7    | 3  | 5  | 7  | 7  | 7  | 9  | 11 | 12 | 24 | 29 |


```def selectionSort(arr):
	# 2,5,4,3
	arr_len = len(arr)
	for i in range(arr_len): # need to loop through all values, let the first value be min
		smallIndex = i 
		for j in range(i+1,arr_len) # values after i will be compared,
																# caz i will be the sorted value
			if arr[smallIndex] > arr[j]: # if smaller than small, swap
				smallIndex = j # give the smallest index to index of j
		arr[smallIndex],arr[i] = arr[i],arr[smallIndex]

	return arr 

print(selectionSort([2,5,7,1,4,2]))	
```

### Insertion Sort
* get the first number firstly
* see the 2nd number, compare with the previous one, put in the correct position
* choose another one, compare with the previous ones, put in the correct position
* the numbers on the left hand side will be compared and inserted
* the numbers to be compared are increasing until it reaches to the end

| Pass | 12 | 7  | 9  | 24 | 7  | 29 | 5  | 3  | 11 | 7  |
|------|----|----|----|----|----|----|----|----|----|----|
| 1    | 7  | 12 | 9  | 24 | 7  | 29 | 5  | 3  | 11 | 7  |
| 2    | 7  | 9  | 12 | 24 | 7  | 29 | 5  | 3  | 11 | 7  |
| 3    | 7  | 9  | 12 | 24 | 7  | 29 | 5  | 3  | 11 | 7  |
| 4    | 7  | 7  | 9  | 12 | 24 | 29 | 5  | 3  | 11 | 7  |
| 5    | 7  | 7  | 9  | 12 | 24 | 29 | 5  | 3  | 11 | 7  |
| 6    | 5  | 7  | 7  | 9  | 12 | 24 | 29 | 3  | 11 | 7  |
| 7    | 3  | 5  | 7  | 7  | 9  | 12 | 24 | 29 | 11 | 7  |
| 8    | 3  | 5  | 7  | 7  | 9  | 11 | 12 | 24 | 29 | 7  |
| 9    | 3  | 5  | 7  | 7  | 7  | 9  | 11 | 12 | 24 | 29 |


```def insertionSort(arr):
	n = len(arr)
	for i in range(n):
		current = i
		for j in range(current):
		# we only take care of comparing values till the current one
		# in speak of cards, only take care of sorting the cards in our hand
		# the values to be compared will be increasing till the end of arr
			if arr[current] < arr[j]:
				arr[current],arr[j] = arr[j],arr[current]

my_arr = [1,4,6,2,4,3]
insertionSort(my_arr)
print(my_arr)
```

## Advanced sort

### Merge sort
* divide into smaller parts of array
* sort them and merge back
* needs two functions (to divide, and sort)
#### Merging sorted arrays

* Here, we use concept of pointer.
* Pointers will only move after that value is added to the newlist.
* We will only add the value if that is smaller ( for ascending sort) / or larger (for descending sort) compared to the value with the other pointer.
* for eg. we will move pointer a to 8 (index 1) because 2 (at index 0) is smaller than 4 ( at index 0 of pointer b). Then we will compare values of pointer a and b again which are 8 and 4.
* Now 4 (at pointer b index 0 ) is less than 8 (pointer a index 1).
* So we will move pointer b to index 1 this time.
And so on.
* This will stop comparing when either of the pointer reaches to the end of the array.
* The pointer which is still not reaching the end, it needs to go on itself without comparing, just adding to the newlist.
![This is an alt text.](/bubblesort.jpg)

```
def mergeSort(arr):
	if len(arr) > 1:
		mid = len(arr) // 2
		left = mergeSort(arr[:mid]) # divide
		right = mergeSort(arr[mid:]) # divide
		newList = mergeSortedList(left ,right) # do the sorting and merging of left and right
		return newList
	else:
		return arr
	
def mergeSortedList(l,r): # do the sorting and merging of left and right, return one array
	a = 0 
	# declare pointers
	b = 0 # new list to be added
	new = []
	while a < len(l) and b < len(r): 
	#until the whole of one array is not added to the list, or in other words, 
	until either of the pointers gets to the end of the array
		if l[a] < r[b]: # compare
			new.append(l[a]) # if value of a is smaller
			a += 1 # move pointer
		else:
			new.append(r[b]) # if value of b is smaller
			b += 1 # move pointer
	
	# one of the two arrays got to the end
	# the other left with the values which are not added to the list yet
	while a < len(l): # if l array is left
		new.append(l[a]) # no need to compare just add
		a += 1 # move pointer
	
	while b < len(r):
		new.append(r[b])
		b += 1
	
	return new
```

* For merging, we work as if the two separated arrays are sorted on their own because
the best case of the recursive function ( divide function) returns just one value array.

### Quick sort
* divide and conquer
* divide the left and right of the pivot’s correct position ( by considering the pivot is in correct location)

```def quickSort(arr):
	divideArr(arr, 0 , len(arr) - 1)
	
def divideArr(arr, first , last):
	if first >= last: # base case
		return 
	else:
		pos = partitionArr(arr, first , last)
		divideArr(arr, first, pos - 1 ) # considering pos is already the correct position
		divideArr(arr, pos + 1, last)

def partitionArr(arr, first, last):
	pivot = arr[first]
	left = first + 1
	right = last
	while left <= right: # scan until the left and right crosses
		while left <= right and arr[left] < pivot:
		left += 1 # move left pointer towards right
		
	# if left > right; this won't work
	# left > right means all the values right to the pivot are less than the pivot already
		while left <= right and arr[right] > pivot:
			right -= 1 # move right pointer towards left
	
		if left <= right:
			arr[left], arr[right] = arr[right], arr[left]
			left += 1
			right -= 1
	
	# first should be smallest value, which is right
	# right is the correct position of pivot
	arr[first],arr[right] = arr[right], pivot
	
	return right #return the position of pivot
```