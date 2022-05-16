import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const LogoutUser = async (userLogoutSuccess) => {
  const res = await signOut(auth);
  console.log("🚀 ~ file: logoutUser.js ~ line 6 ~ LogoutUser ~ res", res);
  userLogoutSuccess();
};

export default LogoutUser;
