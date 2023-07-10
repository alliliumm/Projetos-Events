import "./css/index.css"
import IMask from "imask";


const ccBgColor1 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor2 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

ccBgColor1.setAttribute("fill", "green")
ccBgColor2.setAttribute("fill", "blue")

function setCardType(type) {
    const colors = {
        visa: ["#436D99","#2D57F2"],
        mastercard: ["#DF6F29","#C69347"],
        rocketseat: ["#B71B6F","#9D0808"],
        default: ["black", "gray"],
    }    


    ccBgColor1.setAttribute("fill", colors[type][0]);
    ccBgColor2.setAttribute("fill", colors[type][1]);
    ccLogo.setAttribute("src", `cc-${type}.svg`);

}

setCardType("rocketseat");

globalThis.setCardType = setCardType
//função global

//SECURITY CODE
const securityCode = document.querySelector("#secutiry-code");
// const cvc = document.getElementById("security-code");

// const secutiryCodePattern = {
//     mask: "0000",
// }
// const secutiryCodeMasked = IMask(securityCode, secutiryCodePattern)

const CvcMask = IMask(securityCode, { 
    mask: '0000'
}) 


