
async function fetchUsers() {
  try {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const users = await response.json();

    const userList = document.getElementById("user-list");

    users.forEach(user => {
      const userDiv = document.createElement("div");
      userDiv.className = "user";

      userDiv.innerHTML = `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
        <hr>
      `;

      userList.appendChild(userDiv);
    });

  } catch (error) {
    
    console.error("Error:", error);
    document.getElementById("user-list").innerText =
      "An error occurred while fetching user data.";
  }
}

fetchUsers();