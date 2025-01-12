const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 5000;

app.use(express.json());

const FILE = "credentials.json";

// Load credentials
const loadCredentials = () => {
    if (!fs.existsSync(FILE)) return [];
    return JSON.parse(fs.readFileSync(FILE, "utf-8"));
};

// Save credentials
const saveCredentials = (data) => {
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
};

// Login route
app.post("/api/login", (req, res) => {
    const { mobile, password } = req.body;
    const credentials = loadCredentials();

    const user = credentials.find(
        (cred) => cred.mobile === mobile && cred.password === password
    );

    if (user) {
        res.json({ success: true, message: "Login successful" });
    } else {
        res.json({ success: false, message: "Invalid credentials" });
    }
});

// Register route
app.post("/api/register", (req, res) => {
    const { name, mobile, password } = req.body;
    const credentials = loadCredentials();

    if (credentials.some((cred) => cred.mobile === mobile)) {
        res.json({ success: false, message: "User already exists" });
        return;
    }

    credentials.push({ name, mobile, password });
    saveCredentials(credentials);
    res.json({ success: true, message: "Registration successful" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
