/**
 * {@link https://www.geeksforgeeks.org/introduction-to-dijkstras-shortest-path-algorithm/}
 *
 * {@link https://www.youtube.com/watch?v=bZkzH5x0SKU}
 */
export default function dijkstra_shortest_path(
  adj: Array<number[]>,
  src: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _dest: number
) {
  /**
   * the number of vertices
   */
  const n: number = adj[0].length;
  /**
   * shortest distances from soruce to vertices
   */
  const shortest: { [key: number]: number } = {};
  const visited: { [key: number]: boolean } = {};
  const parents: { [key: number]: number } = {};
  for (let v = 0; v < n; v++) {
    shortest[v] = Number.MAX_VALUE;
    visited[v] = false;
  }
  /**
   * make this as source
   */
  shortest[src] = 0;
  parents[src] = -1;

  for (let i = 0; i < n; i++) {
    let temp = -1;
    let min = Number.MAX_VALUE;
    for (let v = 0; v < n; v++) {
      if (!visited[v] && shortest[v] < min) {
        temp = v;
        min = shortest[v];
      }
      if (temp == -1) {
        return -1;
      }
      visited[temp] = true;
      for (let v = 0; v < n; v++) {
        const dist = adj[temp][v];
        if (dist > 0 && min + dist < shortest[v]) {
          parents[v] = temp;
          shortest[v] = min + dist;
        }
      }
    }
  }
}
