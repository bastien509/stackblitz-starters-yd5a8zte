import { formatCardNumber, formatExpiry } from './src/utils/formatters.js';
import { processPayment } from './src/services/paymentService.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('paymentForm');
  const cardNumber = document.getElementById('cardNumber');
  const expiry = document.getElementById('expiry');
  const cvv = document.getElementById('cvv');
  const amountDisplay = document.getElementById('amount');
  let currentAmount = 0;

  // Handle amount buttons
  document.querySelectorAll('.amount-buttons button').forEach(button => {
    button.addEventListener('click', () => {
      currentAmount = parseFloat(button.dataset.amount);
      amountDisplay.textContent = currentAmount.toFixed(2);
    });
  });

  // Format inputs
  cardNumber.addEventListener('input', () => formatCardNumber(cardNumber));
  expiry.addEventListener('input', () => formatExpiry(expiry));
  cvv.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
  });

  // Handle form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (currentAmount === 0) {
      alert('Please select an amount to pay');
      return;
    }

    const payButton = form.querySelector('.pay-button');
    payButton.disabled = true;
    payButton.textContent = 'Processing...';

    try {
      const [expiryMonth, expiryYear] = expiry.value.split('/');
      
      const paymentData = {
        amount: currentAmount,
        cardNumber: cardNumber.value.replace(/\s/g, ''),
        expiryMonth,
        expiryYear: '20' + expiryYear, // Convert to full year
        cvv: cvv.value
      };

      const result = await processPayment(paymentData);
      alert('Payment successful!');
      form.reset();
      currentAmount = 0;
      amountDisplay.textContent = '0.00';
    } catch (error) {
      alert(error.message);
    } finally {
      payButton.disabled = false;
      payButton.textContent = 'Pay Now';
    }
  });
});