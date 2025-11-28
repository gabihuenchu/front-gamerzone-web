import gabinete01 from '../assets/gabinete01.png';
import gabinete02 from '../assets/gabinete02.png';
import gabinete03 from '../assets/gabinete03.png';

export const PC_COMPONENTS = {
  gabinete: [
    { id: 'gt502', nombre: 'Asus TUF GT502', precio: 176000 },
    { id: 'gt302', nombre: 'Asus TUF GT302', precio: 99200 },
    { id: 'gt301', nombre: 'Asus TUF GT301', precio: 99200 },
  ],
  cpu: [
    { id: 'i5-14500', nombre: 'Intel Core i5-14500', precio: 125300 },
    { id: 'i7-14700KF', nombre: 'Intel Core i7-14700KF', precio: 157800 },
    { id: 'i9-14900KF', nombre: 'Intel Core i9-14900KF', precio: 315600 },
  ],
  ram: [
    { id: 'ddr5-16-5600', nombre: 'DDR5 16GB 5600Mhz Kingston Fury Beast', precio: 7600 },
    { id: 'ddr5-32-5600', nombre: 'DDR5 32GB 5600Mhz Kingston Fury Beast', precio: 57900 },
    { id: 'ddr5-64-5600', nombre: 'DDR5 64GB 5600Mhz Kingston Fury Beast', precio: 240700 },
  ],
  gpu: [
    { id: 'rtx5070', nombre: 'GeForce RTX 5070 Asus TUF Gaming OC 12G', precio: 107500 },
    { id: 'rtx5090', nombre: 'GeForce RTX 5090 Asus TUF Gaming 32G OC', precio: 2616500 },
  ],
  ssd: [
    { id: 'ssd1tb', nombre: 'SSD 1TB Kingston NVMe', precio: 78490 },
    { id: 'ssd2tb', nombre: 'SSD 2TB Kingston NVMe', precio: 150290 },
  ],
  hdd: [
    { id: 'hdd2tb', nombre: 'HDD 2TB Seagate Barracuda', precio: 81490 },
    { id: 'hdd4tb', nombre: 'HDD 4TB Seagate Barracuda', precio: 126090 },
  ],
  refrigeracion: [
    { id: 'aire-pa120', nombre: 'Aire: Peerless Assassin 120 SE', precio: 10400 },
    { id: 'liquida-lc240', nombre: 'Líquida: Asus TUF LC II 240', precio: 116300 },
  ],
  fuente: [
    { id: 'psu750', nombre: 'PSU 750W XPG Core Reactor II', precio: 14100 },
    { id: 'psu850', nombre: 'PSU 850W Corsair RM850x', precio: 28900 },
  ],
  so: [
    { id: 'win11-home', nombre: 'Windows 11 Home', precio: 0 },
    { id: 'win11-pro', nombre: 'Windows 11 Pro', precio: 44500 },
  ],
};

export const PC_COMPONENT_IMAGES = {
  gabinete: {
    gt502: [gabinete01],
    gt302: [gabinete02],
    gt301: [gabinete03],
  },
  cpu: {
    'i5-14500': 'https://hyperpc.cl/wp-content/uploads/2025/04/intel-core-i5-14-300x300.jpg',
    'i7-14700KF': 'https://hyperpc.cl/wp-content/uploads/2025/04/intel-core-i5-14-300x300.jpg',
    'i9-14900KF': 'https://hyperpc.cl/wp-content/uploads/2025/04/intel-core-i5-14-300x300.jpg',
  },
  ram: {
    'ddr5-16-5600': 'https://hyperpc.cl/wp-content/uploads/2025/03/Kingston-Fury-Beast-RGB-DDR5-HyperPC-300x300.jpg',
    'ddr5-32-5600': 'https://hyperpc.cl/wp-content/uploads/2025/03/Kingston-Fury-Beast-RGB-DDR5-HyperPC-300x300.jpg',
    'ddr5-64-5600': 'https://hyperpc.cl/wp-content/uploads/2025/03/Kingston-Fury-Beast-RGB-DDR5-HyperPC-300x300.jpg',
  },
  gpu: {
    rtx5070: 'https://www.winpy.cl/files/41248-9665-Tarjeta-de-Video-ASUS-TUF-Gaming-GeForce-RTX-5070-OC-1.jpg',
    rtx5090: 'https://www.winpy.cl/files/41248-9665-Tarjeta-de-Video-ASUS-TUF-Gaming-GeForce-RTX-5070-OC-1.jpg',
  },
  ssd: {
    ssd1tb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMClkDPeEjJC01ycHxX9_wZiCY8dFcKQTHwA&s',
    ssd2tb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMClkDPeEjJC01ycHxX9_wZiCY8dFcKQTHwA&s',
  },
  hdd: {
    hdd2tb: 'https://m.media-amazon.com/images/I/71V1jd3s9dL._AC_SL1500_.jpg',
    hdd4tb: null,
  },
  refrigeracion: {
    'aire-pa120': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDfuiLyzhoJ23gBPuD9w11yRa3T-DXrH8hOQ&s',
    'liquida-lc240': 'https://http2.mlstatic.com/D_NQ_NP_966722-MLA95527000132_102025-O.webp',
  },
  fuente: {
    psu750: 'https://http2.mlstatic.com/D_NQ_NP_628323-CBT85098604494_052025-O.webp',
    psu850: 'https://media.spdigital.cl/thumbnails/products/ac2xoeho_af1ff991_thumbnail_4096.jpg',
  },
  so: {
    'win11-home': 'https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/792x1068/prd-cl/product-medias/e978782a-30c3-43cc-9644-fdad5ae3b8d9/MKN7LEJRL8/MKN7LEJRL8-1/1686698440605-MKN7LEJRL8-1-1.png',
    'win11-pro': 'https://cdnx.jumpseller.com/compuelite/image/35452057/thumb/610/610?1684525397',
  },
};

