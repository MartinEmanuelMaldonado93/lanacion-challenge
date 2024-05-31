import { useFilteredTags } from "./hooks";

const MAX_LINKS_AMOUNT = 10;

export default function LinksNavigationRow() {
  const tags = useFilteredTags();
  return (
    <div className="row">
      <div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
        {tags.slice(0, MAX_LINKS_AMOUNT).map((tag, i) => (
          <AnchorItem key={tag.text + i} tag={tag} />
        ))}
      </div>
    </div>
  );
}

function AnchorItem({ tag }: { tag: TagsDisplay }) {
  return (
    <a href={`/tema/${tag.slug}`} className="">
      {tag.text} {tag.count}
    </a>
  );
}
