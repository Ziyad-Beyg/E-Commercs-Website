// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyAhxvjJC-RJigiSgYGWtk2qscAXQwDE7xc",
//   authDomain: "idealpowertech-665b2.firebaseapp.com",
//   databaseURL: "https://idealpowertech-665b2.firebaseio.com",
//   projectId: "idealpowertech-665b2",
//   storageBucket: "idealpowertech-665b2.appspot.com",
//   messagingSenderId: "869881470894",
//   appId: "1:869881470894:web:d3386bd2e96b2e2ff0723f",
//   measurementId: "G-VEPEGWBTKY"
// };
// // Initialize Firebase

// firebase.initializeApp(firebaseConfig);
   
////////////////////////////////////////////////////////////// start of search bar

$(function() {
  // this creates an array of words to use in the autocomplete
  var availableTags = ["Angle Grinders" , "Bench Drills" , "Blower" , "Chain Saw" , "Circular Saw" , "Cordless Drill Drive" , 
  "Cutt Off Machine" , "Cutter" , "Disc Grinder" , "Electric Drill" , "Engine Brush Cutter" , "Gasoline Water Pump",
  "Hammer" , "Hand Grinders" , "Heat Gun" , "High Pressure Water" , "Impact Drill" , "Jig Saw" , "Mitter Saw",
  "Percussion Drill" , "Planner" , "Polisher" , "Routers" , "Sanders"];
  // this attaches the autocomplete function to your textbox and assigns the array of words as the source
  $( "#userInput" ).autocomplete({ source: availableTags });
});

function redirect() {
var input = document.getElementById('userInput').value.toLowerCase();;
switch(input) {
    case 'angle grinders':
        window.location.replace('power_tools/Angle_Grinders.html');
        break;
    case 'bench drills':
        window.location.replace('power_tools/Bench_Drill.html');
        break;
    case 'blower':
         window.location.replace('power_tools/Blower.html');
         break;
    case 'chain saw':
         window.location.replace('power_tools/Chain_Saw.html');
         break;
    case 'circular saw':
         window.location.replace('power_tools/Circular_Saw.html');
         break;
    case 'cordless drill drive':
         window.location.replace('power_tools/Cordless_drill_drive.html');
         break;
    case 'cutt off machine':
         window.location.replace('power_tools/Cutt_Off_Machine.html');
         break;  
    case 'cutter':
         window.location.replace('power_tools/Cutter.html');
         break;
    case 'disc grinder':
         window.location.replace('power_tools/Disc_Grinders.html');
         break;
    case 'electric drill':
         window.location.replace('power_tools/Electric_Drill.html');
         break;  
    case 'engine brush cutter':
         window.location.replace('power_tools/Engine_Brush_Cutter.html');
         break;
    case 'gasoline water pump':
         window.location.replace('power_tools/Gasoline_Water_Pump.html');
         break;
    case 'hammer':
         window.location.replace('power_tools/Hammer.html');
         break;   
    case 'hand grinders':
         window.location.replace('power_tools/Hand_Grinders.html');
         break;
    case 'heat gun':
         window.location.replace('power_tools/Heat_Gun.html');
         break;
    case 'high pressure water':
         window.location.replace('power_tools/High_Pressure_Water.html');
         break;  
    case 'impact drill':
         window.location.replace('power_tools/Impact_Drill.html');
         break;
    case 'jig saw':
         window.location.replace('power_tools/Jig_Saw.html');
         break;
    case 'mitter saw':
         window.location.replace('power_tools/Mitter_Saw.html');
         break; 
    case 'percussion drill':
         window.location.replace('power_tools/Percussion_Drill.html');
         break;
    case 'planner':
         window.location.replace('power_tools/Planner.html');
         break;
    case 'polisher':
         window.location.replace('power_tools/Polisher.html');
         break;  
    case 'router':
         window.location.replace('power_tools/Router.html');
         break;
    case 'sanders':
         window.location.replace('power_tools/Sanders.html');
         break;
    default:
         window.location.replace('error.html');
         break;
         
    

}


}

////////////////////////////////////////////////////////////// end of search bar

// function autocomplete(inp, arr) {

//   var currentFocus;

//   inp.addEventListener("input", function(e) {

//       var a, b, i, val = this.value;

//       closeAllLists();

//       if (!val) { return false;}

//       currentFocus = -1;

//       a = document.createElement("DIV");

//       a.setAttribute("id", this.id + "autocomplete-list");

//       a.setAttribute("class", "autocomplete-items");

//       this.parentNode.appendChild(a);

//       for (i = 0; i < arr.length; i++) {

//         if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

//           b = document.createElement("DIV");

//           b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";

//           b.innerHTML += arr[i].substr(val.length);

//           b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

//           b.addEventListener("click", function(e) {

//               inp.value = this.getElementsByTagName("input")[0].value;

//               closeAllLists();

//           });

//           a.appendChild(b);

//         }
//       }
//   });

//   inp.addEventListener("keydown", function(e) {

//       var x = document.getElementById(this.id + "autocomplete-list");

//       if (x) x = x.getElementsByTagName("div");

//       if (e.keyCode == 40) {

//         currentFocus++;

//         addActive(x);

//       } else if (e.keyCode == 38) { 

//         currentFocus--;

//         addActive(x);

//       } else if (e.keyCode == 13) {

//         e.preventDefault();

//         if (currentFocus > -1) {

//           if (x) x[currentFocus].click();

//         }
//       }
//   });

//   function addActive(x) {

//     if (!x) return false;

//     removeActive(x);

//     if (currentFocus >= x.length) currentFocus = 0;

//     if (currentFocus < 0) currentFocus = (x.length - 1);

//     x[currentFocus].classList.add("autocomplete-active");

//   }

//   function removeActive(x) {

//     for (var i = 0; i < x.length; i++) {

//       x[i].classList.remove("autocomplete-active");

//     }
//   }

//   function closeAllLists(elmnt) {

//     var x = document.getElementsByClassName("autocomplete-items");

//     for (var i = 0; i < x.length; i++) {

//       if (elmnt != x[i] && elmnt != inp) {

//         x[i].parentNode.removeChild(x[i]);

//       }
//     }
//   }

//   document.addEventListener("click", function (e) {

//     closeAllLists(e.target);

//   });
// }

// function searched_element(){

//   var searched_element = document.getElementById("myInput");

//   console.log(searched_element.value);
  
//   searched_element.value = "";

// }

// var tools = ["CORDLESS DRIVE DRILL (FDS9VA)", "HAMMER (H41SA)", "HAMMER  (H50)", 
// "HAMMER (H41)", "HAMMER (H41SC)", "IMPACT DRILL (FDV12V)", "IMPACT DRILL (FDV16VB2)", "IMPACT DRILL (D10VSTA)", 
// "ROTRY HAMMER (DH24PH)", "ROTARY HAMMER (DH28PCY)", "IMPACT DRILL (DV13VST)", "IMPACT DRILL(DV13VST)", 
// "HAMMER (H41SST)", "CORDLESS DRIVER DRILL (FDS12DVA)", "HAMMER (PH65A)", "HAMMER DRILL(DH26PC)", 
// "HAMMER DRILL (PR38E)", "IMPACT DRILL (DV16VSS)", "IMPACT DRILL (DV18V)", "IMPACT DRILL (VTP 18)", 
// "IMPACT DRILL (DV13VSS)", "IMPACT DRILL (VTV16)", "Cordless Driver Drill (DN10DSA)", "Cordless Impact Driver Drill (DV14DBL)", 
// "Cordless Impact Driver Drill (DV14DL)", "Cordless Impact Driver (WH12DMR)", "Cordless Impact Driver(DV18DBEL)", 
// "CORDLESS IMPACT DRIVER (WH18DMC)", 
// ///////////////////////////////////////////"( WH12DMR)",//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// "PERCUSSION DRILL (IMPACT DRILL)(BSM-500-P)",
// "PERCUSSION DRILL (IMPACT DRILL)(BSM-750-U)", "ELECTRIC DRILL(DW201/DR10)", "ELECTRIC DRILL (DR10/DW201)", 
// "26MM ROTARY HAMMER (R2626/XLRH26)", "DEMOLITION HAMMER (R0810/XLDH)", "DEMOLITION HAMMER (R8065/XLDH2)", 
// "ELECTRIC DRILL (ED13A)", "ELECTRIC DRILL (JIZ-KD-11-10)", "ELECTRIC DRILL (JIZ-KD-11-13)", "CORDLESS DRILL 12V (P0L-KD30-10)",
// "CORDLESS DRILL 18V (P0L-KD30-10)", "PERCUSSION DRILL (IMPACT DRIL)(SPD-755-Q)", "PERCUSSION DRILL (IMPACT DRILL) (SPD-855x2)", 
// "PERCUSSION DRILL (IMPACT DRILL) (SPD-1055 x2)", "ROTARY HAMMER (SRD-850-K)", "IMPACT DRILL (YT-82035)",
// "IMPACT DRILL ( YT-82040)", "ROTARY HAMMER (YT-82120)", "CORDLESS DRILL (78982)", "CORDLESS DRILL (78983)",
// "IMPACT DRILL (79002)", "DISC GRINDER (G23SC4)", "DISC GRINDER ( G13SB3)", 'DISC GRINDER 4" (G10VE)', 
// "DISC GRINDER ( G10SS 2)", "DISC GRINDER ( G10SR4)", "DISC GRINDER (G13SS2)", "DISC GRINDER (G13SC2)", 
// "DISC GRINDER (PDA100D)", 'DISC GRINDER 4" (S15)', "DISC GRINDER ( G18MR)", "DISC GRINDER ( G18ST)", 
// "DISC GRINDER", "DISC GRINDER (G18SE3)", "DISC GRINDER (G23ST)", "100MM ANGLE GRINDER (R9510/XLAG100L)", 
// "125MM ANGLE GRINDER (R9510/XLAG125L)", "180MM ANGLE GRINDER (R9020/XLAG180)", "230MM ANGLE GRINDER (R9020/XLAG230)", 
// "Angle Grinder (XL-AG125)", "ANGLE GRINDER (SIMKD39-180)", "ANGLE GRINDER (SIMKD15-230)", "ANGLE GRINDER (SAG-2401)", 
// "BELT SANDER (SB75)", "ORBITAL SANDER (FS10SB)", "ORBITAL SANDER (SV12SA)", "ORBITAL SANDER (SV12SG)", 
// "BELT SANDER (BBS-801N)", "ORBITAL SANDER ( DW330)", "CHAIN SAW (CS350A)", "ENGINE CHAIN SAW CS25EPB(S)", 
// "ENGINE CHAIN SAW (CS33EB)", "ENGINE CHAIN SAW (CS33EDT)", "ENGINE CHAIN SAW (CS40EA)", "ENGINE CHAIN SAW (CS51EA)", 
// "CHAIN SAW (DW826)", "POLISHER (SP18SA)", "180MM POLISHER ( R9227/XLP180)", "12MM ELECTRIC ROUTER ( R3612/XLR12)", 
// "ROUTER ( M12SA2)", "CIRCULAR SAW (C9SA3)", "CIRCULAR SAW (C7SS)", "185MM CIRCULAR SAW ( R5802/XLCS185)", 
// "CIRCULAR SAW (XL-185CS)", "CIRCULER SAW (DW822)", "CIRCULAR SAW ( DW821)", "CIRCULER SAW ( DW811/CS185-2)",
//  "CIRCULER SAW ( DW811 LT)", "CIRCULER SAW ( DW822)", "MITTER SAW ( C10FCE2)", 
// "MITER SAW (C15FB)", "JIG SAW (FCJ65V)", "JIG SAWS (FCJ65V3)", "JIG SAW ( DJS-505-B)", "CUTT OF MACHINE ( CC16SB)", 
// "CUTT OF MACHINE ( CC14ST)", "CUTT OF MACHINE HIGH SPEED (CC14STA)", "CUTTER (CM4SB2)", "MARBLE CUTTER (XL-101)", 
// "MARBLE CUTTER ( DW413B2)", "MARBLE CUTTER ( DW418)", "MARBLE CUTTER  ( DW421)", "PLANNER (JP20)", 
// "ELECTRIC PLANNER (BFB-850-T)", "ELECTRIC PLANNER (BFB-710-N)", "PLANNER (XL-82PL)", "HEAT GUN ( RH650V)", 
// "HEAT GUN ( XL-HG1600)", "YATO DIGITAL HEAT GUN (YT-8230)", "BLOWER (RB40VA)", "PORTABLE BLOWER ( R1103/XLB)", 
// "PORTABLE BLOWER ( R4012/XL2)", "BLOWER (XL-304)", "ENGINE BRUSH CUTTER (CG31EBF(L))", "ENGINE BRUSH CUTTER (CG31EBS)", 
// "ENGINE BRUSH CUTTER ( CG40EBF(L))", "BENCH DRILL MACHINE ( ART NO 21116H)", "BENCH DRILL MACHINE ( ART NO 21125A)", 
// "HAND GRINDER (LDU4)", "HAND GRINDER (GP2S2)", "HAND GRINDER (GP5V)", "6MM DIE GRINDER (R0800/XL-  DG6L)", 
// "HIGH PRESSURE WASHER (YT-85910)", "HIGH PRESSURE WASHER (YT-85915)", 'GASOLINE WATER PUMP 4" 7.7HP 60M3/H (YT85403)', 
// 'GASOLINE WATER PUMP 3" 5.9HP 60 (YT85402)', "GASOLINE GENERATOR (YT-85437)", "GASOLINE GENERATOR (YT-85440E)", 
// "GASOLINE GENERATOR (YT-85432E)", "GASOLINE GENERATOR (YT-85434)", "PORTABLE GASOLINE GENERATOR (YT-85421)", 
// "PORTABLE GASOLINE GENERATOR (YT-85422)"];

// autocomplete(document.getElementById("myInput"), tools);

var myCustomScrollbar = document.querySelector('.my-custom-scrollbar');
// var ps = new PerfectScrollbar(myCustomScrollbar);

var scrollbarY = myCustomScrollbar.querySelector('.ps__rail-y');

myCustomScrollbar.onscroll = function () {
  scrollbarY.style.cssText = `top: ${this.scrollTop}px!important; height: 400px; right: ${-this.scrollLeft}px`;
}


// START OF FIREBASE CODE

// var firebase_key = firebase.database().ref("power_tool").push().key

// var database = firebase.database();
// var ref = database.ref("power_tools");

// var all_products = {
//   product:"",
//   link:"power_tools/Cordless_drill_drive.html",
// }

// END OF FiREBASE CODE

// var a = Date();
// // console.log(all_products[0].link);

// // var all_products = [
// var tat = {
//   // id:firebase_key,
//   date: a,
//   product:"asdjas",
//   link:"power_tools/Cordless_drill_drive.html",
//   price:"91283u"
//   }

//   console.log(tat);

// ]

// var tool_now;

// for(var i = 0; i < tools.length; i++){
//   // tool_now = tools[i];
//   // all_products[i]["product"] === tools[i];
//   console.log(all_products)
// }

// console.log(all_products[0]["link"]);


// tools_id = [];
// for(var i = 0 ; i < tools.length; i++){
//   tools_id[i] = i;
//   console.log(tools_id);
//   console.log(tools[141])
// }

  
function myCardfunction()
{
  document.getElementById('card_extend').setAttribute("class", "card_modified");
}

function myOldcard()
{
  document.getElementById('card_extend').setAttribute("class", "card_old");
}
