import WifiQr from './components/wifiQr.jsx'
import ImageQr from './components/imageQr.jsx'
import { useState } from 'react'


function App() {
  const [mode, setMode] = useState('wifi')
  return (
    <div className='d-flex flex-column min-vh-100'>
      {mode === 'wifi' && <WifiQr />}
      {mode === 'image' && <ImageQr />}

      <div className='mt-auto text-center pb-4'>
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => setMode(prev => prev === 'wifi' ? 'image' : 'wifi')}>
            {mode === 'wifi' ? 'Passa a Immagine' : 'Passa a Wi-Fi'}
        </button>
      </div>
    </div>
  )
}

export default App
