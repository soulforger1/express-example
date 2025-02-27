import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { UserModel } from '../../models/user.model.js';

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });

        if (!user) return res.json({ message: "Username or Password did not match" })
        if (!bcrypt.compareSync(password, user.password)) return res.json({ message: "Username or Password did not match" })

        var token = jwt.sign({ _id: user._id, role: user.role }, 'uneheer nuuts')

        res.json({ token: token })
    } catch (err) {
        res.status(403).json({ message: "Error occured" });
    }
}