import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Main from './components/Main.jsx'
import Container from './components/Container.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container >
      <Main />
    </Container>
  </StrictMode>,
)
