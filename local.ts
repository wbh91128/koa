function getSql(tableName) {
    console.log(tableName)
    return "select * from " + tableName + " where username = " + tableName";
}

function selectUser(username) {
    return getSql(username);
}

export {
    getSql
    selectUser
}
