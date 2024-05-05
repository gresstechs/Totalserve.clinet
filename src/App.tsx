import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import CssBaseline from '@mui/material/CssBaseline'
import AppRoutes from './routing/AppRoutes'

function App() {

  return (
      <>
          <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <AppRoutes />
          </ThemeProvider>
     
    </>
  )
}

export default App
