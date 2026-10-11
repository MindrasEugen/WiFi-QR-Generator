# Generatore QR Wi-Fi

Web app che genera codici QR in due modalità:

- **QR Wi-Fi** — inquadrandolo con la fotocamera di uno smartphone ci si connette alla rete senza digitare la password.
- **QR Immagine** — trasforma il link di un'immagine in un QR che, una volta scansionato, apre l'immagine.

## Funzionalità

### QR Wi-Fi

- Inserimento del nome della rete (SSID)
- Scelta del tipo di sicurezza: WPA/WPA2/WPA3, WEP, oppure rete aperta senza password (in quel caso il campo password viene nascosto)
- Opzione "rete nascosta"
- QR generato in tempo reale mentre si compila il form (appare solo quando l'SSID non è vuoto)
- I caratteri speciali (`\ ; , : "`) in SSID e password vengono escapati correttamente secondo il formato standard `WIFI:T:...;S:...;P:...;H:true;;`
- I dati della rete restano nel browser: nessuna informazione viene inviata a un server

### QR Immagine

- Inserimento del link di un'immagine
- Anteprima dell'immagine sotto il QR, con avviso se il link non si carica
- All'apertura il campo è già compilato con un'immagine di esempio

> **Nota sull'immagine di default:** l'immagine precaricata è stata scelta puramente a scopo ironico, come esempio leggero per mostrare subito il funzionamento. Non ha alcun legame con il progetto e non è di mia proprietà: i diritti appartengono ai rispettivi autori. Basta sostituire il link con quello che si preferisce.

### In comune

- Download del QR come immagine PNG (1000×1000 px)

## Tecnologie

- React 19
- Vite
- Bootstrap 5
- @lglab/react-qr-code
- Oxlint

## Avvio in locale

```
pnpm install
pnpm dev
```

Altri comandi:

- `pnpm build` - build di produzione
- `pnpm lint` - controllo del codice con Oxlint
