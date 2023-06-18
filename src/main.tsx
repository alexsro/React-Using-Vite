import { createRoot } from 'react-dom/client';
import { MoviesApp } from './App';

const root = createRoot(document.getElementById('root')!);
root.render(<MoviesApp />);
