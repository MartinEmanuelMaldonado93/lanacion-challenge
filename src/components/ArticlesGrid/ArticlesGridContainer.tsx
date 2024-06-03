import { useNewsContext } from "@context";
import { ArticleItem } from "./AticleItem";

export default function ArticlesGridContainer() {
  const { data: news, isLoading } = useNewsContext();
  return (
    <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
      {isLoading && <div>Cargando noticias...</div>}
      {news.map((n, i) => (
        <ArticleItem key={i + n._id} news={n} />
      ))}
    </section>
  );
}
