const BASE_URL =
  "https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/";
const BASE_URL_DUMMY = "/data.json";

export class ApiNewsService {
  static getDummyNews(): Promise<{ articles: News[] }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch(BASE_URL_DUMMY).then((data) => resolve(data.json()));
      }, Math.max(1000, 2000 * Math.random()));
    });
  }
  static async getDataNews(): Promise<{ articles: News[] }> {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json() as unknown as object;

    if(!Object.prototype.hasOwnProperty.call(data, 'articles'))throw new Error(`Error: schema from server is not correct.`);

    return data as { articles: News[] };
  }
}
