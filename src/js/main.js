import { initializePaymentForm } from './handlers/payment.js';
import { initializeAmountButtons } from './handlers/amount.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeAmountButtons();
  initializePaymentForm();
});