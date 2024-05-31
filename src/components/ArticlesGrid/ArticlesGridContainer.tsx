import { useNewsContext } from "@context";
import { parseDate } from "./utils";

export default function ArticlesGridContainer() {
  const [newsState] = useNewsContext();
  return (
    <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
      {newsState.map((n, i) => (
        <ArticleItem key={i + n._id} news={n} />
      ))}
    </section>
  );
}

function ArticleItem({ news }: Readonly<{ news: News }>) {
  return (
    <article className="mod-caja-nota lugares w-100-mobile">
      <section id="" className="cont-figure">
        <a href="" className="figure">
          <picture id="" className="content-pic picture">
            <img
              src={news.promo_items.basic.url}
              alt=""
              className="content-img"
            />
          </picture>
        </a>
      </section>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <a href="">{news.headlines.basic}</a>
        </h2>
        <h4 className="com-date">{parseDate(news.display_date)}</h4>
      </div>
    </article>
  );
}
