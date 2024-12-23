export function showError(message) {
  const errorDiv = document.getElementById('error-message');
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.classList.remove('d-none');
  }
}

export function hideError() {
  const errorDiv = document.getElementById('error-message');
  if (errorDiv) {
    errorDiv.classList.add('d-none');
  }
}

export function setLoading(isLoading) {
  const submitBtn = document.querySelector('.btn-primary');
  if (submitBtn) {
    submitBtn.disabled = isLoading;
    submitBtn.innerHTML = isLoading ? 
      '<span class="spinner-border spinner-border-sm me-2"></span>Processing...' : 
      '<strong>Pay Now</strong>';
  }
}