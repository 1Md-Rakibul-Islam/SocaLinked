import React from "react";
import { useContext } from "react";
import {
  FaMapMarkerAlt,
  FaUniversity,
  FaUserGraduate,
  FaUserCircle,
  FaPaperPlane,
} from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useCurrentUser from "../../Hooks/useCurrentUser";
import CreatePost from "../Home/CreatePost/CreatePost";
import Loading from "../Shared/Loading/Loading";
import EditModal from "./EditModal/EditModal";

const About = () => {
  const { user } = useContext(AuthContext);

  const [currentUser, refetch, isCurrentUserLoading] = useCurrentUser(
    user?.email
  );
  // console.log(currentUser);

  if (isCurrentUserLoading) {
    return <Loading></Loading>;
  }

  const {
    coverPhoto,
    educationInstitute,
    userEmail,
    userName,
    userPhoto,
    address,
  } = currentUser;

  return (
    <section className="-mt-10 max-w-6xl mx-auto">
      <div>
        <div className="w-full h-[45vh] border border-primary overflow-hidden bg-slate-200">
          <img className="w-full" src={coverPhoto} alt="" />
        </div>

        <div className="flex justify-between items-center md:mx-20 mx-10 ">
          <div className="">
            <div className="-mt-48 mb:mb-20 mb-5 w-[300px] h-[300px] border-4 border-primary rounded-full overflow-hidden bg-slate-200">
              <img className="w-full" src={userPhoto} alt="" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-items-center gap-x-4">
                <FaUserCircle className="text-3xl "></FaUserCircle>
                <h2 className="text-3xl font-bold">{userName}</h2>
              </div>
              <div className="flex items-center justify-items-center gap-x-4">
                <FaPaperPlane className="text-3xl "></FaPaperPlane>
                <span className="text-xl">{user?.email}</span>
              </div>

              <h1 className="text-2xl font-semibold">About</h1>
              <div className="flex items-center justify-items-center gap-x-4">
                <FaUserGraduate className="text-3xl "></FaUserGraduate>
                <h4 className="text-xl">{educationInstitute}</h4>
              </div>
              <div className="mb:my-20 mb-5 flex items-center justify-items-center gap-x-4">
                <FaMapMarkerAlt className="text-3xl "></FaMapMarkerAlt>
                <h4 className="text-xl">{address}</h4>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="edit-modal" className="btn btn-md btn-success">
              Edit
            </label>
            <EditModal currentUser={currentUser} refetch={refetch}></EditModal>
          </div>
        </div>
      </div>
      <div className="mx-0 mt-10 mb-28 px-0">
        <CreatePost></CreatePost>
      </div>
    </section>
  );
};

export default About;
