// src/App.jsx
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <AuthProvider>
      <Header />
      <MainComponent />
      <Footer />
    </AuthProvider>
  );
}

export default App;