// ======================================================
// Authentication Service
//
// Handles all authentication API requests.
//
// Functions:
// - login()
// - signup()
// - getCurrentUser()
//
// All requests go to the FastAPI backend.
// ======================================================

import { apiPost, apiGet } from "./api";

// ------------------------------------------------------
// Login existing user
// ------------------------------------------------------
export async function login(email, password) {
  return apiPost("/api/auth/login", {
    email,
    password,
  });
}

// ------------------------------------------------------
// Register a new user
// ------------------------------------------------------
export async function signup(username, email, password) {
  return apiPost("/api/auth/register", {
    username,
    email,
    password,
  });
}

// ------------------------------------------------------
// Get currently logged-in user
// Requires JWT token in localStorage
// ------------------------------------------------------
export async function getCurrentUser() {
  return apiGet("/api/auth/me");
}