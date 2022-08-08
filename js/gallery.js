//preload images
function preload() {
    var images = new Array ();
    var i=0;
    for (i = 0; i<preload.arguments.length;i++){
        images[i]= new Image()
        images.src = preload.arguments[i]
    }
    }
    preload( "images/firefighter.jpg","images/work.jpg","images/silhouette.jpg","images/event.jpg"
)
//the images will get bigger size if hovering on them and return to normal size after   
function bigImg(BImg){
    BImg.style.height="400px";
    BImg.style.width="400px";
}
function normalImg(SImg){
    SImg.style.height="200px";
    SImg.style.width="200px";
}