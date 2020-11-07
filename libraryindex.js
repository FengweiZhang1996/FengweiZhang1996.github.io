//<FengweiZhang>
function makeApicall()
{
    console.log("he1lo");
    var tags = document.getElementById("search").value;
    var numImages = document.getElementById("myList").value;
    var extras = "url_sq";
    var privacy_filter = 1;
    var safe_search = 1;

    var url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7d29c35b9e8a7cd7d3e580590556b4c0&tags=truck&extras=url_sq&format=json&nojsoncallback=1'

    $.ajax({url:url, dataType:"json"}).then(function(data)
    {
            console.log(data);
            console.log(numImages);
            console.log(tags);
            var i;
            for (i=0; i<numImages;i++)
            {
                document.getElementById("images").innerHTML+="<div style='width:200p><div class='card-body '><img class='card-img' src = "+data.photos["photo"][i].url_sq+" alt='Avatar' style='width: 20%; height: 5%; margin:2.45%;' >"
            }

    })

    .catch(function(error) {console.log(error)})

}

/*
for (i=0; i<numImages;i++)
            {
                document.getElementById("images").innerHTML+="<div style='width:200p><div class='card-body '><img class='card-img' src = "+data.photos["photo"][i].url_sq+" alt='Avatar' style='width:100%' >"
            }
            */

            /*
var card = "";
            for (i=0; i<numImages;i++)
            {
                card += '<div style="width: 100%;">\
                  <div class="card">\
                    <div class="card-body"> \
                        <div style="width:200p"><div class="card-body "">\
                        <img class="card-img" src = '+data.photos["photo"][i].url_sq+' alt="Avatar" style="width:100%" > \
                    </div>\
                  </div>\
                </div>'
                 document.getElementById("images").innerHTML+=card;

            }
*/