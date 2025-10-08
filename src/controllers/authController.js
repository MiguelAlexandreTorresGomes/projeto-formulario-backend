import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";

// const registerAdmin = async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const admin = await User.create({
//             username,
//             password: hashedPassword
//         });
//         res.status(201).json({ admin });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        
        if (!user) return res.status(404).json({ message: "Admin não encontrado" });
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(401).json({ message: "Senha inválida" });
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export { registerAdmin, login };
