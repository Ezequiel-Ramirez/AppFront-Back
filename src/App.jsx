import { AuthProvider } from './auth/context/AuthProvider'
import { AppRouter } from './router/AppRouter'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
