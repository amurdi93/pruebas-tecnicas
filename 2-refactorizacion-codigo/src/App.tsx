// src/App.tsx

import React from "react";
import UserProfile from "./UserProfile";
import { User } from "./types";

const user: User = {
  name: "John Doe",
  email: "john.doe@example.com",
  address: {
    city: "New York",
    street: "5th Avenue",
    zipcode: "10001",
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <UserProfile user={user} />
    </div>
  );
}

export default App;
