import { useMemo, useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './App.css';
import gabinete01 from '../assets/gabinete01.png';
import gabinete02 from '../assets/gabinete02.png';
import gabinete03 from '../assets/gabinete03.png';

const COMPONENTES = {
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

// Imágenes por componente (placeholder). Para gabinete usamos banners como preview temporal.
const COMPONENT_IMAGES = {
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

function ArmaTuPC() {
  const [seleccion, setSeleccion] = useState({
    gabinete: COMPONENTES.gabinete[0],
    cpu: COMPONENTES.cpu[1],
    ram: COMPONENTES.ram[0],
    gpu: COMPONENTES.gpu[0],
    ssd: COMPONENTES.ssd[0],
    hdd: COMPONENTES.hdd[0],
    refrigeracion: COMPONENTES.refrigeracion[0],
    fuente: COMPONENTES.fuente[0],
    so: COMPONENTES.so[0],
  });

  const total = useMemo(() => {
    return Object.values(seleccion).reduce((sum, item) => sum + (item?.precio || 0), 0);
  }, [seleccion]);

  const handleChange = (grupo, id) => {
    const item = COMPONENTES[grupo].find((x) => x.id === id);
    setSeleccion((prev) => ({ ...prev, [grupo]: item }));
  };

  // Carrusel del gabinete
  const [carouselIndex, setCarouselIndex] = useState(0);
  const gabinetePreview = COMPONENT_IMAGES.gabinete[seleccion.gabinete.id] || [];

  useEffect(() => {
    // Reset índice cuando cambia el gabinete
    setCarouselIndex(0);
  }, [seleccion.gabinete.id]);

  const grupos = [
    { key: 'gabinete', titulo: 'Gabinete' },
    { key: 'cpu', titulo: 'Procesador' },
    { key: 'ram', titulo: 'Memoria RAM' },
    { key: 'gpu', titulo: 'Tarjeta Gráfica' },
    { key: 'ssd', titulo: 'Disco SSD' },
    { key: 'hdd', titulo: 'Disco HDD' },
    { key: 'refrigeracion', titulo: 'Refrigeración' },
    { key: 'fuente', titulo: 'Fuente de Poder' },
    { key: 'so', titulo: 'Sistema Operativo' },
  ];

  return (
    <div className="app-container">
      <Navbar />
      <section className="pc-builder">
        <div className="builder-header">
          <h2>Arma tu <span>PC</span></h2>
          <p>Configura tu equipo ideal con componentes de alto rendimiento.</p>
        </div>

        <div className="builder-grid">
          <div className="builder-left">
            {grupos.map(({ key, titulo }) => (
              <div className="builder-card" key={key}>
                <h3>{titulo}</h3>
                {/* Miniatura del componente seleccionado (si hay imagen disponible) */}
                {COMPONENT_IMAGES[key]?.[seleccion[key].id] ? (
                  <div className="component-thumb">
                    <img
                      src={Array.isArray(COMPONENT_IMAGES[key][seleccion[key].id])
                        ? COMPONENT_IMAGES[key][seleccion[key].id][0]
                        : COMPONENT_IMAGES[key][seleccion[key].id]}
                      alt={`${titulo} preview`}
                      className="component-thumb-img"
                    />
                  </div>
                ) : (
                  <div className="component-thumb placeholder">
                    <span>{seleccion[key].nombre}</span>
                  </div>
                )}
                <div className="option-grid">
                  {COMPONENTES[key].map((op) => (
                    <button
                      key={op.id}
                      type="button"
                      className={`option-tile ${op.id === seleccion[key].id ? 'active' : ''}`}
                      onClick={() => handleChange(key, op.id)}
                      aria-pressed={op.id === seleccion[key].id ? 'true' : 'false'}
                    >
                      <span className="option-title">{op.nombre}</span>
                      <span className="option-price">${op.precio.toLocaleString('es-CL')}</span>
                      {op.id === seleccion[key].id && <span className="option-selected">Seleccionado</span>}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="builder-right">
            {/* Preview del Gabinete - Carrusel */}
            <div className="builder-preview">
              <div className="preview-carousel">
                {gabinetePreview.length > 0 && (
                  <img
                    src={gabinetePreview[carouselIndex]}
                    alt={`Gabinete vista ${carouselIndex + 1}`}
                    className="preview-image active"
                  />
                )}
              </div>
                {/* Thumbnails clicables */}
                <div className="preview-thumbs" aria-label="Seleccionar imagen del gabinete">
                  {gabinetePreview.map((imgSrc, i) => (
                    <button
                      key={`thumb-${i}`}
                      className={`preview-thumb ${i === carouselIndex ? 'active' : ''}`}
                      onClick={() => setCarouselIndex(i)}
                      aria-current={i === carouselIndex ? 'true' : 'false'}
                      aria-label={`Vista ${i + 1}`}
                      type="button"
                    >
                      <img src={imgSrc} alt={`Miniatura gabinete ${i + 1}`} />
                    </button>
                  ))}
                </div>
            </div>

            <div className="builder-summary">
              <h3>Resumen de Configuración</h3>
              <ul>
                {grupos.map(({ key, titulo }) => (
                  <li key={key}>
                    <span>{titulo}</span>
                    <strong>{seleccion[key].nombre}</strong>
                    <em>${seleccion[key].precio.toLocaleString('es-CL')}</em>
                  </li>
                ))}
              </ul>

              <div className="builder-total">
                <span>Total</span>
                <strong>${total.toLocaleString('es-CL')}</strong>
              </div>

              <div className="builder-actions">
                <button className="btn-primary">Agregar al Carrito</button>
                <button className="btn-outline">Guardar Configuración</button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default ArmaTuPC;
