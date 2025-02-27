import { UserModel } from '../../models/user.model.js';
import bcrypt from 'bcrypt';

export const createUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const encryptedPassword = await bcrypt.hash(password, 10);

        await UserModel.create({ email, password: encryptedPassword });

        res.json({ message: 'Success' })
    } catch (err) {
        res.status(403).json({ message: "Error occured" });
    }
}
