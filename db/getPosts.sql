SELECT p.*, u.name as author
FROM posts p
JOIN users u ON p.author_id = u.id;