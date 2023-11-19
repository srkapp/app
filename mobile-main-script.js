function onload() {
    depositFORM_SELECTBANK = document.getElementById('depositFORM_SELECTBANK');
    depositFORM_CUSTOMRATE = document.getElementById('depositFORM_CUSTOMRATE');
    depositFORM_AMOUT = document.getElementById('depositFORM_AMOUT');
    depositFORM_DATEAMOUT = document.getElementById('depositFORM_DATEAMOUT');
    depositFORM_SUBMIT = document.getElementById('depositFORM_SUBMIT');
    depositFORM_IGNORE = document.getElementById('depositFORM_IGNORE');

    pensionFORM_AMOUT = document.getElementById('pensionFORM_AMOUT');
    pensionFORM_DATEAMOUT = document.getElementById('pensionFORM_DATEAMOUT');
    pensionFORM_SUBMIT = document.getElementById('pensionFORM_SUBMIT');
    pensionFORM_IGNORE = document.getElementById('pensionFORM_IGNORE');

}

function depositFORM_VALIDATEFORM() {
    if(depositFORM_SELECTBANK.value != "NONE"){
        if(depositFORM_SELECTBANK.value == "CUSTOM"){
            depositFORM_CUSTOMRATE.classList.remove("hide");
            if(depositFORM_AMOUT.value != "" && depositFORM_DATEAMOUT.value != "" && depositFORM_CUSTOMRATE.value != "") {
                depositFORM_SUBMIT.classList.remove("hide");
                depositFORM_IGNORE.classList.add("hide");
            } else {
                depositFORM_SUBMIT.classList.add("hide");
                depositFORM_IGNORE.classList.remove("hide");
            }
        } else {
            depositFORM_CUSTOMRATE.classList.add("hide");
            if(depositFORM_AMOUT.value != "" && depositFORM_DATEAMOUT.value != "") {
                depositFORM_SUBMIT.classList.remove("hide");
                depositFORM_IGNORE.classList.add("hide");
            } else {
                depositFORM_SUBMIT.classList.add("hide");
                depositFORM_IGNORE.classList.remove("hide");
            }
        }

        if(depositFORM_SELECTBANK.value == "CUSTOM"){
            depositFORM_RATE = depositFORM_CUSTOMRATE.value;
        } else if (depositFORM_SELECTBANK.value == "BBL") {
            depositFORM_RATE = 0.450
        } else if (depositFORM_SELECTBANK.value == "KTB") {
            depositFORM_RATE = 0.300
        } else if (depositFORM_SELECTBANK.value == "KBANK") {
            depositFORM_RATE = 0.300
        } else if (depositFORM_SELECTBANK.value == "SCB") {
            depositFORM_RATE = 0.300
        } else if (depositFORM_SELECTBANK.value == "BAY") {
            depositFORM_RATE = 0.300
        } else if (depositFORM_SELECTBANK.value == "TTB") {
            depositFORM_RATE = 0.125
        } else if (depositFORM_SELECTBANK.value == "UOBT") {
            depositFORM_RATE = 0.350
        } else if (depositFORM_SELECTBANK.value == "CIMBT") {
            depositFORM_RATE = 0.350
        } else if (depositFORM_SELECTBANK.value == "TISCO") {
            depositFORM_RATE = 0.300
        } else if (depositFORM_SELECTBANK.value == "MEGA") {
            depositFORM_RATE = 0.400
        } else if (depositFORM_SELECTBANK.value == "KKP") {
            depositFORM_RATE = 0.250
        } else if (depositFORM_SELECTBANK.value == "LHBANK") {
            depositFORM_RATE = 0.250
        } else if (depositFORM_SELECTBANK.value == "ICBCT") {
            depositFORM_RATE = 0.700
        } else if (depositFORM_SELECTBANK.value == "TCR") {
            depositFORM_RATE = 0.400
        }
    }
}

function depositFORM_SUBMITFORM() {
    Cookies.set('depositFORMVALUE_RATE', depositFORM_RATE, { expires: 365 })
    Cookies.set('depositFORMVALUE_AMOUT', depositFORM_AMOUT.value, { expires: 365 })
    Cookies.set('depositFORMVALUE_DATEAMOUT', depositFORM_DATEAMOUT.value, { expires: 365 })
    window.location.href = "result/";
}

function depositFORM_CALCULATE() {
    depositFORMVALUE_RATE = Cookies.get('depositFORMVALUE_RATE')
    depositFORMVALUE_AMOUT = Cookies.get('depositFORMVALUE_AMOUT')
    depositFORMVALUE_DATEAMOUT = Cookies.get('depositFORMVALUE_DATEAMOUT')

    
    date = depositFORMVALUE_DATEAMOUT/365
    result = depositFORMVALUE_AMOUT*depositFORMVALUE_RATE*date
    result = Math.round(result * 100) / 100
    
    document.getElementById("depositRESULT_BAHT").innerHTML = result
    document.getElementById("depositRESULT_RATE").innerHTML = depositFORMVALUE_RATE
}

function pensionFORM_VALIDATEFORM() {
    if(pensionFORM_AMOUT.value != "" && pensionFORM_DATEAMOUT.value != ""){
        pensionFORM_SUBMIT.classList.remove("hide");
        pensionFORM_IGNORE.classList.add("hide");
    } else {
        pensionFORM_SUBMIT.classList.add("hide");
        pensionFORM_IGNORE.classList.remove("hide");
    }
}

function pensionFORM_SUBMITFORM() {
    Cookies.set('pensionFORMVALUE_AMOUT', pensionFORM_AMOUT.value, { expires: 365 })
    Cookies.set('pensionFORMVALUE_DATEAMOUT', pensionFORM_DATEAMOUT.value, { expires: 365 })
    window.location.href = "result/";
}    

function pensionFORM_CALCULATE() {
    pensionFORMVALUE_AMOUT = Cookies.get('pensionFORMVALUE_AMOUT')
    pensionFORMVALUE_DATEAMOUT = Cookies.get('pensionFORMVALUE_DATEAMOUT')

    
    factor = pensionFORMVALUE_AMOUT*pensionFORMVALUE_DATEAMOUT
    result = factor/50
    result = Math.round(result * 100) / 100
    
    document.getElementById("pensionRESULT_BAHT").innerHTML = result
}
