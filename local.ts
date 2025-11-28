interface ParameterizedQuery {
    query: string;
    params: string[];
}

function getSql(tableName: string, username: string): ParameterizedQuery {
    // Use parameterized query to prevent SQL injection
    // The ? placeholder will be replaced by the database driver with the escaped parameter
    return {
        query: `select * from ${tableName} where username = ?`,
        params: [username]
    };
}

function selectUser(username: string): ParameterizedQuery {
    const tableName = 'users';
    return getSql(tableName, username);
}

export {
    getSql,
    selectUser,
}
