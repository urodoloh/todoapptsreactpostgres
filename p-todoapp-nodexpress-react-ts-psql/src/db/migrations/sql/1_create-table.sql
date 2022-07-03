CREATE TABLE todotype(
    name text UNIQUE,
    description text UNIQUE,
    status INTEGER DEFAULT 0
);
