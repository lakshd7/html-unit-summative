document.querySelector('.form button').addEventListener('click', () => {
  const html = `
  Your form has been successfully submitted!
  `;

  document.querySelector('.form').innerHTML = '';
  document.querySelector('.form').insertAdjacentHTML('afterbegin', html);
});