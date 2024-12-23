export function formatCardNumber(input) {
  let value = input.value.replace(/\s/g, '').replace(/\D/g, '');
  let formattedValue = '';
  for (let i = 0; i < value.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += ' ';
    }
    formattedValue += value[i];
  }
  input.value = formattedValue;
}

export function formatExpiry(input) {
  let value = input.value.replace(/\D/g, '');
  if (value.length >= 2) {
    value = value.substring(0, 2) + '/' + value.substring(2);
  }
  input.value = value;
}