
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function testLogin() {
  try {
    const username = await ask("Enter admin username or email: ");
    const password = await ask("Enter admin password: ");

    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      }
    );

    const data = await response.json();

    console.log("HTTP Status:", response.status);
    console.log("Message:", data.message);

    if (response.ok) {
      console.log("Admin:", data.admin);
      console.log("Login API test successful!");
    }

  } catch (error) {
    console.error("Test failed:", error.message);
  } finally {
    rl.close();
  }
}

testLogin();
