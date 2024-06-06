import { ARTICLES_URL } from "./constants";
import { filterData } from "./utils";

export class ApiNewsService {
  static async getDataNews(): Promise<{ articles: News[] }> {
    const response = await fetch(ARTICLES_URL);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = (await response.json()) as unknown as object;
    if (!Object.prototype.hasOwnProperty.call(data, "articles"))
      throw new Error(`Error: schema from server is not correct.`);
    return filterData(data as { articles: News[] });
  }
  // static getDummyNews(): Promise<{ articles: News[] }> {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       fetch(BASE_URL_DUMMY)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           resolve(filterData(data));
  //         });
  //     }, Math.max(2000, 3000 * Math.random()));
  //   });
  // }
}
