function getSql(tableName: string, username: string) {
    return `select * from ${tableName} where username = '${username}'`;
}

function selectUser(username: string) {
    const tableName = 'users';
    return getSql(tableName, username);
}

export {
    getSql,
    selectUser,
}
