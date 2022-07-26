 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 
 function onYouTubeIframeAPIReady() 
 {
    new YT.Player('player', {    
     videoId: 'Tdwetb0Mvyc',  // 최초 재생할 유트브 영상 ID
     //videoId: '00xEeTLySus',  // 최초 재생할 유트브 영상 ID
     
     playerVars:{
      autoplay: true,
      loop:true,
      playlist: 'Tdwetb0Mvyc'
      //playlist: '00xEeTLySus'
     },
     events: {
       onReady: function(event){
        event.target.mute();
       }
     }
   });
 }

