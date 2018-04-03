var json = [];

$(document).ready(function () {
  calljson();
})

  function calljson(){
    var getJSON = function(url) {
      return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          var status = xhr.status;
          if (status == 200) {
            //console.log(xhr.response);
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
        var start = moment.utc(response[i].start, "HH:mm:ss");
        var end = moment.utc(response[i].end, "HH:mm:ss");
        if (end.isBefore(start)) end.add(1, 'day');
        var d = moment.duration(end.diff(start));
        // subtract the lunch break (i set this to zero since theres no lunch break)
        d.subtract(0, 'minutes');
        var hours = moment.utc(+d).format('HH:mm:ss');
        //console.log(hours);
        imgHTML = '<tr><td>' + response[i].rid + '</td>' + '<td>' + response[i].fk_user  + '</td>' + '<td>' + response[i].date  + '</td>' + '<td>' + response[i].start  + '</td>' + '<td>' + response[i].end  + '</td>' + '<td>' + hours  +  '</td>' + '<td>' + response[i].direct  + '</td>' + '<td>' + response[i].type  + '</td></tr>'
        $("#result").append(imgHTML);

        
      }
    })
  }

  
  
  
