/**
 * # T(n)=O(n^2)
 * @param Array : input array
 */
export function selection_sort(Array: Array<number>) {
  const n = Array.length;
  for (let i = 0; i < n - 1; i++) {
    // (n-1)
    let iMin = i;
    for (let j = i + 1; j < n; j++) {
      // T2(n) = (n-1)+(n-2)+(n-3) .... + 1 =n(n-1)/2
      if (Array[j] < Array[i]) {
        iMin = j;
      }
    }
    const temp = Array[i];
    Array[i] = Array[iMin];
    Array[iMin] = temp;
  }
}

/**
 * T(n) = (n-1).C1 + n(n-1).C2/2 = a.n^2 + b n + c
 * T(n)=O(n^2)
 */
