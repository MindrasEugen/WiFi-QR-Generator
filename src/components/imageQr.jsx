import { useRef, useState } from 'react'
import { ReactQRCode } from '@lglab/react-qr-code'



const DEFAULT_IMAGE_URL = 'https://i.pinimg.com/originals/33/48/56/334856ce73e46cb5f23b81d71fea5af5.jpg';

function ImageQr(){
    const qrRef = useRef(null);
    const [imageUrl, setImageUrl] = useState(DEFAULT_IMAGE_URL);
    const [imageError, setImageError] = useState(false);

    const clearUrl = imageUrl.trim();
    const canGenerate = clearUrl !== '';

    function handleUrlChange(event){
        setImageUrl(event.target.value);
        setImageError(false);
    };

    function handleDownload(){
        qrRef.current?.download({name:'image-qr', format:'png', size:1000})
    };

    return (
        <div className='container py-5' style={{maxWidth: 480}}>
            <h1 className='h3 mb-4'>Generatore QR Immagine</h1>

            <div className='mb-3'>
                <label className='form-label' htmlFor='imageUrl'>Link immagine</label>
                <input id='imageUrl' type='url' className='form-control' placeholder='https://esempio.com/scimmia.jpg' value={imageUrl} onChange={handleUrlChange} />
            </div>

            {canGenerate && (
                <div className='text-center'>
                    <ReactQRCode ref={qrRef} value={clearUrl} size={256} level='Q' background='#ffffff'/>
                    { <div className='mt-3'>
                        <img src={clearUrl} alt='anteprima' className='img-fluid rounded' style={{ display: 'none'}} onError={()=> setImageError(true)}/>
                    </div> }
                    {imageError &&(
                        <div className='alert alert-warning mt-3'>
                            Non riesco a caricare l'immagine: controlla il link.
                        </div>
                    )}
                    <div className='mt-3'>
                        <button className='btn btn-primary' onClick={handleDownload}>Scarica PNG</button>
                    </div>
                </div>
            )}
        </div>

    )



}


export default ImageQr