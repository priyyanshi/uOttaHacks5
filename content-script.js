//for seo, check for meta data and image alt
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting === "hello"){
            var meta = document.querySelector('meta[name="description"]').content;
            var imgs = document.getElementsByTagName('img');
            var no_alts = []
            for (var i = 0; i < imgs.length; i++) {
                var alt_text = imgs[i].alt;
                if (alt_text.length==0){
                    no_alts.push(imgs[i].src)
                }
            }
            sendResponse({metadata: meta.length, images: no_alts});
        }
    }   
);
