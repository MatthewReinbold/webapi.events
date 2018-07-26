var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        alert('200');
        callback(null, xhr.response);
      } else {
        alert('something else');
        callback(status, xhr.response);
      }
    };
    xhr.send();
};