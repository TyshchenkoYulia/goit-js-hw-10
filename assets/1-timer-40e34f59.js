import{f as s,i}from"./vendor-77e16229.js";document.querySelector("#datetime-picker");const l=document.querySelector("button[data-start]");document.querySelector("span[data-days]");document.querySelector("span[data-hours]");document.querySelector("span[data-minutes]");document.querySelector("span[data-seconds]");const u={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<Date.now()&&i.show({id:null,titleSize:"",titleLineHeight:"",message:"Please choose a date in the future",messageColor:"white",theme:"light",color:"red",icon:"",iconText:"Error",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}}),console.log(e[0])}};s("#datetime-picker",u);function o(e){const t=Math.floor(e/864e5),n=Math.floor(e%864e5/36e5),r=Math.floor(e%864e5%36e5/6e4),a=Math.floor(e%864e5%36e5%6e4/1e3);return{days:t,hours:n,minutes:r,seconds:a}}console.log(o(2e3));console.log(o(14e4));console.log(o(2414e4));l.addEventListener("click",e=>{});
//# sourceMappingURL=1-timer-40e34f59.js.map
