# Generatore QR Wi-Fi

Web app che genera un codice QR per collegarsi a una rete Wi-Fi. Inquadrandolo con la fotocamera di uno smartphone ci si connette alla rete senza digitare la password.

## Funzionalità

- Inserimento del nome della rete (SSID)
- Scelta del tipo di sicurezza: WPA/WPA2/WPA3, WEP, oppure rete aperta senza password (in quel caso il campo password viene nascosto)
- Opzione "rete nascosta"
- QR generato in tempo reale mentre si compila il form (appare solo quando l'SSID non è vuoto)
- Download del QR come immagine PNG (1000×1000 px)
- I caratteri speciali (`\ ; , : "`) in SSID e password vengono escapati correttamente secondo il formato standard `WIFI:T:...;S:...;P:...;H:true;;`
- Tutto avviene nel browser: nessun dato viene inviato a un server

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
