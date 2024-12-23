import { CONFIG, ERRORS } from '../config.js';
import { showError, hideError, setLoading } from '../utils/ui.js';
import { withRetry } from '../utils/retry.js';
import { checkConnection, isNetworkError } from '../utils/network.js';

export function initializePaymentForm() {
  const form = document.getElementById('paymentForm');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideError();
    setLoading(true);

    // Check connection first
    const isConnected = await checkConnection(CONFIG.API_URL);
    if (!isConnected) {
      showError(ERRORS.CONNECTION);
      setLoading(false);
      return;
    }

    try {
      const submitPayment = async () => {
        const response = await fetch(`${CONFIG.API_URL}/payment/form`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(new FormData(form))
        });

        if (!response.ok) {
          throw new Error(ERRORS.GENERAL);
        }

        return response;
      };

      const response = await withRetry(submitPayment);
      window.location.href = response.url;
    } catch (error) {
      const errorMessage = isNetworkError(error) ? ERRORS.CONNECTION : ERRORS.GENERAL;
      showError(errorMessage);
    } finally {
      setLoading(false);
    }
  });
}