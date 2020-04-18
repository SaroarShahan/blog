import { useState, useContext } from "react";
import fetch from "node-fetch";
import { useRouter } from "next/router";
import Box from "../common/Box";
import { baseUrl } from "../../utlis/baseUrl";
import { CreateContext } from "../../provider/SiteProvider";

const Search = () => {
  const router = useRouter();
  const { getPosts } = useContext(CreateContext);
  const [search, setSearch] = useState("");

  const _handleChange = (e) => {
    setSearch(e.target.value);
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();
    // const fetchRes = await fetch(`${baseUrl}/posts?search=${search}`);
    // const data = await fetchRes.json();

    // getPosts(data);

    router.replace(`/search?q=${search}`);
  };
  console.log("router ", router);

  return (
    <Box>
      <Box.Title>সার্চ করুন</Box.Title>
      <Box.Body>
        <form onSubmit={_handleSubmit}>
          <input
            placeholder="এখানে বাংলায় লিখুন"
            value={search}
            onChange={_handleChange}
          />
        </form>
      </Box.Body>
    </Box>
  );
};

export default Search;
