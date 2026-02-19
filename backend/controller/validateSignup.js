const ValidateSignup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json("all credentials are required");
  }
  if (username.length < 3) {
    return res.status(400).json("username must be more that three characters");
  }

  if (password.length < 6) {
    return res.status(400).json("password must contain at least 6 characters");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  next();
};

const ValidateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json("fill all the credentials");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "password must be at least 6 characters long" });
  }
  next();
};

export { ValidateSignup, ValidateLogin };
