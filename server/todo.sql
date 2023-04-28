use kdt;

CREATE TABLE todo (
	id INT PRIMARY KEY NOT NULL auto_increment,
	title VARCHAR(100) NOT NULL,
    done TINYINT(1) NOT NULL DEFAULT 0
);
INSERT INTO todo VALUES(null, "집에 가야 돼", 0);
INSERT INTO todo VALUES(null, "저녁 뭐 먹지", 1);
INSERT INTO todo VALUES(null, "모르겠어", 0);
INSERT INTO todo VALUES(null, "음", 1);
INSERT INTO todo VALUES(null, "아", 0);
INSERT INTO todo VALUES(null, "오", 1);

use kdt;
DESC todo;
SELECT * FROM todo;