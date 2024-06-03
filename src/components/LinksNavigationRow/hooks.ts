import { useMemo } from "react";
import { useNewsContext } from "@context";

const MAX_TAGS_AMOUNT = 10;

export function useFilteredTags() {
  const { data: news, isLoading } = useNewsContext();

  const filteredTagsList = useMemo(() => {
    const hashmapSlug = hashmapBySlugs(news);
    // transform newsState to displayTags
    const tagsList = newsToTagList(news, hashmapSlug);
    // O(n)
    const uniquesTags = filterRepeatedTags(tagsList);
    // n*logn
    const sortedList = uniquesTags.sort((a, b) => b.count - a.count);
    return sortedList.slice(0, MAX_TAGS_AMOUNT);
  }, [news]);

  return { data: filteredTagsList, isLoading };
}

function hashmapBySlugs(news: News[]) {
  const slugMap = new Map<string, number>();
  // n^2
  news.forEach((itemNew) => {
    itemNew.taxonomy.tags.forEach((tag) => {
      const { slug } = tag;
      if (!slugMap.has(slug)) {
        slugMap.set(slug, 1);
      } else {
        let count = slugMap.get(slug)!;
        slugMap.set(slug, ++count);
      }
    });
  });
  return slugMap;
}

function newsToTagList(news: News[], hashmapSlug: Map<string, number>) {
  return news.map<TagsDisplay>((news) => {
    return {
      slug: news.taxonomy.tags[0].slug, // string
      text: news.taxonomy.tags[0].text, // string
      count: hashmapSlug.get(news.taxonomy.tags[0].slug) ?? 0,
    };
  });
}

function filterRepeatedTags(tagsList: TagsDisplay[]) {
  const seenSlugs = new Set<string>();
  return tagsList.filter((tag) => {
    if (seenSlugs.has(tag.slug)) {
      return false;
    }
    seenSlugs.add(tag.slug);
    return true;
  });
}
