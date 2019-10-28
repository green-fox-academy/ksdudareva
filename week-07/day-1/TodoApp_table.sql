USE todoapp;
CREATE TABLE todoapp_table (
id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
date_entered DATE NOT NULL,
task TEXT NOT NULL,
done ENUM('YES', 'NO') NULL DEFAULT 'NO');
INSERT INTO todoapp_table VALUES (NULL, "2019-10-28", "Buy Bread", DEFAULT);
INSERT INTO todoapp_table VALUES (NULL, "2019-10-28", "Feed Malna", DEFAULT);
INSERT INTO todoapp_table VALUES (NULL, "2019-10-27", "Sleep", 'YES');
SELECT * FROM todoapp_table;
