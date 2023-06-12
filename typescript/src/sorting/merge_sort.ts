export function merge_sort(
  A: Array<number>,
  l: number | null = null,
  r: number | null = null
) {
  if (l === null || r === null) {
    l = 0;
    r = Array.length;
  }
  if (l > r) {
    return;
  }
  const m = (l + r) / 2;
  merge_sort(A, l, m);
  merge_sort(A, m + 1, r);
  merge(A, l, m, r);
  //
  function merge(A: Array<number>, l: number, m: number, r: number) {
    const n1 = m - l + 1;
    const n2 = r - m;
    const L = new Array(n1);
    const R = new Array(n2);
    for (let i = 0; i < n1; i++) {
      L[i] = A[l + i];
    }
    for (let i = 0; i < n2; i++) {
      R[i] = A[m + i + 1];
    }

    let i = 0;
    let j = 0;
    let k = l;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        A[k] = L[i];
        i++;
      } else {
        A[k] = R[j];
        j++;
      }
      k++;
    }
    while (i < n1) {
      A[k] = L[i];
      i++;
      k++;
    }
    while (j < n2) {
      A[k] = R[j];
      j++;
      k++;
    }
    return;
  }
  return;
}
