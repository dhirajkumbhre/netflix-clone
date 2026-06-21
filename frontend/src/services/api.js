const API = "http://localhost:8000/api";

export async function apiGet(path) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API}${path}`, {
    headers: { Authorization: token },
  });
  return res.json();
}

export async function apiPost(path, body = {}) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(body),
  });
  return res.json();
}