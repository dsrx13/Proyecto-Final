-- 1. Consultar todos los perfumes en la base de datos
SELECT * FROM perfumes_masculinos;

-- 2. Consultar todos los perfumes de calidad 'Alta'
SELECT * FROM perfumes_masculinos WHERE calidad = 'Alta';

-- 3. Consultar perfumes cuyo precio sea mayor a 80
SELECT * FROM perfumes_masculinos WHERE precio > 80;

-- 4. Consultar perfumes que contengan la palabra "amaderado" en la descripción
SELECT * FROM perfumes_masculinos WHERE descripcion LIKE '%amaderado%';

-- 5. Consultar el perfume más caro
SELECT * FROM perfumes_masculinos ORDER BY precio DESC LIMIT 1;

-- 6. Consultar el perfume más barato
SELECT * FROM perfumes_masculinos ORDER BY precio ASC LIMIT 1;

-- 7. Contar cuántos perfumes existen en cada nivel de calidad
SELECT calidad, COUNT(*) AS cantidad FROM perfumes_masculinos GROUP BY calidad;

-- 8. Consultar todos los perfumes que cuestan entre 50 y 100
SELECT * FROM perfumes_masculinos WHERE precio BETWEEN 50 AND 100;

-- 9. Consultar los perfumes cuyo nombre contiene la palabra "Chanel"
SELECT * FROM perfumes_masculinos WHERE nombre LIKE '%Chanel%';

-- 10. Actualizar el precio de un perfume específico
UPDATE perfumes_masculinos SET precio = 95.00 WHERE id = 2;

-- 11. Eliminar un perfume específico por ID
DELETE FROM perfumes_masculinos WHERE id = 29;

-- 12. Insertar un nuevo perfume
INSERT INTO perfumes_masculinos (id, nombre, descripcion, precio, calidad) 
VALUES (31, 'New Perfume', 'Descripción de nuevo perfume', 85.50, 'Alta');

-- 13. Consultar los perfumes con nombre que empiece con 'A'
SELECT * FROM perfumes_masculinos WHERE nombre LIKE 'A%';

-- 14. Consultar los perfumes con nombre que termine en 'e'
SELECT * FROM perfumes_masculinos WHERE nombre LIKE '%e';

-- 15. Consultar los 5 perfumes más caros
SELECT * FROM perfumes_masculinos ORDER BY precio DESC LIMIT 5;

-- 16. Consultar todos los perfumes que no sean de calidad 'Baja'
SELECT * FROM perfumes_masculinos WHERE calidad != 'Baja';

-- 17. Consultar perfumes cuyo nombre no contiene la palabra 'Dior'
SELECT * FROM perfumes_masculinos WHERE nombre NOT LIKE '%Dior%';

-- 18. Consultar perfumes que tienen la palabra 'floral' en su descripción
SELECT * FROM perfumes_masculinos WHERE descripcion LIKE '%floral%';

-- 19. Consultar perfumes de calidad 'Alta' ordenados por precio ascendente
SELECT * FROM perfumes_masculinos WHERE calidad = 'Alta' ORDER BY precio ASC;

-- 20. Actualizar la calidad de un perfume específico
UPDATE perfumes_masculinos SET calidad = 'Alta' WHERE id = 19;
