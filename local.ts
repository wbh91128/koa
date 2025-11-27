function getSql(tableName) {
    console.log(tableName)
    console.log('debug start');
    return "select * from " + tableName + " where username = " + tableName";
}

function selectUser(username) {
    return getSql(username);
}

export {
    getSql
    selectUser
}
