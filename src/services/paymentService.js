import { PAYMENT_API_URL } from '../config.js';

export async function processPayment(paymentData) {
  try {
    console.log('Sending payment request to:', PAYMENT_API_URL);
    
    const response = await fetch(`${PAYMENT_API_URL}/process-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `Payment failed with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Payment error details:', error);
    if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
      throw new Error('Unable to connect to payment server. Please check your internet connection and try again.');
    }
    throw error;
  }
}