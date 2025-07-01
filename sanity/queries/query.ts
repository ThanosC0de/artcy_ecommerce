import { defineQuery } from "next-sanity";

const BANNER_QUERY = defineQuery(
  `*[_type == "banner"] | order(publishedAt desc)`
);

const FEATURED_PRODUCTS = defineQuery(
  `*[_type == "product" && isFeatured == true] | 
  order(name asc){...,"caetegories": categories[]->title}`
);

export { BANNER_QUERY, FEATURED_PRODUCTS };