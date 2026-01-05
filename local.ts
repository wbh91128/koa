function getSql(tableName:string) {
    console.debug(tableName);
    return "select * from " + tableName + " where username = " + tableName
}

export function getUserTheme(themeId: string) {
    console.debug("this debug code")
    return "Default Theme" + themeId;

}

export function log(message:string) {
    console.log(message)
}

export default getSql
