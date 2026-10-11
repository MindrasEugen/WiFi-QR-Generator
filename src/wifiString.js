

function escapeValue(value){
    return value.replace(/([\\;,:"])/g, '\\$1');
};

export function buildWifiString({ ssid, password, security, hidden}) {
    const parts = [`T:${security}`, `S:${escapeValue(ssid)}`];
    if (security !== 'nopass'){ parts.push(`P:${escapeValue(password)}`)};
    if (hidden) {parts.push(`H:true`)};
    return `WIFI:${parts.join(';')};;`;
}