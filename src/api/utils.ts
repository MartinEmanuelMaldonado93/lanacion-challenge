export function filterData(data: { articles: News[] }) {
  const filteredData = data.articles.filter(filterBySubtype);
  return { articles: filteredData };
}

export function filterBySubtype(news: News) {
  return news.subtype === "7";
}
