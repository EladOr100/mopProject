   var _height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
   var _width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
   var _block_height = Math.round(_height / 9);
   var _block_width = Math.ceil(_width / 16);
   var _animation_delay = 0.03;
   var _blocks = "<div id='unfold-block'><st" + "yle> .unfold-box{ width:" + _block_width + "px;" + "height:" + _block_height + "px; } </st" + "yle>";
   for (var i = 0; i < 9; i++) {
     for (var j = 0; j < 15; j++) {
       _blocks += "<div class='unfold-box' style='transition-delay:" + _animation_delay + "s;'></div>"
       _animation_delay += 0.03;
     }
     _blocks += "<div class='unfold-box' style='transition-delay:" + _animation_delay + "s;width:"+ ( _width - (_block_width * 15)) + "px;'></div>";
     _animation_delay += 0.03;
   }


   _blocks += "<div id='loader'><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span><span>...</span><span>T</span><span>E</span><span>S</span><span>T</span><span>...</span><span>M</span><span>A</span><span>N</span><span>A</span><span>G</span><span>E</span><span>R</span></div></div>";
   document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', _blocks);
document.getElementsByTagName("body")[0].style.overflow = "hidden";
   setTimeout(function() {

     var _blocksDOM = document.querySelectorAll(".unfold-box");
     for (var k = 0; k < _blocksDOM.length; k++) {
       var block = _blocksDOM[k];
       block.classList.add("clear");
     }
     document.getElementById("unfold-block").classList.add("clear");
   }, 2000);

   setTimeout(function() {
     document.getElementById('loader').classList.add('clear');
   }, 4000);

   setTimeout(function() {
     document.getElementById("unfold-block").remove();
     document.getElementsByTagName("body")[0].style.overflow = "hidden";
   }, 7000);



   var survey = []; //Bidimensional array: [ [1,3], [2,4] ]

 //Switcher function:
$(".rb-tab").click(function(){
  //Spot switcher:
  $(this).parent().find(".rb-tab").removeClass("rb-tab-active");
  $(this).addClass("rb-tab-active");
});
   
   //Save data:
   $(".trigger").click(function(){
     //Empty array:
     survey = [];
     //Push data:
     for (i=1; i<=$(".rb").length; i++) {
       var rb = "rb" + i;
       var rbValue = parseInt($("#rb-"+i).find(".rb-tab-active").attr("data-value"));
       //Bidimensional array push:
       survey.push([i, rbValue]); //Bidimensional array: [ [1,3], [2,4] ]
     };

     testResz();
   });
   
   //Debug:
   function debug(){
     var debug = "";
     for (i=0; i<survey.length; i++) {
   
       debug += "Nº " + survey[i][0] + " = " + survey[i][1] + "\n";
     };
     alert(debug)
     
   };
   function testResz(){

     if(survey[0][1]==1)
     {
      window.open("http://localhost:3000/exec")
     }
//if((survey[0][1]!=2)&&(survey[0][2]!=2)&&(survey[0][3]!=2)&&(survey[0][4]!=2)&&(survey[0][5]!=2))

   else
   window.open("https://media.giphy.com/media/oSUtmrhRz5te0/giphy.gif");
   
   };