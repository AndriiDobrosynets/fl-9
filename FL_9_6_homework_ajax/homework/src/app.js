const http = {
  get: function(url) {
    return new Promise((succeed, fail) => {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.onload = () => {
        if (request.status === 200 && request.readyState === 4) {
          succeed(request);
        }
        fail(new Error(this.statusText));
      };
      request.onerror = function() {
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
  http
    .get(`https://api.onwater.io/api/v1/results/${lat},${lon}`)
    .then(data => {
      const response = JSON.parse(data.response);
      if (response.water) {
        const img = http.get('https://source.unsplash.com/1600x900/?sea');
        img
          .then(img => {
            ouput.innerHTML = `
          <img class='animate-img' src=${img.responseURL} alt='water'/>`;
          }, null)
          .catch(error => {
            console.error(error);
          });
      } else {
        const img = http.get('https://source.unsplash.com/1600x900/?land');
        img
          .then(img => {
            ouput.innerHTML = `
          <img class='animate-img' src=${img.responseURL} alt='water'/>`;
          }, null)
          .catch(error => {
            console.error(error);
          });
      }
      loader.classList.add('invisible');
    }, null)
    .catch(error => {
      ouput.innerText = error.message;
      loader.classList.add('invisible');
    });
});
