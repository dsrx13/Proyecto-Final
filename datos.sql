-- Crear la tabla para los perfumes masculinos
CREATE TABLE perfumes_masculinos (
    id INT PRIMARY KEY,
    nombre VARCHAR(255),
    descripcion TEXT,
    precio DECIMAL(10, 2),
    calidad VARCHAR(50)
);

-- Insertar los datos en la tabla perfumes_masculinos
INSERT INTO perfumes_masculinos (id, nombre, descripcion, precio, calidad) VALUES
(1, 'Dior Sauvage', 'Aroma fresco y amaderado con notas de bergamota y ámbar', 89.99, 'Alta'),
(2, 'Bleu de Chanel', 'Perfume amaderado y aromático, ideal para la noche', 99.99, 'Alta'),
(3, 'Acqua di Giò', 'Fragancia cítrica y marina, inspirada en el mar Mediterráneo', 79.99, 'Media'),
(4, 'Hugo Boss Bottled', 'Aroma cálido con toques de manzana y canela', 69.99, 'Media'),
(5, 'Paco Rabanne 1 Million', 'Perfume especiado con notas de cuero y canela', 74.99, 'Alta'),
(6, 'Versace Eros', 'Fragancia dulce y oriental con toques de vainilla', 84.99, 'Alta'),
(7, 'Lacoste Blanc', 'Aroma fresco y limpio, perfecto para el día', 59.99, 'Media'),
(8, 'Jean Paul Gaultier Le Male', 'Perfume oriental y fresco con lavanda y menta', 89.50, 'Alta'),
(9, 'Yves Saint Laurent Y', 'Fragancia amaderada y especiada, elegante y moderna', 92.99, 'Alta'),
(10, 'Carolina Herrera 212 Men', 'Aroma urbano con notas cítricas y amaderadas', 68.99, 'Media'),
(11, 'Bvlgari Man in Black', 'Perfume cálido y especiado con notas de ron y cuero', 94.99, 'Alta'),
(12, 'Dolce & Gabbana The One', 'Fragancia elegante con toques de tabaco y jengibre', 85.50, 'Alta'),
(13, 'Gucci Guilty', 'Aroma floral y amaderado, sofisticado y moderno', 87.99, 'Alta'),
(14, 'Armani Code', 'Perfume oriental con notas de anís estrellado y cuero', 91.00, 'Alta'),
(15, 'Calvin Klein Eternity', 'Aroma fresco y cítrico con un toque floral', 49.99, 'Media'),
(16, 'Tom Ford Noir', 'Perfume intenso y especiado, ideal para la noche', 120.99, 'Alta'),
(17, 'Prada Luna Rossa', 'Fragancia cítrica y fresca con un toque de lavanda', 79.00, 'Media'),
(18, 'Creed Aventus', 'Fragancia frutal y amaderada con notas de piña y abedul', 325.00, 'Alta'),
(19, 'Bentley for Men Intense', 'Aroma especiado y cálido con toques de ron y cuero', 45.99, 'Media'),
(20, 'Zara Vibrant Leather', 'Fragancia cítrica y amaderada, fresca y moderna', 29.95, 'Media'),
(21, 'Jaguar Classic Black', 'Aroma aromático y fresco con notas de mandarina y musgo', 25.00, 'Baja'),
(22, 'Cartier Declaration', 'Perfume cítrico y especiado con notas de madera y cuero', 79.99, 'Alta'),
(23, 'Azzaro Chrome', 'Fragancia fresca y acuática, ideal para el día a día', 55.00, 'Media'),
(24, 'Fahrenheit by Dior', 'Aroma floral y amaderado con notas de cuero y violeta', 105.00, 'Alta'),
(25, 'Loewe Solo', 'Fragancia cálida y especiada con toques cítricos', 85.00, 'Alta'),
(26, 'Kenneth Cole Black', 'Aroma fresco y especiado con notas de menta y jengibre', 35.99, 'Media'),
(27, 'Coach For Men', 'Fragancia amaderada y fresca con notas de pera y ámbar', 69.99, 'Media'),
(28, 'Boucheron Jaipur Homme', 'Perfume oriental y especiado con toques de canela', 49.99, 'Media'),
(29, 'Ted Lapidus Pour Homme', 'Aroma amaderado y especiado con notas de miel y lavanda', 30.00, 'Baja'),
(30, 'Abercrombie & Fitch Fierce', 'Fragancia cítrica y amaderada, juvenil y fresca', 75.00, 'Media');
