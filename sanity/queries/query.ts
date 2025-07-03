import { defineQuery } from "next-sanity";

const BANNER_QUERY = defineQuery(
  `*[_type == "banner"] | order(publishedAt desc)`
);

const FEATURED_PRODUCTS = defineQuery(
  `*[_type == "product" && isFeatured == true] | 
  order(name asc){...,"caetegories": categories[]->title}`
);

const LATEST_BLOG_QUERY = defineQuery(
  `*[_type == "blog" && isLatest == true] | order(name  asc)
  {
    ...,
    blogcategory[]->{
      title
    }
}`
);

export { BANNER_QUERY, FEATURED_PRODUCTS, LATEST_BLOG_QUERY };