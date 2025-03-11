import React, { useState } from 'react';
import Clientes from './components/Clientes';
import Productos from './components/Productos';

const App = () => {
  const [activeTab, setActiveTab] = useState('clientes');

  return (
    <div>
      <div className="tabs">
        <button 
          onClick={() => setActiveTab('clientes')} 
          className={activeTab === 'clientes' ? 'active' : ''}
        >
          Clientes
        </button>
        <button 
          onClick={() => setActiveTab('productos')} 
          className={activeTab === 'productos' ? 'active' : ''}
        >
          Productos
        </button>
      </div>

      {activeTab === 'clientes' && <Clientes />}
      {activeTab === 'productos' && <Productos />}
    </div>
  );
};

export default App;
