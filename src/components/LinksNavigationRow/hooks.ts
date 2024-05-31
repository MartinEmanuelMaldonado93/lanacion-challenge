import { useMemo } from "react";
import { useNewsContext } from "@context";

export function useFilteredTags() {
  const [newsState] = useNewsContext();

  const uniqueTagsDisplay = useMemo(() => {
    const hashmapCountBySlug = new Map<string, number>();
    // count by slug tags O(n)
    newsState.forEach((newItem) => {
      const { slug } = newItem.taxonomy.tags[0];

      if (!hashmapCountBySlug.has(slug)) {
        hashmapCountBySlug.set(slug, 1);
      } else {
        let count = hashmapCountBySlug.get(slug)!;
        hashmapCountBySlug.set(slug, ++count);
      }
    });
    // transform newsState to displayTags // O(n)
    const tagsDisplayFromNews = newsState.map<TagsDisplay>((news) => {
      return {
        slug: news.taxonomy.tags[0].slug, // string
        text: news.taxonomy.tags[0].text, // string
        count: hashmapCountBySlug.get(news.taxonomy.tags[0].slug) ?? 0,
      };
    });

    const seenSlugs = new Set<string>();
    // O(n)
    const uniqueTagsDisplay = tagsDisplayFromNews.filter((tag) => {
      if (seenSlugs.has(tag.slug)) {
        return false;
      }
      seenSlugs.add(tag.slug);
      return true;
    });
    // n*logn
    const sortedList = uniqueTagsDisplay.sort((a, b) => b.count - a.count);
    return sortedList;
  }, [newsState]);

  return uniqueTagsDisplay;
}
