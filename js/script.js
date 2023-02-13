let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

const Name = document.getElementById("bname")
const Number = document.getElementById("bnumber")
const Email = document.getElementById("bemail")
const Date = document.getElementById("bdate")
 Getdata=()=>{
 if(Name.value ==="" || Number.value ===""||Email.value ===""||Date.value ===""){
  alert("Ma'lumotlarni to'liq kiriting")
 }
 else{
  emoji = [
    {
      emoji: "✅",
      description: "check mark button",
      category: "Symbols",
      aliases: ["white_check_mark"],
      tags: [],
      unicode_version: "6.0",
      ios_version: "6.0",
    },
    {
      emoji: "📞",
      description: "telephone receiver",
      category: "Objects",
      aliases: ["telephone_receiver"],
      tags: ["phone", "call"],
      unicode_version: "6.0",
      ios_version: "6.0",
    },
    {
      emoji: "⏰",
      description: "alarm clock",
      category: "Travel & Places",
      aliases: ["alarm_clock"],
      tags: ["morning"],
      unicode_version: "6.0",
      ios_version: "6.0",
    },
    {
      emoji: "👤",
      description: "bust in silhouette",
      category: "People & Body",
      aliases: ["bust_in_silhouette"],
      tags: ["user"],
      unicode_version: "6.0",
      ios_version: "6.0",
    },
    {
      emoji: "💬",
      description: "speech balloon",
      category: "Smileys & Emotion",
      aliases: ["speech_balloon"],
      tags: ["comment"],
      unicode_version: "6.0",
      ios_version: "6.0",
    },
    {
      emoji: "📆",
      description: "tear-off calendar",
      category: "Objects",
      aliases: ["calendar"],
      tags: ["schedule"],
      unicode_version: "6.0",
      ios_version: "6.0",
    },
  ];
  var text = `%0A ${emoji[3].emoji} <b>Name:</b><i class="fa fa-check-square">${Name.value}</i>%0A ${emoji[1].emoji} <b>Number:</b><i class="fa fa-check-square">${Number.value}</i>%0A ${emoji[4].emoji} <b>Email:</b><i class="fa fa-check-square">${Email.value}</i>%0A ${emoji[5].emoji} <b>Date:</b><i class="fa fa-check-square">${Date.value}</i>`

var token = "5728991743:AAFCog0ocEDfi9umMGWU0Lr0ZEYoRKcqvCI"
var chat_id = -1001836669475;   
var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=html`;
let api = new XMLHttpRequest()
api.open("GET",url,true)
api.send()
console.log("Message succesfully sended !");
Name.value=""
Number.value=""
Email.value=""
Date.value=""
 }
}





