
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/routes';

function App() {
  return (
    <div className="mx-10">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
