/**
    Task description
    Write a function:

    function solution(A, B, K);

    that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

    { i : A ≤ i ≤ B, i mod K = 0 }

    For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

    Write an efficient algorithm for the following assumptions:

    A and B are integers within the range [0..2,000,000,000];
    K is an integer within the range [1..2,000,000,000];
    A ≤ B.
 */

function solution(A, B, K) {
  // write your code in JavaScript (Node.js 14)
  /**
   * The range is inclusive: there is 1 value in the range 0 to 0: the value 0 itself.
   * All values are divisible by 1, so the result is indeed 1 value.
   */
  const offset = A % K === 0 ? 1 : 0;
  /**
   * this is indeed prefix sum problem, with the array has all same item value of 1
   * the index that is divisible by K happens on the multiplication of K * c - 1, with c is integer
   * if we need to find how many times the divisible index happens between two indexes
   * we subtract amount of the integers in the range which is hold by A and B divided by K
   * then add 1 more time if A is inclusive, divisible by K
   *
   * imagine this is the array: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
   * if K = 5
   * the index divisible by K would be 4 & 9
   * if the range is 4 and 9, we get 2 indices divisible by K
   * if the range is 5 and 9, we get 1
   * if the range is 5 and 8, we get 0
   *
   * we can make new array with total divisible by K = 5, e.g.
   * [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
   * the total indices divisible by K up to index B is Math.floor(B / K)
   * the total indices divisible by K up to index A is Math.floor(A / K)
   * the total indices divisible by K from A to B (inclusive) is as follows:
   */
  return Math.floor(B / K) - Math.floor(A / K) + offset;
}
