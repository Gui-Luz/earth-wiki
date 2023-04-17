import pg from "../repository/user.repository.js";

async function postUser(user) {
    try {
        if (await pg.getUserByUsername(user.username)) {
            throw new Error("Username already in use.")
        } else if (await pg.getUserByEmail(user.email)) {
            throw new Error("Email already in use.")
        } else {
            user.role = "user";
            user.createdAt= new Date().toISOString();
            const id = await pg.insertUser(user)
            return id
        }
    } catch(err) {
        throw err;
    }
}

async function getUser(id) {
    try {
        const user = await pg.getUserById(id);
        return user
    } catch(err) {
        throw err;
    }
}

async function deleteUser(id) {
    try {
        const user = await pg.deleteUserById(id);
        return user
    } catch(err) {
        throw err;
    }
}

async function putUser(userOldInfo, userNewInfo) {
    try {
        const updatedInfo = {
            'firstName': (userNewInfo.firstName ? userNewInfo.firstName : user.first_name),
            'lastName': (userNewInfo.lastName ? userNewInfo.lastName : user.last_name),
            'username': (userNewInfo.username ? userNewInfo.username : user.username),
            'email': (userNewInfo.email ? userNewInfo.email : user.email),
        }
        const newUserInfo = await pg.updateUserById(userOldInfo.id, updatedInfo);
        const selectedKeys = ['id', 'username', 'last_name', 'first_name', 'email', 'role']
        const filteredInfo = Object.fromEntries(
            Object.entries(newUserInfo)
            .filter(([key]) => selectedKeys.includes(key))
        );
        return filteredInfo
    } catch(err) {
        throw err;
    }
}

async function getUsers() {
    try {
        const user = await pg.getUsers();
        return user
    } catch(err) {
        throw err;
    }
}

export default {
    postUser,
    getUser,
    deleteUser,
    putUser,
    getUsers
}