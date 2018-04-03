
var json = [];

$(document).ready(function () {
  calljson();
})

//$(document).ready(function() {
  function calljson(){
    console.log("yo nigga");
    var getJSON = function(url) {
      return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          var status = xhr.status;
          if (status == 200) {
            console.log(xhr.response);
            $('#result')[0].innerHtml = xhr.response
            resolve(xhr.response);
          } else {
            reject(status);
          }
        };
        xhr.send();
      });
    };
    
    var promise = getJSON('http://localhost:4001/api/v1/users')
  
    promise.then(function (response){
      
      json = response;

      var imgHTML = [];
      for (var i = 0; i < 30; i++)
      {
        imgHTML = '<tr><td>' + response[i].rid + '</td>' + '<td>' + response[i].fk_user  + '</td>' + '<td>' + response[i].time  + '</td>' + '<td>' + response[i].direct  + '</td>' + '<td>' + response[i].type  + '</td></tr>'
          $("#result").append(imgHTML);
        
        }
    })
  }
  
  
