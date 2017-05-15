// MOVE OBJECT DIAGONALLY
$(document).ready(function(){
  moveImageKey('.pic');
  moveMouse('.pic');
  imgLoop('.picLoop');
});

var checkJump=1;
var checkMove = true;
// Lên = checkJump + 1;
// Xuống = checkJump - 1;
function moveImageKey($argument) {
    var movementSpeed = 50;
    var intervalSpeed = 90;
    var runAnimation = false;
    var animationSpeed = 50;
    var tempMarginTop=null;
    var leftMarginLimit = parseInt($($argument).parent().css('width')) - parseInt($($argument).css('width'));
    var topMarginLimit = parseInt($($argument).parent().css('height')) - parseInt($($argument).css('height'));
    var leftMargin = parseInt($($argument).css('margin-left'));
    var topMargin = parseInt($($argument).css('margin-top'));
    var animationComplete = true;

    /*
    alert("width dau`: " + parseInt($($argument).parent().css('width'))  + "\n" + "width sau: " + parseInt($($argument).css('width'))
        + "\n" + "height dau`: "+ parseInt($($argument).parent().css('height')) + "\n" +
        "height sau: "+ parseInt($($argument).css('height'))
        );
    
*/
 
    var left = false;
    var right = false;
    var up = false;
    var down = false;

    $(document).keyup(function(key) {

        if (key.which == 37 || key.which == 100){left = false;}// trai
        if (key.which == 39 || key.which == 102){right = false;}// phai
        if (key.which == 38 || key.which == 104){up = false;checkJump=2;}// len
        if (key.which == 40 || key.which == 98){down = false;checkJump=0;}// xuong
        if (key.which==97){down=false;left=false;}// 1 - xuong trai
        if (key.which==99){down=false;right=false;}// 3 - xuong phai
        if(key.which==103){up=false;left=false;}// 7 - len trai
        if(key.which==105){up=false;right=false;}// 9 - len phai


    });
    
    $(document).keydown(function(key) {

        if (key.which == 37 || key.which == 100){left = true;}
        if (key.which == 39 || key.which == 102){right = true;}
        if (key.which == 38 || key.which == 104){up = true;checkJump=2;}
        if (key.which == 40 || key.which == 98){down = true;checkJump=0;}
        if (key.which==97){down=true;left=true;}
        if (key.which==99){down=true;right=true;}
        if(key.which==103){up=true;left=true;}
        if(key.which==105){up=true;right=true;}

    });


    

    setInterval(runMovement,intervalSpeed);
    
    function runMovement() {

        if (animationComplete){

            // LEFT
            if (left){
                leftMargin -=movementSpeed;
                if (leftMargin < 0){leftMargin = 0;}
                if (leftMargin > leftMarginLimit){leftMargin = leftMarginLimit;}
            }
            
            // RIGHT
            if (right){
                leftMargin +=movementSpeed;
                if (leftMargin < 0){leftMargin = 0;}
                if (leftMargin > leftMarginLimit){
                    leftMargin = leftMarginLimit;
                }
            }
            
            // UP
            if (up){
                topMargin -=movementSpeed;
                if (topMargin < 0){topMargin = 0;}
                if (topMargin > topMarginLimit){topMargin = topMarginLimit;}
            }
            
            // DOWN
            if (down){
                topMargin +=movementSpeed;
                if (topMargin < 0){topMargin = 0;}
                if (topMargin > topMarginLimit){topMargin = topMarginLimit;}
            }

                // ANIMATION?
                if (runAnimation){
                    animationComplete = false;
                    $($argument).animate({'margin-left': leftMargin+'px','margin-top': topMargin+'px'},animationSpeed,function(){
                        animationComplete = true;
                        

                    });

                }
                    else{
                        $($argument).css({'margin-left': leftMargin+'px','margin-top': topMargin+'px'});
                    
                    }
                    
        }
    }
}


function moveMouse($argument) {

    var ob =document.getElementById($argument);

    ////// Move Object by mouse
    var $dragging = null;
    $(document.body).on("mousemove",function(e) {
        if($dragging){

            // Set toa do khi di chuyen chuot
            $dragging.offset({
                top: e.pageY-10,
                left: e.pageX-10
            });
         //alert(top);
        }
    });

    $(document.body).on("mousedown",$argument,function(e){
        $dragging = $(e.target);
       // alert(e.pageX);
    });

    $(document.body).on("mouseup",function(e) {
        $dragging = null ;
    })

}

/////////////// Loop image/////////////////////////////////////////////////////
var imgObj = document.getElementById('myImage');
    imgObj.style.position= 'relative'; 
    imgObj.style.right = '0px';
     
var animate ; 
// width of parent
var widthOfParent=document.getElementById('Loop').offsetWidth;
// Get width of Object
var widthOfObject=document.getElementById('idPic').offsetWidth;
var heightOfObject=document.getElementById('idPic').offsetHeight;
var txtBox=document.createElement("input");

function moveRight(){

    if((checkJump == 1 || checkJump == 0) && checkMove){

        if(parseInt(imgObj.style.right) ==220){
            checkMove = false;
            if(checkMove == false)
                moveLeft(parseInt(imgObj.style.right));
        }else{
            imgObj.style.right = parseInt(imgObj.style.right) + 10 + 'px';
            animate =setTimeout(moveRight,25);
        }
    } else if(checkJump == 2){
            imgObj.style.right = parseInt(imgObj.style.right) + 10 + 'px';
            animate =setTimeout(moveRight,25);
    } else if(checkJump == 0 && parseInt(imgObj.style.right)  > 220){
        imgObj.style.right = parseInt(imgObj.style.right) + 10 + 'px';
            animate =setTimeout(moveRight,25);
    }
   
   
    

}
function moveLeft($argument){
    
        imgObj.style.right = parseInt(imgObj.style.right) - 10 + 'px';
        animate=setTimeout(moveLeft,0);       

     if (parseInt(imgObj.style.right) == 0) {
            moveRight();
        }

    
}


 function stop(){
    clearTimeout(animate);
    imgObj.style.right = '0px'; 
    }


function jump() {

   alert("Rong: " + widthOfObject  +"\n" +
        "Cao:  " + heightOfObject + "\n" +
        "Temp Margin-Top Parent: " +parseInt(tempParent) + "\n"+
        "Temp Margin-Top After:  " + parseInt(tempAfter)
        );
}


function reLoad() {
    location.reload();
}
 ////////////////////////////////////////////////////////////////////////////////////           
                 
 ////////////////////////move image on in div //////////////////////////////////////
function allowDrop(ev) {
ev.preventDefault();
}

function drag(ev) {
ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
ev.preventDefault();
var data = ev.dataTransfer.getData("text");
ev.target.appendChild(document.getElementById(data));
}
//////////////////////////////////////////////////////