use kdt;

CREATE TABLE todo (
	id INT PRIMARY KEY NOT NULL auto_increment,
	title VARCHAR(100) NOT NULL,
    done TINYINT(1) NOT NULL DEFAULT 0
);
INSERT INTO todo (title, done) VALUES("집에 가야 돼", 1);

use kdt;
DESC todo;
SELECT * FROM todo;