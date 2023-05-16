const users = [{id: 1, username: 'admin', password: 'admin', firstName: 'chawki', lastName: 'Gasmi'}];

 const  authenticate = async ({username, password}) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const {password, ...userWithoutPassword} = user;
        return userWithoutPassword;
    }
}
module.exports = authenticate;
