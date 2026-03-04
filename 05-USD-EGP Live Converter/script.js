"use strict";

const usdInput = document.getElementById("usd");
const egpInput = document.getElementById("egp");

const rate = 47;

// دالة تحويل لرقمين عشريين
function formatNumber(num){
    return Number(num).toFixed(2);
}

// لما يكتب في الدولار
usdInput.addEventListener("input", function(){

    if(usdInput.value === ""){
        egpInput.value = "";
        return;
    }

    const usdValue = Number(usdInput.value);

    if(isNaN(usdValue)){
        egpInput.value = "";
        return;
    }

    egpInput.value = formatNumber(usdValue * rate);
});

// لما يكتب في الجنيه
egpInput.addEventListener("input", function(){

    if(egpInput.value === ""){
        usdInput.value = "";
        return;
    }

    const egpValue = Number(egpInput.value);

    if(isNaN(egpValue)){
        usdInput.value = "";
        return;
    }

    usdInput.value = formatNumber(egpValue / rate);
});