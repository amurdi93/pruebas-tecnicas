// src/components/UserProfile.tsx

import React from "react";
import { User } from "./types";
import "./UserProfile.css";

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const { name, email, address } = user;
  const { city, street, zipcode } = address || {};

  return (
    <div className="user-profile">
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>City:</strong> {city}
      </p>
      <p>
        <strong>Street:</strong> {street}
      </p>
      <p>
        <strong>Zipcode:</strong> {zipcode}
      </p>
    </div>
  );
};

export default UserProfile;
