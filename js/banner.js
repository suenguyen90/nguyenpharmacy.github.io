//preload images
function preload() {
    var images = new Array ();
    var i=0;
    for (i = 0; i<preload.arguments.length;i++){
        images[i]= new Image()
        images.src = preload.arguments[i]
    }
    }
    preload( "images/banner1.jpg","images/banner2.jpg","images/banner3.jpg"
)

window.onload = rotate;

//declare variable and create an array for the images
var Exchange = 0;
var bannerImages = new Array ("images/banner1.jpg","images/banner2.jpg","images/banner3.jpg");

//Create the function to rotate the images; once the rotation reaches the maximum of the number of images, it resets to 0 or first image
function rotate(){
    if (Exchange == bannerImages.length){
        Exchange = 0;
    }
        document.getElementById("image1").src = bannerImages[Exchange];
    Exchange++;
    
//set rotate every 3000 milliseconds
    setTimeout(rotate, 3*1000);
}

