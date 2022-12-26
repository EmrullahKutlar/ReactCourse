import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

const Profile = () => {
    const {username}=useContext(AppContext)
  return (
    <div>
      This is Profile Page user is: {username}
      <ChangeProfile  />
    </div>
  );
};

export default Profile;
