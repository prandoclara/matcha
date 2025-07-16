export interface RegisterData {
  email: string;
  username: string; // ← ajouté
  firstname: string;
  lastname: string;
  password: string;
}

export async function registerUser(data: RegisterData): Promise<void> {
  const response = await fetch("http://localhost:8001/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data), // `data` contient maintenant `username`
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || "Registration failed");
  }
}
