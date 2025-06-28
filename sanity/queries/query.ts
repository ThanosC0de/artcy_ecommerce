import { defineQuery } from "next-sanity";

const BANNER_QUERY = defineQuery(`*[_type == "banner"] | order(publiceAt desc)`);

export default BANNER_QUERY;