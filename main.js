
var httpRequest = new XMLHttpRequest();
var result = [];
function getName(q) {
    httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${q}&apiKey=c398fc4fb2484abc905dd1326777b831`);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4) {
            result = JSON.parse(httpRequest.response).recipes;
            displayData();
        }
    }
}
    function displayData() {
        var data = "";
        for (var i = 0;i< result.length; i++) {
                data +=`
                    <div class="col-lg-3">
                        <div class="recipe bg-info"> 
                            <img src="${result[i].image_url}"class="img-fluid" />
                            <h2>${result[i].title}</h2>
                            <h3>${result[i].recipe_id}</h3>
                            <button><a href="detales.html?rid='${result[i].recipe_id}'">readmore</a></button>
                        </div>
                    </div>`;
        }
        document.getElementById("pootsection").innerHTML = data;
            }
        var alllink = document.querySelectorAll(".nav-link")
            for(var i=0;i<alllink.length;i++){
                alllink[i].addEventListener('click', function(e){
                    getName(e.target.innerHTML);
                })
            }
            
           