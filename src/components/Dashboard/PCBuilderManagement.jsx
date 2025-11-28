import { PC_COMPONENTS, PC_COMPONENT_IMAGES } from '../../data/pcBuilder';

const PCBuilderManagement = () => {
  const grupos = Object.entries(PC_COMPONENTS);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Arma tu PC</h2>
          <p className="text-gray-600">Administración de grupos y opciones del configurador</p>
        </div>
      </div>

      {grupos.map(([grupoKey, items]) => (
        <div key={grupoKey} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200">
            <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v3H4V6zm0 5h16v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 capitalize">{grupoKey}</h3>
            <span className="ml-auto text-sm text-gray-500">{items.length} opciones</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Opción</th>
                  <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Precio</th>
                  <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Imagen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {items.map((item) => {
                  const raw = PC_COMPONENT_IMAGES[grupoKey]?.[item.id];
                  const imgSrc = Array.isArray(raw) ? raw[0] : raw;
                  return (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-900">{item.nombre}</span>
                            <span className="text-xs text-gray-500">{item.id}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        <span className="text-sm text-gray-800">${item.precio.toLocaleString('es-CL')}</span>
                      </td>
                      <td className="px-8 py-4">
                        {imgSrc ? (
                          <img src={imgSrc} alt={item.nombre} className="w-16 h-16 object-contain bg-white border border-gray-200 rounded" />
                        ) : (
                          <span className="text-xs text-gray-500">Sin imagen</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PCBuilderManagement;
