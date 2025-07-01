import { sanityFetch } from "../lib/live";
import { BANNER_QUERY, FEATURED_PRODUCTS } from "./query";

const getBanner = async () => {
  try {
    const { data } = await sanityFetch({ query: BANNER_QUERY });
    return data ?? [];
  } catch (error) {
    console.error("Error fetching Banners Data", error);
  }
};

const getCategories = async (quantity?: number) => {
  try {
    const query = quantity
      ? `*[_type == 'category'] | order(name asc) {
        ...,
        "productCount": count(*[_type == "product" && references(^._id)])
      }`
      : ` *[_type == 'category'] | order(name asc) {
        ...,
        "productCount": count(*[_type == "product" && references(^._id)])
      }`;

    const { data } = await sanityFetch({
      query,
      params: quantity ? { quantity } : {},
    });
    return data ?? [];
  } catch (error) {
    console.error("Error fetching Categories Data", error);
    return [];
  }
};

const getFeaturedProducts = async () => {
  try {
    const { data } = await sanityFetch({ query: FEATURED_PRODUCTS });
    return data ?? [];
  } catch (error) {
    console.error("Error fetching Featured Product Data", error);
  }
};

export { getBanner, getCategories, getFeaturedProducts };
