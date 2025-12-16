// =======================
// Pantallas
// =======================
const screens = {
  login: document.getElementById('screen-login'),
  address: document.getElementById('screen-address'),
  products: document.getElementById('screen-products'),
  cart: document.getElementById('screen-cart'),
  detail: document.getElementById('screen-detail'),
  user: document.getElementById('screen-user')
};

// =======================
// Elementos principales
// =======================
const authForm = document.getElementById('auth-form');
const addressForm = document.getElementById('address-form');
const productsGrid = document.getElementById('products-grid');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');

const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-search');
const categoryFilter = document.getElementById('category-filter');

const backFromCart = document.getElementById('back-to-products-from-cart');
const backFromDetail = document.getElementById('back-to-products');
const backFromUser = document.getElementById('back-to-products-from-user');
const userBtn = document.getElementById('user-btn');

const userAddressText = document.getElementById('user-address-text');
const userEmailText = document.getElementById('user-email-text');

// =======================
// Variables de estado
// =======================
let currentUser = null;
let currentAddress = null;
let cart = [];

let products = [
        {
        id: 1,
        name: "Licuadora",
        description: "Licuadora eléctrica de alta potencia para preparar jugos y batidos",
        price: 180000,
        category: "electrodomésticos",
        img: "https://osterco.vtexassets.com/arquivos/ids/164689-800-auto?v=638803307603370000&width=800&height=auto&aspect=true"
    },
    {
        id: 2,
        name: "Cafetera eléctrica",
        description: "Cafetera automática para preparar café rápidamente",
        price: 220000,
        category: "electrodomésticos",
        img: "https://www.fuller.com.co/cdn/shop/files/cafetera-electrica-6-tazas-cafe-city-imusa.png?v=1731079753"
    },
    {
        id: 3,
        name: "Olla arrocera",
        description: "Olla eléctrica para cocinar arroz de manera uniforme",
        price: 150000,
        category: "electrodomésticos",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxMneivt1rwXs-RN-tQqwkpoGiKmpR-NiwpZISvjPRGQsIsEjfQxUE-z2vp1RDHtQ7H7IjN0Pt2Fh3iZnAg9Iebec5geGw7MWtBeVKsYmSPC--bkHfb6fmIw"
    },
    {
        id: 4,
        name: "Sanduchera",
        description: "Sanduchera eléctrica para preparar sándwiches calientes",
        price: 120000,
        category: "electrodomésticos",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQfCw4DoZq_qeqKPcJ4BbXMjSsgaMY7L6a54-AISYPrSz2pcAb6xPlsqTiZUO-qbxMQSbWeP2t2xoPJiGMGmFodBfdMTeXf50EZ6S1SkjlrGhnDzFHjC6RC5xE"
    },
    {
        id: 5,
        name: "Batidora de mano",
        description: "Batidora ligera para mezclar y batir ingredientes",
        price: 95000,
        category: "electrodomésticos",
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSvu3ltZUb33uOTbDRjO0HJ9jpQPo7tpjZNH-JxhnRPYh4XcMeqK25snr-zR9_N621Q3p4W2KxallP88PtSWtV2MHCmO7rHc5P0lbB-rMU"
    },
    {
        id: 6,
        name: "Plancha eléctrica",
        description: "Plancha de vapor para mantener tu ropa impecable",
        price: 130000,
        category: "electrodomésticos",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZnBcpsIGCdUPMlX1jIWa-OUqUEzEnVOUjg&s"
    },
    {
        id: 7,
        name: "Secador de cabello",
        description: "Secador potente con control de temperatura",
        price: 110000,
        category: "electrodomésticos",
        img: "https://turbox.com.co/wp-content/uploads/2024/12/SECADOR-PROFESIONAL-TURBOX-MISSILE.webp"
    },
    {
        id: 8,
        name: "Ventilador de mesa",
        description: "Ventilador compacto para refrescar espacios pequeños",
        price: 90000,
        category: "electrodomésticos",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRvzMoR7ursOsYBN91o74prtTXJcLI41dLnnoZvHIttRP_9ghZ0-9_s9pSxppNpfQ9giF3wcQ1oh4ODSRX2ms1hzTqJ1T5MYVBqzAVqh7m-dzMoZkJnpWneaOZI"
    },
    {
        id: 9,
        name: "Extractor de jugos",
        description: "Extractor de jugos para frutas y verduras",
        price: 250000,
        category: "electrodomésticos",
        img: "https://example.com/extractor.jpg"
    },
    {
        id: 10,
        name: "Freidora de aire",
        description: "Freidora sin aceite para comidas más saludables",
        price: 300000,
        category: "electrodomésticos",
        img: "https://example.com/freidora.jpg"
    },
    {
        id: 11,
        name: "Moto AKT 125",
        description: "Motocicleta AKT 125cc ideal para transporte urbano",
        price: 5500000,
        category: "vehículos",
        img: "https://zagamotos.com/wp-content/uploads/2019/11/NKD-blanca-2-350x292.webp"
    },
    {
        id: 12,
        name: "Camiseta básica de algodón",
        description: "Camiseta cómoda y ligera de algodón",
        price: 45000,
        category: "ropa",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRE6n6zJLSgF4IBFBoDIumoB44hAUYC2VF31t15rhIfy4eZqSIaWGt8V79Vgn5d0Lj8yUUV4KVW8T6HnxUIHNEO9za9YeVOWEL0FEjh_tifLcnrdqOtbVUaaTc"
    },
    {
        id: 13,
        name: "Jeans clásicos",
        description: "Jeans de corte recto para uso diario",
        price: 120000,
        category: "ropa",
        img: "https://lukshop.vtexassets.com/arquivos/ids/917469/36_132F003_AZU194023_0.jpg?v=638742084682100000"
    },
    {
        id: 14,
        name: "Chaqueta impermeable",
        description: "Chaqueta resistente al agua, ideal para clima lluvioso",
        price: 180000,
        category: "ropa",
        img: "https://example.com/chaqueta.jpg"
    },,{ id: 24, name: "iPhone 17 Pro Max", description: "Teléfono inteligente de última generación con cámara de 48MP y batería de larga duración", price: 9000000, category: "telefonos", img: "https://celularesimportados.com.co/wp-content/uploads/2025/09/iphone-17-Pro-256-GB-Naranja-cosmico.jpg" },
  { id: 15, name: "Tenis deportivos", description: "Tenis cómodos para correr y entrenar", price: 200000, category: "ropa", img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/5643ea9848e94c1da869fd176bd19128_9366/Tenis_Superstar_Blanco_IH8659_01_standard.jpg" },
  { id: 16, name: "Sombrero vueltiao", description: "Sombrero tradicional colombiano tejido a mano", price: 95000, category: "accesorios", img: "https://example.com/sombrero.jpg" },
  { id: 17, name: "Sudadera", description: "Sudadera deportiva para uso casual", price: 130000, category: "ropa", img: "https://example.com/sudadera.jpg" },
  { id: 18, name: "Camisa formal", description: "Camisa elegante para ocasiones especiales", price: 160000, category: "ropa", img: "https://example.com/camisa.jpg" },
  { id: 19, name: "Vestido casual", description: "Vestido ligero para uso diario", price: 140000, category: "ropa", img: "https://m.media-amazon.com/images/I/717jrKFh9yL._AC_UY1000_.jpg" },
  { id: 20, name: "Balón de fútbol", description: "Balón oficial para entrenamientos y partidos", price: 80000, category: "deportes", img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/da13fc00f4c04adea8ce517804ec8bd3_9366/Balon_League_de_la_Copa_Mundial_de_la_FIFA_2026tm_Blanco_JD8045.jpg" },
  { id: 21, name: "Muñeca tipo Barbie", description: "Muñeca articulada con accesorios incluidos", price: 95000, category: "juguetes", img: "https://i.pinimg.com/474x/eb/37/b3/eb37b32355bc617a78b53ed485783dba.jpg" },
  { id: 22, name: "Carrito a control remoto", description: "Carro eléctrico con control remoto para niños", price: 120000, category: "juguetes", img: "https://pbs.twimg.com/media/FircqQOXEAACPmx.jpg" },
  { id: 23, name: "Juego de bloques tipo Lego", description: "Set de bloques para construir y estimular la creatividad", price: 150000, category: "juguetes", img: "https://pyrocol.net/wp-content/uploads/2019/11/VOLADOR-5G-2025-Photoroom-1000x743.jpg" },
  { id: 25, name: "Voladores", description: "Polvora \"El que se asusta, se quema\"", price: 50000, category: "juguetes", img: "https://pyrocol.net/wp-content/uploads/2019/11/VOLADOR-5G-2025-Photoroom-1000x743.jpg" }
];

// =======================
// Funciones utilitarias
// =======================
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.add('hidden'));
  screens[name].classList.remove('hidden');
}

function renderProducts(list) {
  productsGrid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" class="product-img" />
      <div class="product-name">${p.name}</div>
      <div class="product-price">$${p.price}</div>
    `;
    card.addEventListener('click', () => showDetail(p));
    productsGrid.appendChild(card);
  });
}

function renderCart() {
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = "cart-row";
    row.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price}</span>
    `;
    cartItems.appendChild(row);
  });
  cartCount.textContent = cart.length;
}

function showDetail(product) {
  showScreen('detail');
  document.getElementById('detail-title').textContent = product.name;
  document.getElementById('detail-image').src = product.img;
  document.getElementById('detail-description').textContent = product.description;
  document.getElementById('detail-price').textContent = "$" + product.price;

  document.getElementById('detail-add').onclick = () => {
    cart.push(product);
    renderCart();
    alert("Agregado al carrito");
  };
  document.getElementById('detail-buy').onclick = () => {
    alert("Compra inmediata de " + product.name);
  };
}

// =======================
// Pantalla Usuario
// =======================
function mostrarUsuario() {
  showScreen('user');
  userAddressText.textContent = currentAddress || "No disponible";
  userEmailText.textContent = currentUser || "No disponible";
}

// =======================
// Eventos principales
// =======================
authForm.addEventListener('submit', e => {
  e.preventDefault();
  currentUser = document.getElementById('email').value;
  document.getElementById('user-info').textContent = currentUser;
  showScreen('address');
});

addressForm.addEventListener('submit', e => {
  e.preventDefault();
  const carrera = document.getElementById('addr-carrera').value;
  const calle = document.getElementById('addr-calle').value;
  const num = document.getElementById('addr-num').value;
  const detalle = document.getElementById('addr-detalle').value;
  currentAddress = `${carrera} ${calle} ${num} ${detalle}`;
  renderProducts(products);
  showScreen('products');
});

document.getElementById('change-address-btn').addEventListener('click', () => showScreen('address'));
document.getElementById('signout-btn').addEventListener('click', () => {
  currentUser = null;
  cart = [];
  renderCart();
  showScreen('login');
});
document.getElementById('cart-btn').addEventListener('click', () => {
  renderCart();
  showScreen('cart');
});
document.getElementById('empty-cart').addEventListener('click', () => {
  cart = [];
  renderCart();
});
document.getElementById('checkout-all').addEventListener('click', () => {
  alert("Compra realizada de todos los productos");
  cart = [];
  renderCart();
});
document.getElementById('back-to-products').addEventListener('click', () => showScreen('products'));
backFromCart.addEventListener('click', () => showScreen('products'));
userBtn.addEventListener('click', mostrarUsuario);
backFromUser.addEventListener('click', () => showScreen('products'));

// =======================
// Barra de búsqueda + Filtro
// =======================
function applyFilters() {
  const term = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  let filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(term);
    const matchesCategory = (category === "all" || p.category === category);
    return matchesSearch && matchesCategory;
  });

  renderProducts(filtered);
}

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
  applyFilters(); // resetear filtro y búsqueda
});

searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);

// =======================
// Inicialización
// =======================
renderProducts(products);
showScreen('login');
