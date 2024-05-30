interface News {
  _id: string;
  display_date: string;
  headlines: Headlines;
  promo_items: Promoitems;
  subtype: string;
  taxonomy: Taxonomy;
  website_url: string;
}
interface Taxonomy {
  tags: Tag[];
}
interface Tag {
  slug: string;
  text: string;
}
interface Promoitems {
  basic: Basic;
}
interface Basic {
  resized_urls: Resizedurl[];
  subtitle: string;
  type: string;
  url: string;
}
interface Resizedurl {
  option: Option;
  resizedUrl: string;
}
interface Option {
  media: string;
}
interface Headlines {
  basic: string;
}
