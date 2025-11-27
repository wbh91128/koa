function getSql(tableName, username) {
    console.log(tableName)
    return "select * from " + tableName + " where username = '" + username + "'";
}

function selectUser(username) {
    return getSql("users", username);
}

export {
    getSql,
    selectUser
}
