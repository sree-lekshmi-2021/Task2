//create a request instance 
var req= new XMLHttpRequest();
//initiate a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request
req.send();
//load the function
//this function will trigger only when
//data received successfully
req.onload=function()
{
    var data=JSON.parse(this.response);
    //console.log(data);
    
    for (var key in data) {
       
           console.log(data[key].name);
    
     }


}