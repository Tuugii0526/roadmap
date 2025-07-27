export const login = (req, res) => {
  try {
    const token = jwt.sign({ userId: "hi" }, "your-secret-key", {
      expiresIn: "1h",
    });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: "Login failed" });
  }
};
