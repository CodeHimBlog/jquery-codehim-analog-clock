/*  Plugin: Codehim Clock (Realistic Analog Clock)
 *   Frameworks: jQuery 3.3.1 
 *   Author: Asif Mughal
 *   GitHub: https://github.com/CodeHimBlog
 *   URL: https://www.codehim.com
 *   License: MIT License
 *   Copyright (c) 2018 - Asif Mughal
 */
/* File: jquery.codehim.clock.js */
(function($){
      $.fn.CodehimClock = function(options) {
      var setting = $.extend({
    		        showSeconds: true, //false to hide seconds hand
                 showDate: true, //false to hide day and date
                 clockSize: "original", //possible options xsmall and xlarge
  		   }, options);
  
        return this.each(function() {
 var clockDale,
   secondHand,
   minuteHand,
   hourHand,
   clockCenter,
   clockLogo,
   smallPoints,
   dateSticker,
   dayShow,
   dateShow,
   $time,
   $second,
   $minute,
   $hour,
   $csp,
   $cmp,
   $chp;
   
    $time = new Date();
    $second = $time.getSeconds();
    $minute = $time.getMinutes();
    $hour = $time.getHours();
 $csp = 0; //current second position 
 $cmp = 0; //current minutes position
 $chp = 0; //current hour position

//Checking what is second and minute position right now 
  for (var y = 6; y <= 360; y +=6){

    if ( (y/$second).valueOf() === 6){ 
         $csp = y;
      }
    if ( (y/$minute).valueOf() === 6){ 
         $cmp = y;
     }
}

//Checking what is hour position right now 
  for (var v = 0; v <= 360; v += 15){
    var hoursHand = $hour*30+($minute/2.1).valueOf();
    $chp = hoursHand;
  }

//Creating clock structure
  clockDale = $div();
  secondHand = $div();
  minuteHand = $div();
  hourHand =  $div();
  clockCenter = $div();
  clockLogo = $div();
  dateSticker = $div();
  dayShow = $span();
  dateShow = $span();

// Clock numbers 
 var r = 1;
      do {
             var num = $span();
             var $thisClass = "number " + "p"+r;
             $(num).html(r)
             .addClass($thisClass)
             .appendTo(clockDale);
     r++;
          } while( r <= 12 );

setInterval(function(){

var $time = new Date();
var second = $time.getSeconds();
var minute = $time.getMinutes();
var hour = $time.getHours();

//assigning values to seconds, minutes and hours after each second
   $csp += 6; 
   $cmp += 0.10;
   $chp += 0.0016666667;

//begin again clock hands rotation after completion of one round
if ($csp >= 360 || second == 0){
    $csp = 0;
    $chp += 0.10;
}

//rotation of second hand with css3 transformation 
$(secondHand).addClass("seconds-hand")
.css({
      'transform' : 'rotate('+ $csp+'deg)',
      'transformOrigin' : 'bottom',
      'transition' :  '0s',
});

//minutes
$(minuteHand).addClass("minutes-hand")
.css({
      'transform' : 'rotate('+$cmp+'deg)',
      'transformOrigin' : 'bottom',
});

//hours
$(hourHand).addClass("hours-hand")
.css({
      'transform' : 'rotate('+$chp+'deg)',
      'transformOrigin' : 'bottom',
}); 

},1000);

$(clockDale)
    .append(minuteHand)
    .append(hourHand)

// applying clock settings
    .addClass(setting.clockSize);
    
if( setting.showSeconds == true){
    $(clockDale).append(secondHand);
}


$(clockCenter)
    .addClass("clock-center")
    .appendTo(clockDale);

$(clockLogo)
    .html("Codehim"+
    "<span>www.codehim.com</span>")
    .addClass("clock-logo")
    .appendTo(clockDale);

var $stData = [];

for (var st =6; st <= 360; st +=6){

   var stRot = {
   'transform' : 'rotate('+st+'deg)',
   '\-webkit\-transform' : 'rotate('+st+'deg)',
};


   $stData.push(stRot);
}


 for (var $sr = 0; $sr <= 59; $sr++)
       { 
             smallPoints = $span();
           var $thisClass = "point" + " pt"+$sr;  
             $(smallPoints)
                 .addClass($thisClass)
                 .css($stData[$sr])
                .appendTo(clockDale);
          } 


var days = [
   "Sun", 
   "Mon", 
   "Tue", 
   "Wed", 
   "Thu", 
   "Fri", 
   "Sat"
   ];

var $thisDay = $time.getDay();
var $thisDate = $time.getDate();
var daleinner = $div();
var spinner1 = $div();
var spinner2 = $div();

$(dayShow).html(days[$thisDay])
    .addClass("day")
    .appendTo(dateSticker);

$(dateShow).html($thisDate)
    .addClass("date")
    .appendTo(dateSticker);

if (setting.showDate == true){
    $(dateSticker)
      .addClass("date-box")
      .appendTo(clockDale);
}

$(daleinner)
    .addClass("dale-inner")
    .appendTo(clockDale);

$(spinner1)
    .addClass("logo-outer")
    .appendTo(clockDale);

$(spinner2)
    .addClass("logo-outer1")
    .appendTo(clockDale);

$(clockDale)
    .addClass("codehim-clock-dale")
    .appendTo(this);



function $div(){ 
   return document.createElement("div");
}
function $span(){
   return document.createElement("span");
}
        });
      };
    
    })(jQuery);

/*   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */