import ShortBio from "../sidebar/ShortBio";
import MeOnFacebook from "../sidebar/MeOnFacebook";
import RecentPosts from "../sidebar/RecentPosts";

const Sidebar = () => {
  return (
    <aside>
      <ShortBio />
      <MeOnFacebook />
      <RecentPosts />
    </aside>
  );
};

export default Sidebar;
