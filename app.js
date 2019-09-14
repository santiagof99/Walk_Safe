var express = require("express");
var app = express();
var request = require("request");

app.use(express.static("public"));

app.get("/", function(req,res){
    var url = "https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/Robbery_2014_to_2017/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";
    request(url,function(error,response,body){
        if(!error&&response.statusCode == 200){
            var data = JSON.parse(body);
            
            var crimeList =[];
            var count = 0;
    
            data["features"].forEach(function(crime){
                var crimeObj = {crimeDiv: crime["attributes"].Division,lattitude:crime["attributes"].Lat,longitude:crime["attributes"].Long, numOccur: 0};

                if(crimeList.length == 0){
                    crimeList.push(crimeObj);
                }

                else{
                    var increased = false;
                    for (var i = 0; i < crimeList.length; i++) {
                        if (crimeList[i].crimeDiv == crimeObj.crimeDiv) {
                            crimeList[i].numOccur = crimeList[i].numOccur + 1;
                            increased = true;
                        } 
                    }
                    if(increased == false){
                        crimeList.push(crimeObj);
                    }
                }
            })
        }
    })
});

app.listen(3000, function () {
    console.log('Crime Server is up!');
  });
