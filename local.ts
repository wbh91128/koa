function getSql(tableName:string) {
    return "select * from " + tableName + " where username = " + tableName";
}

export default getSql
