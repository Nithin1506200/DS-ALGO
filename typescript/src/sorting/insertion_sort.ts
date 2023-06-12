/**
 * # T(n) = O(n^2)
 * @param A
 */
export function insertion_sort(A: Array<number>) {
  const n = A.length;
  for (let i = 1; i < n - 1; i++) {
    const value = A[i];
    let hole = i;
    while (hole > 0 && A[hole - 1] > value) {
      A[hole] = A[hole - 1];
      hole = hole - 1;
    }
    A[hole] = value;
  }
}
