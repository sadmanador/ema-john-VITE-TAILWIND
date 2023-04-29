import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/UserContext/UserContext";
import { toast } from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.displayName.value;
    const phoneNumber = form.phone.value;
    const photoURL = form.photoUrl.value;
    const house = form.house.value;
    const road = form.road.value;
    const area = form.area.value;
    const city = form.city.value;

    const address = `House: ${house}, Road/Village: ${road}, Area: ${area}, City: ${city}`;

    const userData = {
      displayName,
      phoneNumber,
      address,
      photoURL,
    };


    updateUserProfile(userData)
      .then((result) => {
        toast.success("User info successfully updated");
        form.reset();
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="rounded p-4 border">
      <h2 className="font-bold text-xl text-center mb-5">Update Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <div className="avatar">
          <div className="w-24 rounded-full">
            {user?.photoURL && <img src={user?.photoURL} />}
          </div>
        </div>
        <label className="block">Email</label>
        <input
          className="block border-2 py-2 px-10 rounded-md w-full"
          type="email"
          value={user?.email}
          readOnly
        />
        <label className="block">Photo Url</label>
        <input
          className="block border-2 py-2 px-10 rounded-md w-full"
          type="text"
          name="photoUrl"
        />
        <label className="block">Name</label>
        <input
          className="block border-2 py-2 px-10 rounded-md w-full"
          type="text"
          name="displayName"
        />
        <div className="border p-4 my-3">
          <h2 className="text-lg text-center">Address</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block">House</label>
              <input
                className="block border-2 py-2 px-10 rounded-md w-full"
                type="text"
                name="house"
              />
            </div>
            <div>
              <label className="block">Road/Village</label>
              <input
                className="block border-2 py-2 px-10 rounded-md w-full"
                type="text"
                name="road"
              />
            </div>
            <div>
              <label className="block">Area</label>
              <input
                className="block border-2 py-2 px-10 rounded-md w-full"
                type="text"
                name="area"
              />
            </div>
            <div>
              <label className="block">City</label>
              <input
                className="block border-2 py-2 px-10 rounded-md w-full"
                type="text"
                name="city"
              />
            </div>
          </div>
        </div>
        <label className="block">Phone</label>
        <input
          className="block border-2 py-2 px-10 rounded-md w-full"
          type="text"
          name="phone"
        />
        <div className="text-center mt-4">
          <input type="submit" value="Update" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
