interface ParameterizedQuery {
    query: string;
    params: string[];
}

// Whitelist of allowed table names to prevent SQL injection
// Note: SQL identifiers (table names) cannot be parameterized with ? placeholders
const ALLOWED_TABLES = ['users', 'accounts', 'profiles'] as const;

function get_sql_query(tableName: string, username: string): ParameterizedQuery {
    // Validate table name against whitelist to prevent SQL injection
    if (!ALLOWED_TABLES.includes(tableName as any)) {
        throw new Error(`Invalid table name: ${tableName}. Allowed tables: ${ALLOWED_TABLES.join(', ')}`);
    }
    
    // Use parameterized query to prevent SQL injection for values
    // The ? placeholder will be replaced by the database driver with the escaped parameter
    return {
        query: `select * from ${tableName} where username = ?`,
        params: [username]
    };
}

function selectUser(username: string): ParameterizedQuery {
    const tableName = 'users';
    return get_sql_query(tableName, username);
}

// Named exports
export {
    get_sql_query,
    selectUser,
};

export default get_sql_query;
