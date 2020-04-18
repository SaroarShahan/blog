import { useContext, useEffect } from "react";
import fetch from "node-fetch";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { baseUrl } from "../../utlis/baseUrl";
const BlogLayout = dynamic(() => import("../../components/layout/BlogLayout"), {
  ssr: false,
});
const Search = ({ posts }) => {
  console.log("posts search ", posts);

  return (
    <div>
      <h1>search</h1>
    </div>
  );
};

export async function getStaticProps() {
  let url = window.location.search.split("=")["1"];
  const response = await fetch(`${baseUrl}/posts?search=${decodeURI(url)}`);
  const posts = await response.json();
  // console.log("context query", posts);

  return {
    props: {
      posts,
    },
  };
}

Search.Layout = BlogLayout;

export default Search;
