import { useFilteredTags } from "./hooks";

export default function LinksNavigationRow() {
  const { data: tags, isLoading } = useFilteredTags();
  return (
    <div className="row">
      <div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
        {isLoading ? (
          <div>...</div>
        ) : (
          tags.map((tag, i) => <AnchorItem key={tag.text + i} tag={tag} />)
        )}
      </div>
    </div>
  );
}

function AnchorItem({ tag }: Readonly<{ tag: TagsDisplay }>) {
  return (
    <a href={`/${tag.slug}`} className="">
      {tag.text}
    </a>
  );
}
