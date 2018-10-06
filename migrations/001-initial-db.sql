-- Up
CREATE TABLE "posts" ( "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, "type" TEXT NOT NULL, "title" TEXT, "content" TEXT, "url" TEXT, "created" TEXT, "updated" TEXT, "tags" TEXT, "slug" TEXT, UNIQUE("id" ASC));
CREATE TABLE "settings" ("key" TEXT PRIMARY KEY, "value" TEXT, UNIQUE("key"));
INSERT INTO settings (key, value) VALUES ("name","John Doe"),("site","https://doe.no");

-- Down
DROP TABLE posts
DROP TABLE settings
