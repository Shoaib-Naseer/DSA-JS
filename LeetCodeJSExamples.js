// Example 1: Return true if a given string is a palindrome, false otherwise.

// A string is a palindrome if it reads the same forwards as backwards. That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".

var checkIfPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}


// Example 2: Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise. This problem is similar to Two Sum.

// For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var checkForTarget = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let curr = nums[left] + nums[right];
        if (curr == target) {
            return true;
        }
        
        if (curr > target) {
            right--;
        } else {
            left++;
        }
    }
    
    return false;
}

// Example 3: Given two sorted integer arrays, return an array that combines both of them and is also sorted.


var combine = function(arr1, arr2) {
    let ans = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        } else {
            ans.push(arr2[j]);
            j++;
        }
    }
    // Because we have used AND in our above condition and if one of the arrays is smaller or greater in length 
    // then it would only check smaller one so remaining elements should be then added by again applying while loop
    while (i < arr1.length) {
        ans.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        ans.push(arr2[j]);
        j++;
    }
    
    return ans;
}
