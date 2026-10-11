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
        <div className='btn-group' role='group'>

          <button
            type='button'
            className={`btn ${mode === 'wifi' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={()=> setMode('wifi')}>
              Wi-Fi
          </button>
          <button
            type='button'
            className={`btn ${mode === 'image' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setMode('image')}>
              Immagine
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
