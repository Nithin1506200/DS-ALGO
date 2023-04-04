# max_subarray

```typescript
function maxSubArray(arr: number[]): number {
  let max = -Infinity;
  let current_max = 0;
  for (let i of arr) {
    current_max += i;
    if (current_max > max) {
      max = current_max;
    }
    current_max = Math.max(current_max, 0);
  }
  return 0;
}
```
