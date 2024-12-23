export const CONFIG = {
  API_URL: 'https://pay.amah.ai',
  MERCHANT_ID: '0C7D41D1170FA',
  CURRENCY_ID: '1',
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000
};

export const ERRORS = {
  CONNECTION: 'Unable to connect to payment server. Please check your internet connection and try again.',
  GENERAL: 'An error occurred while processing your payment. Please try again.',
  TIMEOUT: 'The request timed out. Please try again.'
};