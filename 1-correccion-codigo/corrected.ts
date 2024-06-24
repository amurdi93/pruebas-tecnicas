interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUserData = async (userId: number): Promise<User> => {
  const response = await fetch(`/api/users/${userId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const userData: User = await response.json();
  return userData;
};

const logUserName = (user: User) => {
  console.log(user.name);
};

fetchUserData(123)
  .then(logUserName)
  .catch((error) => console.error("Error fetching user data:", error));
