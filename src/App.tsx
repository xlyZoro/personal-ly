import routers from './router/home';
import {RouterProvider} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
