import { apiPost } from "./api";

export async function login(email, password) {
  return apiPost("/auth/login", { email, password });
}

export async function signup(email, password) {
  return apiPost("/auth/signup", { email, password });
}