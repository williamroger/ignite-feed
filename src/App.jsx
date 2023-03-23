import { Header } from './components/Header';
import { Post } from './Post';
import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <Post 
        author="William Roger" 
        content="Conteúdo do meu post maneiro." 
      />
    </div>
  )
}

export default App
