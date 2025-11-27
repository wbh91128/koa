function getSql(tableName, username) {
    console.log(tableName)
    console.log('debug start');
    // Basic SQL injection prevention: escape single quotes
    const escapedUsername = username.replace(/'/g, "''");
    return "select * from " + tableName + " where username = '" + escapedUsername + "'";
}

function selectUser(username) {
    return getSql('users', username);
}

export {
    getSql,
    selectUser
}
