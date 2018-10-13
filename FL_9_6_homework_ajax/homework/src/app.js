const http = {
  get: function (url) {
    return new Promise((succeed, fail) => {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.onload = () => {
        if (request.status === 200 && request.readyState === 4) {
          succeed(request);
        }
        fail(new Error(this.statusText));
      };
      request.onerror = function () {
        fail(new Error('Network Error'));
      };
      request.send();
    });
  }
};

const btn = document.getElementById('btn');
const ouput = document.querySelector('.ouput');
const loader = document.querySelector('.loader-wrap');



btn.addEventListener('click', () => {
  const lat = document.getElementById('lat').value;
  const lon = document.getElementById('lon').value;
  loader.classList.remove('invisible');
  http.get(`https://api.onwater.io/api/v1/results/${lat},${lon}`)
    .then((data) => {
      const response = JSON.parse(data.response);
      if (response.water) {
        ouput.innerHTML = `
        <h2>Water<h2>`;
      } else {
        ouput.innerHTML = `
        <h2>Land<h2>`;
      }
      loader.classList.add('invisible');
    }, null).catch((error) => {
      ouput.innerText = error.message;
      loader.classList.add('invisible');
    });
});