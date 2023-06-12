export function Bubble_sort(A: Array<number>) {
  const n = A.length;
  for (let k = 0; k < n - 1; k++) {
    let flag = false;
    for (let i = 0; i < n - k - 1; i++) {
      if (A[i] > A[i + 1]) {
        [A[i], A[i + 1]] = [A[i + 1], A[i]]; // T(n) = (n-1)(n-2)
        flag = true;
      }
    }
    if (flag === false) {
      break;
    }
  }
}
