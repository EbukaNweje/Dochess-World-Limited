"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Product = {
  _id?: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
};

type LoginForm = {
  username: string;
  password: string;
};

const ADMIN_USERNAME: string =
  process.env.NEXT_PUBLIC_ADMIN_USERNAME ?? "Dochess World";
const ADMIN_PASSWORD: string =
  process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "@dochess123";
const STORAGE_KEY: string =
  process.env.NEXT_PUBLIC_STORAGE_KEY ?? "dochess-admin-logged-in";

async function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to read file"));
      }
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<Product>({
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
  });
  const [selectedImageName, setSelectedImageName] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: "",
    password: "",
  });

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      window.localStorage.setItem(STORAGE_KEY, "true");
      fetchProducts();
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, [loggedIn]);

  async function fetchProducts() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to load products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (
      loginForm.username === ADMIN_USERNAME &&
      loginForm.password === ADMIN_PASSWORD
    ) {
      setLoggedIn(true);
      setLoginForm({ username: "", password: "" });
      return;
    }

    setError("Incorrect username or password.");
  }

  function handleLogout() {
    setLoggedIn(false);
    setProducts([]);
    setEditingId(null);
    setForm({ name: "", description: "", price: 0, imageUrl: "" });
    setSelectedImageName("");
    setError(null);
  }

  async function createProduct(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      if (editingId) return await updateProduct();
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to create product");
      await res.json();
      setForm({ name: "", description: "", price: 0, imageUrl: "" });
      setSelectedImageName("");
      await fetchProducts();
    } catch (err) {
      setError((err as Error).message);
    }
  }

  async function deleteProduct(id: string) {
    setError(null);
    try {
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete product");
      await fetchProducts();
    } catch (err) {
      setError((err as Error).message);
    }
  }

  function startEdit(p: Product) {
    setEditingId(p._id || null);
    setForm({
      name: p.name,
      description: p.description,
      price: p.price,
      imageUrl: p.imageUrl,
    });
  }

  async function updateProduct() {
    if (!editingId) return;
    setError(null);
    try {
      const res = await fetch("/api/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingId, ...form }),
      });
      if (!res.ok) throw new Error("Failed to update product");
      await res.json();
      setEditingId(null);
      setForm({ name: "", description: "", price: 0, imageUrl: "" });
      setSelectedImageName("");
      await fetchProducts();
    } catch (err) {
      setError((err as Error).message);
    }
  }

  if (!loggedIn) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#f7f8fb",
          color: "#111",
          padding: 24,
        }}
      >
        <div
          style={{
            maxWidth: 540,
            margin: "0 auto",
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 20px 60px rgba(15, 23, 42, 0.12)",
            padding: 28,
          }}
        >
          <h1 style={{ marginBottom: 16, fontSize: 32 }}>Admin Login</h1>
          <p style={{ marginBottom: 24, color: "#444" }}>
            Enter admin credentials to manage products. Your login stays active
            after page reload.
          </p>
          {error && (
            <div
              style={{
                marginBottom: 18,
                padding: 14,
                borderRadius: 12,
                background: "#ffe5e5",
                color: "#8b0000",
              }}
            >
              {error}
            </div>
          )}

          <form
            onSubmit={handleLogin}
            style={{ display: "grid", gap: 16, marginTop: 8 }}
          >
            <label style={{ display: "grid", gap: 8 }}>
              <span style={{ fontWeight: 600 }}>Username</span>
              <input
                style={{
                  width: "100%",
                  padding: 12,
                  borderRadius: 10,
                  border: "1px solid #d1d5db",
                  outline: "none",
                  fontSize: 16,
                }}
                value={loginForm.username}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, username: e.target.value })
                }
                required
              />
            </label>

            <label style={{ display: "grid", gap: 8 }}>
              <span style={{ fontWeight: 600 }}>Password</span>
              <input
                type="password"
                style={{
                  width: "100%",
                  padding: 12,
                  borderRadius: 10,
                  border: "1px solid #d1d5db",
                  outline: "none",
                  fontSize: 16,
                }}
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
                required
              />
            </label>

            <button
              type="submit"
              style={{
                padding: "14px 20px",
                borderRadius: 10,
                border: "none",
                background: "#0f172a",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              Sign in
            </button>
          </form>

          {/* <p style={{ marginTop: 24, color: "#666" }}>
            Use <strong>{ADMIN_USERNAME}</strong> /{" "}
            <strong>{ADMIN_PASSWORD}</strong> to sign in.
          </p> */}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f8fb",
        color: "#111",
        padding: 24,
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 20px 60px rgba(15, 23, 42, 0.12)",
          padding: 28,
        }}
      >
        <div
          style={{
            marginBottom: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ marginBottom: 8, fontSize: 32 }}>Admin — Products</h1>
            <p style={{ margin: 0, color: "#444" }}>
              Logged in as <strong>admin</strong>. Your session stays active on
              reload.
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            style={{
              padding: "12px 18px",
              borderRadius: 10,
              border: "1px solid #d1d5db",
              background: "#fff",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            Log out
          </button>
        </div>

        {error && (
          <div
            style={{
              marginBottom: 18,
              padding: 14,
              borderRadius: 12,
              background: "#ffe5e5",
              color: "#8b0000",
            }}
          >
            {error}
          </div>
        )}

        <form
          onSubmit={createProduct}
          style={{
            display: "grid",
            gap: 12,
            marginBottom: 28,
            padding: 20,
            border: "1px solid #e5e7eb",
            borderRadius: 16,
            background: "#fafafa",
          }}
        >
          <div style={{ display: "grid", gap: 8 }}>
            <label style={{ fontWeight: 600 }}>Name</label>
            <input
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 10,
                border: "1px solid #d1d5db",
                outline: "none",
                fontSize: 16,
              }}
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div style={{ display: "grid", gap: 8 }}>
            <label style={{ fontWeight: 600 }}>Description</label>
            <input
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 10,
                border: "1px solid #d1d5db",
                outline: "none",
                fontSize: 16,
              }}
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>

          <div style={{ display: "grid", gap: 8 }}>
            <label style={{ fontWeight: 600 }}>Price</label>
            <input
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 10,
                border: "1px solid #d1d5db",
                outline: "none",
                fontSize: 16,
              }}
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: Number(e.target.value) })
              }
              required
            />
          </div>

          <div style={{ display: "grid", gap: 8 }}>
            <label style={{ fontWeight: 600 }}>Product Image File</label>
            <input
              type="file"
              accept="image/*"
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 10,
                border: "1px solid #d1d5db",
                outline: "none",
                fontSize: 16,
              }}
              onChange={async (e) => {
                const file = e.currentTarget.files?.[0];
                if (!file) return;
                try {
                  const dataUrl = await readFileAsDataUrl(file);
                  setForm({ ...form, imageUrl: dataUrl });
                  setSelectedImageName(file.name);
                } catch (error) {
                  setError((error as Error).message);
                }
              }}
            />
            {selectedImageName && (
              <span style={{ color: "#555", fontSize: 14 }}>
                Selected file: {selectedImageName}
              </span>
            )}
            {form.imageUrl && (
              <div style={{ marginTop: 10 }}>
                <Image
                  src={form.imageUrl}
                  alt="Preview"
                  width={120}
                  height={80}
                  style={{
                    objectFit: "cover",
                    borderRadius: 10,
                    border: "1px solid #d1d5db",
                  }}
                  unoptimized={form.imageUrl.startsWith("data:")}
                />
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              type="submit"
              style={{
                padding: "12px 20px",
                minWidth: 150,
                borderRadius: 10,
                border: "none",
                background: "#0f172a",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              {editingId ? "Update" : "Create"} Product
            </button>
            {editingId && (
              <button
                type="button"
                style={{
                  padding: "12px 20px",
                  minWidth: 150,
                  borderRadius: 10,
                  border: "1px solid #cbd5e1",
                  background: "#fff",
                  color: "#0f172a",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setEditingId(null);
                  setForm({
                    name: "",
                    description: "",
                    price: 0,
                    imageUrl: "",
                  });
                  setSelectedImageName("");
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <section>
          <div
            style={{
              marginBottom: 16,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ margin: 0, fontSize: 22 }}>All Products</h2>
            {loading && <span style={{ color: "#555" }}>Loading…</span>}
          </div>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: 700,
              }}
            >
              <thead>
                <tr style={{ background: "#f3f4f6" }}>
                  <th style={{ textAlign: "left", padding: 12 }}>Name</th>
                  <th style={{ textAlign: "left", padding: 12 }}>
                    Description
                  </th>
                  <th style={{ textAlign: "left", padding: 12 }}>Price</th>
                  <th style={{ textAlign: "left", padding: 12 }}>Image</th>
                  <th style={{ textAlign: "left", padding: 12 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 && !loading ? (
                  <tr>
                    <td
                      colSpan={5}
                      style={{
                        padding: 20,
                        textAlign: "center",
                        color: "#555",
                      }}
                    >
                      No products yet. Add one using the form above.
                    </td>
                  </tr>
                ) : (
                  products.map((p) => (
                    <tr
                      key={p._id}
                      style={{ borderBottom: "1px solid #e5e7eb" }}
                    >
                      <td style={{ padding: 12 }}>{p.name}</td>
                      <td
                        style={{
                          padding: 12,
                          maxWidth: 280,
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {p.description}
                      </td>
                      <td style={{ padding: 12 }}>₦{p.price}</td>
                      <td style={{ padding: 12 }}>
                        {p.imageUrl ? (
                          <Image
                            src={p.imageUrl}
                            alt={p.name}
                            width={90}
                            height={60}
                            style={{
                              objectFit: "cover",
                              borderRadius: 10,
                              border: "1px solid #d1d5db",
                            }}
                            unoptimized={p.imageUrl.startsWith("data:")}
                          />
                        ) : (
                          <span style={{ color: "#777" }}>No image</span>
                        )}
                      </td>
                      <td
                        style={{
                          padding: 12,
                          display: "flex",
                          gap: 10,
                          flexWrap: "wrap",
                        }}
                      >
                        <button
                          style={{
                            padding: "8px 14px",
                            borderRadius: 8,
                            border: "1px solid #3b82f6",
                            background: "#fff",
                            color: "#0f172a",
                            cursor: "pointer",
                          }}
                          onClick={() => startEdit(p)}
                        >
                          Edit
                        </button>
                        <button
                          style={{
                            padding: "8px 14px",
                            borderRadius: 8,
                            border: "1px solid #ef4444",
                            background: "#fff",
                            color: "#b91c1c",
                            cursor: "pointer",
                          }}
                          onClick={() => p._id && deleteProduct(p._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
