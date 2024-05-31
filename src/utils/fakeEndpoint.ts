export function getDataNews(): Promise<{ articles: News[] }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("/data.json").then((data) => resolve(data.json()));
    }, Math.max(1000, 2000 * Math.random()));
  });
}
