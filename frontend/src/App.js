import React from 'react';

import './global.css';

import Routes from './routes';

function App() {
  
  return (
    <Routes />
  );
}

export default App;

/**
 * Um componente no react é uma função que retorna Html
 * 
 * JSX quando o html esta integrado dentro do JavaScript
 * 
 * Propriedades são atributos passados para componentes ao invex de elementos html
 * 
 * Estado informação que vai ser mantida pelo componente
 * 
 * Imutabilidade por uma questão de perfomace nunca podemos manipular uma variavel do estado de uma forma direta precisamos sobrepor
 */