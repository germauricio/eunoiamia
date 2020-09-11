export const generatePreference = async (price, name) => {
    return (await fetch('/api/payments/mercado_preference', {
        method: 'POST',
        body: JSON.stringify({price, name}),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    }));
}