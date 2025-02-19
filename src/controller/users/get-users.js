import fs from 'fs';

export const getUsers = (req, res) => {
    const rawUserData = fs.readFileSync('src/db/users.json');
    res.send(JSON.parse(rawUserData));
}