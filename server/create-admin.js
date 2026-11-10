
const readline = require("readline");
const bcrypt = require("bcrypt");
const db = require("./db");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function createAdmin() {
  try {
    const username = await ask("Enter admin username: ");
    const email = await ask("Enter admin email: ");
    const password = await ask("Enter admin password: ");

    if (!username.trim() || !email.trim() || !password) {
      console.log("All fields are required.");
      return;
    }

    if (password.length < 8) {
      console.log("Password must contain at least 8 characters.");
      return;
    }

    const passwordHash = await bcrypt.hash(password, 12);

    await db.query(
      `INSERT INTO admin_users
       (username, email, password_hash, role, is_active)
       VALUES (?, ?, ?, 'super_admin', TRUE)`,
      [username.trim(), email.trim(), passwordHash]
    );

    console.log("Administrator account created successfully!");

  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    rl.close();
    await db.end();
  }
}

createAdmin();
