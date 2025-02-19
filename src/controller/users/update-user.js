import fs from 'fs';

export const updateUser = (req, res) => {
    // body medeellee avaj baigaa
    const { username, firstname } = req.body;

    // users iin data unshij baigaa
    const rawUserData = fs.readFileSync('src/db/users.json');
    const users = JSON.parse(rawUserData);

    // uurchlult hiij baigaa
    const newUsersData = users.map((cur) => {
        if (cur.username === username)
            return { ...cur, firstname };

        return cur;
    })

    // uurchlultuu hadgalj baigaa
    fs.writeFileSync('src/db/users.json', JSON.stringify(newUsersData));

    // hariu
    res.json({ message: "Success!" })
}