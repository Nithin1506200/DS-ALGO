/**
 * {@link https://www.youtube.com/watch?v=WprjBK0p6rw}
 * worst case O(n^2)
 * @param a
 * @param index
 */
export function quick_sort(
  a: Array<number>,
  index: { low: number; high: number } | undefined
) {
  if (!index) {
    index = { low: 0, high: a.length - 1 };
  }
  if (index.low < index.high) {
    const p = partition(a, index.low, index.high);
    quick_sort(a, { low: index.low, high: p - 1 });
    quick_sort(a, { low: p + 1, high: index.high });
  }
}
/**
 * this partician places the pivot element in such a place that the\
 *  leftside is always lesser thn that pivot and all right is greater thn that pivot
 * @param a
 * @param l
 * @param r
 * @returns
 */
function partition(a: Array<number>, l: number, r: number): number {
  const pivot: number = a[r];
  let i = l - 1;
  for (let j = l; j < r; j++) {
    if (a[j] <= pivot) {
      // If element smaller than pivot is found
      // swap it with the greater element pointed by i
      i = i + 1;

      // Swapping element at i with element at j
      [a[i], a[j]] = [a[j], a[i]];
    }
  }
  [a[i + 1], a[r]] = [a[r], a[i + 1]];

  //Return the position from where partition is done
  return i + 1;
}
