export function httpGET(url) {
  return httpRequest('GET', url);
}

export function httpRequest(type, url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open(type, url);

    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = function() {
      reject(Error("Network Error"));
    };

    req.send();
  });
}