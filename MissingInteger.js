/**
    Task description
    This is a demo task.

    Write a function:

    function solution(A);

    that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

    For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

    Given A = [1, 2, 3], the function should return 4.

    Given A = [−1, −3], the function should return 1.

    Write an efficient algorithm for the following assumptions:

    N is an integer within the range [1..100,000];
    each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

function solution(A) {
  // write your code in JavaScript (Node.js 14)
  const maxNum = Math.max(...A);
  if (maxNum < 0) {
    return 1;
  }

  const counter = new Array(maxNum).fill(0);
  for (let num of A) {
    counter[num - 1] += 1;
  }
  for (let i = 0; i < counter.length; i++) {
    if (counter[i] === 0) {
      return i + 1;
    }
  }

  return maxNum + 1;
}
