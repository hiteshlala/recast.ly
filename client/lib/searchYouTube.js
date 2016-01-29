// option object contains {query, max, key}

var searchYouTube = (options, callback) => {

$.ajax({
  url: 'https://www.googleapis.com/youtube/v3/search',
  type: 'GET',
  
  data : { 
    part: 'snippet',
    q: options.query, 
    key: options.key, 
    max: options.max || 5,
    videoEmbeddeable: 'true'
  }, 
  
  contentType: 'video',

  success: function(data) {
    console.log("GET recieved ", data);
    callback(data);
  },

  error: function(data) {
    console.log("GET failed");
  }

}); 

console.log("searchYouTube was invoked");

};

window.searchYouTube = searchYouTube;


// 'application/json'
// dataType: 'video',
//max: 5,
