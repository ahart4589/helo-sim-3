SELECT ${username}
FROM users
WHERE ${id} = ${username}
RETURNING *;
