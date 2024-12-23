export function initializeAmountButtons() {
  const amountBtns = document.querySelectorAll('.amount-btn');
  const amountInput = document.getElementById('amount');
  
  // Set initial amount
  if (amountBtns.length > 0) {
    amountBtns[0].classList.add('selected');
  }
  
  amountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      amountBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      amountInput.value = btn.dataset.amount;
    });
  });
}