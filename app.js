const productForm = document.getElementById("productForm");
const productTable = document.getElementById("productTable").getElementsByTagName("tbody")[0];
const productIdInput = document.getElementById("productId");
const productNameInput = document.getElementById("productName");
const productDescriptionInput = document.getElementById("productDescription");
const productPriceInput = document.getElementById("productPrice");
const searchNameInput = document.getElementById("searchName");
const sortOrderInput = document.getElementById("sortOrder");

let products = [];

// Simulación de la carga de productos
const loadProducts = () => {
    products = [
        { "id": 1, "nombre": "Dior Sauvage", "descripcion": "Aroma fresco y amaderado con notas de bergamota y ámbar", "precio": 89.99 },
        { "id": 2, "nombre": "Bleu de Chanel", "descripcion": "Perfume amaderado y aromático, ideal para la noche", "precio": 99.99 },
        { "id": 3, "nombre": "Acqua di Giò", "descripcion": "Fragancia cítrica y marina, inspirada en el mar Mediterráneo", "precio": 79.99 },
        { "id": 4, "nombre": "Hugo Boss Bottled", "descripcion": "Aroma cálido con toques de manzana y canela", "precio": 69.99, "calidad": "Media" },
        { "id": 5, "nombre": "Paco Rabanne 1 Million", "descripcion": "Perfume especiado con notas de cuero y canela", "precio": 74.99, "calidad": "Alta" },
        { "id": 6, "nombre": "Versace Eros", "descripcion": "Fragancia dulce y oriental con toques de vainilla", "precio": 84.99, "calidad": "Alta" },
        { "id": 7, "nombre": "Lacoste Blanc", "descripcion": "Aroma fresco y limpio, perfecto para el día", "precio": 59.99, "calidad": "Media" },
        { "id": 8, "nombre": "Jean Paul Gaultier Le Male", "descripcion": "Perfume oriental y fresco con lavanda y menta", "precio": 89.50, "calidad": "Alta" },
        { "id": 9, "nombre": "Yves Saint Laurent Y", "descripcion": "Fragancia amaderada y especiada, elegante y moderna", "precio": 92.99, "calidad": "Alta" },
        { "id": 10, "nombre": "Carolina Herrera 212 Men", "descripcion": "Aroma urbano con notas cítricas y amaderadas", "precio": 68.99, "calidad": "Media" },
        { "id": 11, "nombre": "Bvlgari Man in Black", "descripcion": "Perfume cálido y especiado con notas de ron y cuero", "precio": 94.99, "calidad": "Alta" },
        { "id": 12, "nombre": "Dolce & Gabbana The One", "descripcion": "Fragancia elegante con toques de tabaco y jengibre", "precio": 85.50, "calidad": "Alta" },
        { "id": 13, "nombre": "Gucci Guilty", "descripcion": "Aroma floral y amaderado, sofisticado y moderno", "precio": 87.99, "calidad": "Alta" },
        { "id": 14, "nombre": "Armani Code", "descripcion": "Perfume oriental con notas de anís estrellado y cuero", "precio": 91.00, "calidad": "Alta" },
        { "id": 15, "nombre": "Calvin Klein Eternity", "descripcion": "Aroma fresco y cítrico con un toque floral", "precio": 49.99, "calidad": "Media" },
        { "id": 16, "nombre": "Tom Ford Noir", "descripcion": "Perfume intenso y especiado, ideal para la noche", "precio": 120.99, "calidad": "Alta" },
        { "id": 17, "nombre": "Prada Luna Rossa", "descripcion": "Fragancia cítrica y fresca con un toque de lavanda", "precio": 79.00, "calidad": "Media" },
        { "id": 18, "nombre": "Creed Aventus", "descripcion": "Fragancia frutal y amaderada con notas de piña y abedul", "precio": 325.00, "calidad": "Alta" },
        { "id": 19, "nombre": "Bentley for Men Intense", "descripcion": "Aroma especiado y cálido con toques de ron y cuero", "precio": 45.99, "calidad": "Media" },
        { "id": 20, "nombre": "Zara Vibrant Leather", "descripcion": "Fragancia cítrica y amaderada, fresca y moderna", "precio": 29.95, "calidad": "Media" },
        { "id": 21, "nombre": "Jaguar Classic Black", "descripcion": "Aroma aromático y fresco con notas de mandarina y musgo", "precio": 25.00, "calidad": "Baja" },
        { "id": 22, "nombre": "Cartier Declaration", "descripcion": "Perfume cítrico y especiado con notas de madera y cuero", "precio": 79.99, "calidad": "Alta" },
        { "id": 23, "nombre": "Azzaro Chrome", "descripcion": "Fragancia fresca y acuática, ideal para el día a día", "precio": 55.00, "calidad": "Media" },
        { "id": 24, "nombre": "Fahrenheit by Dior", "descripcion": "Aroma floral y amaderado con notas de cuero y violeta", "precio": 105.00, "calidad": "Alta" },
        { "id": 25, "nombre": "Loewe Solo", "descripcion": "Fragancia cálida y especiada con toques cítricos", "precio": 85.00, "calidad": "Alta" },
        { "id": 26, "nombre": "Kenneth Cole Black", "descripcion": "Aroma fresco y especiado con notas de menta y jengibre", "precio": 35.99, "calidad": "Media" },
        { "id": 27, "nombre": "Coach For Men", "descripcion": "Fragancia amaderada y fresca con notas de pera y ámbar", "precio": 69.99, "calidad": "Media" },
        { "id": 28, "nombre": "Boucheron Jaipur Homme", "descripcion": "Perfume oriental y especiado con toques de canela", "precio": 49.99, "calidad": "Media" },
        { "id": 29, "nombre": "Ted Lapidus Pour Homme", "descripcion": "Aroma amaderado y especiado con notas de miel y lavanda", "precio": 30.00, "calidad": "Baja" },
        { "id": 30, "nombre": "Abercrombie & Fitch Fierce", "descripcion": "Fragancia cítrica y amaderada, juvenil y fresca", "precio": 75.00, "calidad": "Media" }
    ];
    displayProducts(); // Mostrar los productos al cargar la página
};

// Mostrar productos en la tabla
const displayProducts = () => {
    const order = sortOrderInput.value;
    const sortedProducts = [...products].sort((a, b) => {
        if (order === 'asc') {
            return a.nombre.localeCompare(b.nombre); // Orden ascendente
        } else {
            return b.nombre.localeCompare(a.nombre); // Orden descendente
        }
    });

    // Limpiar la tabla antes de agregar productos
    productTable.innerHTML = "";

    // Insertar productos en la tabla
    sortedProducts.forEach(product => {
        const row = productTable.insertRow();
        row.setAttribute("data-id", product.id);
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.nombre}</td>
            <td>${product.descripcion}</td>
            <td>${product.precio}</td>
            <td>
                <button onclick="editProduct(${product.id})">Editar</button>
                <button onclick="deleteProduct(${product.id})">Eliminar</button>
            </td>
        `;
    });
};

// Manejar el envío del formulario de productos (crear/editar)
const handleProductFormSubmit = (e) => {
    e.preventDefault();
    const name = productNameInput.value;
    const description = productDescriptionInput.value;
    const price = parseFloat(productPriceInput.value);

    const productId = productIdInput.value;
    if (productId) {
        // Editar producto existente
        const product = products.find(p => p.id == productId);
        if (product) {
            product.nombre = name;
            product.descripcion = description;
            product.precio = price;
        }
    } else {
        // Agregar nuevo producto
        const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({ id: newId, nombre: name, descripcion: description, precio: price });
    }
    displayProducts(); // Mostrar los productos actualizados
    productForm.reset();
    productIdInput.value = "";
};

// Editar producto
const editProduct = (id) => {
    const product = products.find(p => p.id === id);
    if (product) {
        productIdInput.value = product.id;
        productNameInput.value = product.nombre;
        productDescriptionInput.value = product.descripcion;
        productPriceInput.value = product.precio;
    }
};

// Eliminar producto
const deleteProduct = (id) => {
    products = products.filter(p => p.id !== id);
    displayProducts(); // Mostrar los productos actualizados
};

// Filtrar productos por nombre
const filterProducts = () => {
    const searchTerm = searchNameInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.nombre.toLowerCase().includes(searchTerm));
    displayFilteredProducts(filteredProducts);
};

// Mostrar productos filtrados
const displayFilteredProducts = (filteredProducts) => {
    productTable.innerHTML = "";
    filteredProducts.forEach(product => {
        const row = productTable.insertRow();
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.nombre}</td>
            <td>${product.descripcion}</td>
            <td>${product.precio}</td>
            <td>
                <button onclick="editProduct(${product.id})">Editar</button>
                <button onclick="deleteProduct(${product.id})">Eliminar</button>
            </td>
        `;
    });
};

// Eventos
productForm.addEventListener("submit", handleProductFormSubmit);
searchNameInput.addEventListener("input", filterProducts);
sortOrderInput.addEventListener("change", displayProducts);

// Inicializar productos al cargar la página
loadProducts();
