function populate(){
 newday = '';
 for (let i = 0; i < inp.innerHTML.length; i++) {
  var digit = parseInt(inp.innerHTML[i]);
  var subtractedDigit = 9 - digit;
  newday += subtractedDigit;
 }
 out.innerHTML = newday+'-9';
}
jQuery('#thedate').change( function(){
 inp.innerHTML = this.value;
 populate();
});
var inp  = document.getElementById("thedate");
var out = document.getElementById("output");
var newday = '';
var today = new Date();
var mon = today.getMonth()+1;
var tod = today.getDate();
//initial populate
 if(mon<=9){mon = "0"+mon;}
 if(tod<=9){tod = "0"+tod;}
 today = '' + today.getFullYear() + mon + tod;
 today=today.toString();
 inp.innerHTML=today;
 populate();
