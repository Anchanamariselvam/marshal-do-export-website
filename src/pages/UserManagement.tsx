
import { useState } from "react";
import {
  Users,
  Mail,
  Plus,
  Pencil,
  Trash2,
  X,
  Save,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./UserManagement.css";

type User = {
  id: number;
  name: string;
  email: string;
};

const initialUsers: User[] = [
  {
    id: 1,
    name: "Marshal Do Export",
    email: "marshaldoexport@gmail.com",
  },
  {
    id: 2,
    name: "Anchana Mariselvam",
    email: "anchanamariselvam5@gmail.com",
  },
];

function UserManagement() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setEditingUser(null);
    setShowForm(false);
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setName("");
    setEmail("");
    setShowForm(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
    setShowForm(true);
  };

  const handleSaveUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedName || !trimmedEmail) {
      return;
    }

    const emailExists = users.some(
      (user) =>
        user.email.toLowerCase() === trimmedEmail &&
        user.id !== editingUser?.id
    );

    if (emailExists) {
      alert("This email address already exists.");
      return;
    }

    if (editingUser) {
      setUsers((currentUsers) =>
        currentUsers.map((user) =>
          user.id === editingUser.id
            ? {
                ...user,
                name: trimmedName,
                email: trimmedEmail,
              }
            : user
        )
      );
    } else {
      const newUser: User = {
        id: Date.now(),
        name: trimmedName,
        email: trimmedEmail,
      };

      setUsers((currentUsers) => [...currentUsers, newUser]);
    }

    resetForm();
  };

  const handleDeleteUser = (user: User) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${user.name}?`
    );

    if (confirmDelete) {
      setUsers((currentUsers) =>
        currentUsers.filter((item) => item.id !== user.id)
      );
    }
  };

  return (
    <div className="user-management-page">
      <Header />

      <main>
        {/* PAGE HERO */}
        <section className="user-management-hero">
          <div className="user-management-container">
            <p className="user-management-eyebrow">
              <Users size={16} />
              ADMIN DASHBOARD
            </p>

            <h1>User Management</h1>

            <p>
              Manage website user details, update profile information,
              and maintain your user directory.
            </p>
          </div>
        </section>

        {/* MANAGEMENT SECTION */}
        <section className="user-management-section">
          <div className="user-management-container">
            <div className="user-management-toolbar">
              <div>
                <h2>Website Users</h2>
                <p>
                  {users.length} {users.length === 1 ? "user" : "users"} in
                  your directory
                </p>
              </div>

              <button
                type="button"
                className="user-add-button"
                onClick={handleAddUser}
              >
                <Plus size={18} />
                Add New User
              </button>
            </div>

            {/* ADD / EDIT FORM */}
            {showForm && (
              <div className="user-form-card">
                <div className="user-form-header">
                  <div>
                    <h3>
                      {editingUser ? "Edit User Details" : "Add New User"}
                    </h3>
                    <p>Enter the profile information below.</p>
                  </div>

                  <button
                    type="button"
                    className="user-close-button"
                    onClick={resetForm}
                    aria-label="Close form"
                  >
                    <X size={20} />
                  </button>
                </div>

                <form onSubmit={handleSaveUser}>
                  <div className="user-form-grid">
                    <div className="user-form-field">
                      <label htmlFor="user-name">Full Name</label>
                      <input
                        id="user-name"
                        type="text"
                        placeholder="Enter full name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                      />
                    </div>

                    <div className="user-form-field">
                      <label htmlFor="user-email">Email Address</label>
                      <input
                        id="user-email"
                        type="email"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="user-form-actions">
                    <button
                      type="button"
                      className="user-cancel-button"
                      onClick={resetForm}
                    >
                      Cancel
                    </button>

                    <button type="submit" className="user-save-button">
                      <Save size={16} />
                      {editingUser ? "Update User" : "Save User"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* USER TABLE */}
            <div className="user-table-card">
              <div className="user-table-wrapper">
                <table className="user-management-table">
                  <thead>
                    <tr>
                      <th>USER</th>
                      <th>EMAIL ADDRESS</th>
                      <th className="user-actions-heading">ACTIONS</th>
                    </tr>
                  </thead>

                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <div className="user-table-profile">
                            <div className="user-table-avatar">
                              {user.name
                                .split(" ")
                                .map((part) => part[0])
                                .join("")
                                .slice(0, 2)
                                .toUpperCase()}
                            </div>

                            <span>{user.name}</span>
                          </div>
                        </td>

                        <td>
                          <div className="user-table-email">
                            <Mail size={15} />
                            {user.email}
                          </div>
                        </td>

                        <td>
                          <div className="user-table-actions">
                            <button
                              type="button"
                              className="user-edit-button"
                              onClick={() => handleEditUser(user)}
                              title="Edit user"
                              aria-label={`Edit ${user.name}`}
                            >
                              <Pencil size={16} />
                            </button>

                            <button
                              type="button"
                              className="user-delete-button"
                              onClick={() => handleDeleteUser(user)}
                              title="Delete user"
                              aria-label={`Delete ${user.name}`}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}

                    {users.length === 0 && (
                      <tr>
                        <td colSpan={3} className="user-empty-state">
                          No users found. Click “Add New User” to create one.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default UserManagement;
