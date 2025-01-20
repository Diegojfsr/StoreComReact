# StoreComReact
Projeto de store básico com react, typescript, vite e redux.

### 1-Crie um novo projeto com Vite:
```
npm create vite@latest my-react-app --template react-ts
cd my-react-app
```
### 2-Instale as dependências necessárias:
``` npm install redux react-redux @reduxjs/toolkit ```

### 3-Configure o Redux:
Crie uma pasta chamada store dentro da pasta src.
Dentro da pasta store, crie um arquivo chamado index.ts e adicione o seguinte código:
```
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// Exemplo de um slice
import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});
export const { increment, decrement } = counterSlice.actions;
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
```
### 4-Configure o Provider no seu componente principal:
Abra o arquivo main.tsx e modifique-o para incluir o Provider do react-redux:
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```
### 5-Utilize o Redux no seu componente:
Abra o arquivo App.tsx e modifique-o para utilizar o Redux:
```
import React from 'react';
import { useSelector } from 'react-redux';
import { increment, decrement } from './store';
import { useAppDispatch } from './store';
const App: React.FC = () => {
  const count = useSelector((state: any) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
    </div>
  );
};
export default App;
```
### 7-Para executar o projeto que você criou, siga estes passos:
Instale as dependências: No terminal, dentro do diretório do seu projeto, execute:
``` npm install ```

Inicie o servidor de desenvolvimento: Ainda no terminal, execute:
``` npm run dev ```

Acesse o projeto no navegador: Após iniciar o servidor de desenvolvimento, você verá uma mensagem no terminal indicando em qual endereço o projeto está sendo servido, geralmente algo como http://localhost:3000. Abra o navegador e acesse esse endereço.  
Pronto! Agora você deve ver seu projeto React com TypeScript, Vite e Redux rodando no navegador.








