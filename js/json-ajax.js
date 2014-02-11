function loadJSON(){
   var data_file = "data.json";
   var http_request = new XMLHttpRequest();
   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Your browser may not support AJAX, or refresh cause something went wrong");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){

      // readyState == 4 means the request was successful
      if (http_request.readyState == 4  ){
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        // My Entire JSON Object from data.json
        // console.log(jsonObj);

        // var img = document.createElement("img");
        // img.src = jsonObj[0].imageUrl;
        // document.appendChild(img);

        // Div to append all my results to
        var feedWrapper = document.getElementById('article-feed');

        // Create an Img with src attribute as the imageURL
        var articleImage = document.createElement('img');
        // articleImage.setAttribute('src',jsonObj[0].imageUrl);

        // Article Heading
        var articleHeading = document.createElement('h1');
        articleHeading.innerHTML = jsonObj[0].title;

        // Append the Image to the article-feed div.
        feedWrapper.appendChild(articleImage);
        feedWrapper.appendChild(articleHeading);

        for (var key in jsonObj) {
          // console.log(jsonObj[key]);
          // Create an Img with src attribute as the imageURL
          var articleImage = document.createElement('img');
          articleImage.setAttribute('src',jsonObj[key].imageUrl);

          // Article Heading
          var articleHeading = document.createElement('h1');
          articleHeading.innerHTML = jsonObj[key].title;

          // Article Heading
          var articleCaption = document.createElement('p');
          articleCaption.innerHTML = jsonObj[key].caption;

          // Append the Image to the article-feed div.
          feedWrapper.appendChild(articleImage);
          feedWrapper.appendChild(articleHeading);
          feedWrapper.appendChild(articleCaption);
        }
      }

   }
   http_request.open("GET", data_file, true);
   http_request.send();
}

//auto load loadJSON();