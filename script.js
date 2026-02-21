// script.js
// This function fetches user data from the public API
// and displays Name, Email, and City on the web page

async function fetchUsers() {
  try {
    // Fetch data from the API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    // Convert response to JSON
    const users = await response.json();

    // Get the container where data will be displayed
    const userList = document.getElementById("user-list");

    // Loop through each user and display required details
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
    // Handle any errors that occur
    console.error("Error:", error);
    document.getElementById("user-list").innerText =
      "An error occurred while fetching user data.";
  }
}

// Call the function when the page loads
fetchUsers();