import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CurrentPageProvider } from './providers/current-page';
import { QuizProvider } from './providers/quiz';
import './assets/css/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CurrentPageProvider>
    <QuizProvider>
      <App />
    </QuizProvider>
  </CurrentPageProvider>
)
