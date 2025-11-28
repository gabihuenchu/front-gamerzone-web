import { useMemo, useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './App.css';
import { PC_COMPONENTS, PC_COMPONENT_IMAGES } from '../data/pcBuilder';


function ArmaTuPC() {
  const [seleccion, setSeleccion] = useState({
    gabinete: PC_COMPONENTS.gabinete[0],
    cpu: PC_COMPONENTS.cpu[1],
    ram: PC_COMPONENTS.ram[0],
    gpu: PC_COMPONENTS.gpu[0],
    ssd: PC_COMPONENTS.ssd[0],
    hdd: PC_COMPONENTS.hdd[0],
    refrigeracion: PC_COMPONENTS.refrigeracion[0],
    fuente: PC_COMPONENTS.fuente[0],
    so: PC_COMPONENTS.so[0],
  });

  const total = useMemo(() => {
    return Object.values(seleccion).reduce((sum, item) => sum + (item?.precio || 0), 0);
  }, [seleccion]);

  const handleChange = (grupo, id) => {
    const item = PC_COMPONENTS[grupo].find((x) => x.id === id);
    setSeleccion((prev) => ({ ...prev, [grupo]: item }));
  };

  // Carrusel del gabinete
  const [carouselIndex, setCarouselIndex] = useState(0);
  const gabinetePreview = PC_COMPONENT_IMAGES.gabinete[seleccion.gabinete.id] || [];

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
                {PC_COMPONENT_IMAGES[key]?.[seleccion[key].id] ? (
                  <div className="component-thumb">
                    <img
                      src={Array.isArray(PC_COMPONENT_IMAGES[key][seleccion[key].id])
                        ? PC_COMPONENT_IMAGES[key][seleccion[key].id][0]
                        : PC_COMPONENT_IMAGES[key][seleccion[key].id]}
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
                  {PC_COMPONENTS[key].map((op) => (
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
