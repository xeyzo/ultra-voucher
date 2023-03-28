SELECT child.id, child.name, parent.parent_name
FROM child
INNER JOIN parent
ON child.id=parent.id;