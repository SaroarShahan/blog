import React, { createContext, useState } from "react";

export const CreateContext = createContext();
const SiteProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [users, setUsers] = useState({});
  const [searchInput, setSearchInput] = useState("");

  const getPosts = (posts) => {
    setPosts(posts);
  };

  const getRecentPosts = (recent) => {
    recentPosts(recent);
  };

  const getUsers = (users) => {
    setUsers(users);
  };

  return (
    <CreateContext.Provider
      value={{
        posts,
        getPosts,
        recentPosts,
        getRecentPosts,
        users,
        getUsers,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default SiteProvider;
