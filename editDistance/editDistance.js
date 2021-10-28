// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let isStr2Longer = arr2.length > arr1.length;
  let lengthDiff = Math.abs(arr2.length - arr1.length);
  let step = 0;

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === arr1[i]) {
      continue;
    } else if (arr2[i] !== arr1[i] && lengthDiff === 0){
      arr1[i] = arr2[i];
      step++;
    } else {
      if (isStr2Longer) {
        let index = arr2.indexOf(arr1[i], i)
        if (index !== -1 && index - i <= lengthDiff) {
          for (let k = 0; k < index - i; k++) {
            arr1.splice(i, 0, arr2[i + k]);
          }
          step += index - i;
          lengthDiff -= index - i;
          i += index - i - 1;
        } else {
          arr1[i] = arr2[i];
          step++;
        }
      } else {
        let index = arr1.indexOf(arr2[i], i)
        if (index !== -1 && index - i <= lengthDiff) {
          arr1.splice(i, index - i);
          step += index - i;
          lengthDiff -= index - i;
          i--;
        } else {
          arr1[i] = arr2[i];
          step++;
        }
      }
    }
  }
  return step;
};