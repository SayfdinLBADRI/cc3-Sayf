import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const detailUser = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.user.data);
  const detailUser = data.users.filter((user) => {
    return user.id == id;
  });

  return (
    <div className="detailuser">
      {detailUser.map((user) => (
        <>
            <img src={user.image} alt={user.id} />
            <h3>First Name: {user.firstName}</h3>
            <h3>last Name: {user.lastName}</h3>
            <h3>Age : {user.age}</h3>
            <h3>Gender :{user.gender}</h3>
            <h3>Email :{user.email}</h3>
            <h3>Phone :{user.phone}</h3>
            <h3>Weight :{user.weight}</h3>
            <h3>Height :{user.height}</h3>
            <h3>Birth Date :{user.birthDate}</h3>
            <h3>Blood Group :{user.bloodGroup}</h3>
            <h3>Eye Color :{user.eyeColor}</h3>
        </>
      ))}
    </div>
  );
};

export default detailUser;
