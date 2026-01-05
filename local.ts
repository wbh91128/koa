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

// function logServer() {
//     console.log('debug');
//     console.log('LogServer');
// }

export function render(content) {
    const object = [];
    object.push('a');
    // console.log(object);
    const doc = document.querySelector('aada');
    doc.innerHTML(content);
}

export default getSql
