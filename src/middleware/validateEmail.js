import jwt from 'jsonwebtoken';

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export const validateEmailMiddleware = (req, res, next) => {
    const { email } = req.body

    if (validateEmail(email)) {
        next();
    } else {
        res.json({ message: "Invalid email" })
    }
}
