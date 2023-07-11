INSERT INTO `clinic`.doctors (`name`, `lastname`, `specialty`, `consultory`, `email`)
VALUES
('Ian', 'Thompson', 'Medicina interna', 303, 'it@asd.com'),
('Howard','Brody','Medicina general',102,'hb@asd.com'),
('Luise','Ahlers','Cardiologia',502,'lka@asd.com'),
('Hie','Kim','Rehabilitacion fisica',306,'hk@asd.com'),
('Jill','Pots','Dermatologia',401,'sf@asd.com'),
('Samuel','Falkoner','Radiologia',401,'sf@asd.com'),
('Shauna','Herrick','Psicologia',403,'sh@asd.com');

INSERT INTO `clinic`.patients(`name`, `cc`, `lastname`, `age`, `telephone`)
VALUES
('Akula',546548465,'Rabe',25,13543548),
('Dennis',987657354,'Krishna',71,6465845),
('Noemi',987321648,'Dosova',36,873215452);

INSERT INTO `clinic`.appointments(`cc`, `specialty`)
VALUES
(546548465,'Medicina interna'),
(987321648,'Cardiologia'),
(987657354,'Dermatologia');