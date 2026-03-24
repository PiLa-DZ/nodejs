"use strict";
// *** 2. Using TypeScript with Express ***
// *** # Install required packages ***
// npm install express
// npm install --save-dev @types/express
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// In-memory database
let users = [];
// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});
// Add new user
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
