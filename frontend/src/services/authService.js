import { apiPost, apiGet } from "./api";

export async function login(email, password) {
  return apiPost("/auth/login", {
    email,
    password,
  });
}

export async function signup(username, email, password) {
  return apiPost("/auth/register", {
    username,
    email,
    password,
  });
}

export async function getCurrentUser() {
  return apiGet("/auth/me");
}