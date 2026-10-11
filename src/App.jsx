import { useRef, useState } from 'react'
import { ReactQRCode } from '@lglab/react-qr-code'
import { buildWifiString } from './wifiString.js'


function App() {
  const qrRef = useRef(null)
  const [form, setForm]= useState({
    ssid: '',
    password: '',
    security: 'WPA',
    hidden: false,
  });

  function handleChange(event){
    const {name, value, type, checked} = event.target;
    setForm((prev) => ({...prev, [name]: type === 'checkbox' ? checked : value}));
  }

  const wifiString = buildWifiString(form);
  const canGenerate = form.ssid.trim() !== '' ;

  function handleDownload(){
    qrRef.current?.download({name: 'wifi-qr', format: 'png', size: 1000})
  }



  return (
    <>
      <div className= "container py-5" style={{maxWidth: 480}}>
        <h1 className="h3 mb-4">Generatore QR Wi-Fi</h1>

        <div className="mb-3">
          <label className="form-label" htmlFor="ssid">Nome rete (SSIS)</label>
          <input id="ssid" name="ssid" className="form-control" value={form.ssid} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="security">Sicurezza</label>
          <select id="security" name= "security" className= "form-select" value={form.security} onChange={handleChange}>
            <option value="WPA">WPA/WPA2/WPA3</option>
            <option value="WEP">WEP</option>
            <option value="nopass">Nessuna password</option>
          </select>
        </div>

        {form.security !== 'nopass' && (
          <div className='mb-3'>
            <label className='form-label' htmlFor='password'>Password</label>
            <input id='password' name='password' type='password' className='form-control' value={form.password} onChange={handleChange} />
          </div>
        )}

        <div className='form-check mb-4'>
          <input id='hidden' name='hidden' type='checkbox' className='form-check-input' checked={form.hidden} onChange={handleChange}/>
          <label className='form-check-label' htmlFor='hidden'>Rete nascosta</label>
        </div>

        {canGenerate &&(
          <div className='text-center'>
            <ReactQRCode ref={qrRef} value={wifiString} size={256} level='Q' background='#ffffff'/>
            <div className='mt-3'>
              <button className='btn btn-primary' onClick={handleDownload}>Scarica PNG</button>
            </div>
          </div>
        )}


      </div>
    </>
  )
}

export default App
