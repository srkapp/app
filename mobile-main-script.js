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

    loanFORM_CUSTOMRATE = document.getElementById('loanFORM_CUSTOMRATE');
    loanFORM_AMOUT = document.getElementById('loanFORM_AMOUT');
    loanFORM_YEARAMOUT = document.getElementById('loanFORM_YEARAMOUT');
    loanFORM_PERIODAMOUT = document.getElementById('loanFORM_PERIODAMOUT');
    loanFORM_SUBMIT = document.getElementById('loanFORM_SUBMIT');
    loanFORM_IGNORE = document.getElementById('loanFORM_IGNORE');

    loan2FORM_CUSTOMRATE = document.getElementById('loan2FORM_CUSTOMRATE');
    loan2FORM_AMOUT = document.getElementById('loan2FORM_AMOUT');
    loan2FORM_DATE = document.getElementById('loan2FORM_DATE');
    loan2FORM_YEAR = document.getElementById('loan2FORM_YEAR');
    loan2FORM_SUBMIT = document.getElementById('loan2FORM_SUBMIT');
    loan2FORM_IGNORE = document.getElementById('loan2FORM_IGNORE');
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
    var depositFORMVALUE_RATE = Cookies.get('depositFORMVALUE_RATE')
    var depositFORMVALUE_AMOUT = Cookies.get('depositFORMVALUE_AMOUT')
    var depositFORMVALUE_DATEAMOUT = Cookies.get('depositFORMVALUE_DATEAMOUT')

    document.getElementById("depositRESULT_RATE").innerHTML = depositFORMVALUE_RATE

    var depositFORMVALUE_RATE = depositFORMVALUE_RATE / 100
    
    var depositRESULT_BAHT = depositFORMVALUE_AMOUT * depositFORMVALUE_RATE * (depositFORMVALUE_DATEAMOUT / 365)
    var depositRESULT_BAHT = Math.round(depositRESULT_BAHT * 100) / 100
    
    document.getElementById("depositRESULT_BAHT").innerHTML = depositRESULT_BAHT
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
    var pensionFORMVALUE_AMOUT = Cookies.get('pensionFORMVALUE_AMOUT')
    var pensionFORMVALUE_DATEAMOUT = Cookies.get('pensionFORMVALUE_DATEAMOUT')


    var pensionRESULT_BAHT = (pensionFORMVALUE_AMOUT * pensionFORMVALUE_DATEAMOUT) / 50
    var pensionRESULT_BAHT = Math.round(pensionRESULT_BAHT * 100) / 100
    
    document.getElementById("pensionRESULT_BAHT").innerHTML = pensionRESULT_BAHT
}

function loanFORM_VALIDATEFORM() {
    if (loanFORM_CUSTOMRATE.value != "" && loanFORM_AMOUT.value != "" && loanFORM_YEARAMOUT.value != "" && loanFORM_PERIODAMOUT.value != ""){
        loanFORM_SUBMIT.classList.remove("hide");
        loanFORM_IGNORE.classList.add("hide");
    } else {
        loanFORM_SUBMIT.classList.add("hide");
        loanFORM_IGNORE.classList.remove("hide");
    }
}

function loanFORM_SUBMITFORM() {
    Cookies.set('loanFORMVALUE_RATE', loanFORM_CUSTOMRATE.value, { expires: 365 })
    Cookies.set('loanFORMVALUE_AMOUT', loanFORM_AMOUT.value, { expires: 365 })
    Cookies.set('loanFORMVALUE_YEARAMOUT', loanFORM_YEARAMOUT.value, { expires: 365 })
    Cookies.set('loanFORMVALUE_PERIODAMOUT', loanFORM_PERIODAMOUT.value, { expires: 365 })
    window.location.href = "result/";
}

function loanFORM_CALCULATE() {
    var loanFORM_CUSTOMRATE = Cookies.get('loanFORMVALUE_RATE');
    var loanFORMVALUE_AMOUT = Cookies.get('loanFORMVALUE_AMOUT');
    var loanFORMVALUE_YEARAMOUT = Cookies.get('loanFORMVALUE_YEARAMOUT');
    var loanFORMVALUE_PERIODAMOUT = Cookies.get('loanFORMVALUE_PERIODAMOUT');

    var loanFORM_CUSTOMRATE = loanFORM_CUSTOMRATE / 100

    var loanRESULT_INTERESTALL = loanFORM_CUSTOMRATE * loanFORMVALUE_AMOUT * loanFORMVALUE_YEARAMOUT
    var loanRESULT_INTERESTPER = loanRESULT_INTERESTALL / loanFORMVALUE_PERIODAMOUT
    var loanRESULT_AMOUTPER = (+loanFORMVALUE_AMOUT + +loanRESULT_INTERESTALL ) / loanFORMVALUE_PERIODAMOUT

    var loanRESULT_AMOUTPER = Math.round(loanRESULT_AMOUTPER * 100) / 100

    document.getElementById("loanRESULT_INTERESTALL").innerHTML = loanRESULT_INTERESTALL
    document.getElementById("loanRESULT_INTERESTPER").innerHTML = loanRESULT_INTERESTPER
    document.getElementById("loanRESULT_AMOUTPER").innerHTML = loanRESULT_AMOUTPER
}

function loan2FORM_VALIDATEFORM() {
    if (loan2FORM_CUSTOMRATE.value != "" && loan2FORM_AMOUT.value != "" && loan2FORM_DATE.value != "" && loan2FORM_YEAR.value != ""){
        loan2FORM_SUBMIT.classList.remove("hide");
        loan2FORM_IGNORE.classList.add("hide");
    } else {
        loan2FORM_SUBMIT.classList.add("hide");
        loan2FORM_IGNORE.classList.remove("hide");
    }
}

function loan2FORM_SUBMITFORM() {
    Cookies.set('loan2FORMVALUE_RATE', loan2FORM_CUSTOMRATE.value, { expires: 365 })
    Cookies.set('loan2FORMVALUE_AMOUT', loan2FORM_AMOUT.value, { expires: 365 })
    Cookies.set('loan2FORMVALUE_DATE', loan2FORM_DATE.value, { expires: 365 })
    Cookies.set('loan2FORMVALUE_YEAR', loan2FORM_YEAR.value, { expires: 365 })
    window.location.href = "result/";
}

function loan2FORM_CALCULATE() {
    var loan2FORMVALUE_RATE = Cookies.get('loan2FORMVALUE_RATE')
    var loan2FORMVALUE_AMOUT = Cookies.get('loan2FORMVALUE_AMOUT')
    var loan2FORMVALUE_DATE = Cookies.get('loan2FORMVALUE_DATE')
    var loan2FORMVALUE_YEAR = Cookies.get('loan2FORMVALUE_YEAR')

    loan2FORMVALUE_RATE = loan2FORMVALUE_RATE / 100

    loan2RESULT_INTERESTDAY = (loan2FORMVALUE_RATE * loan2FORMVALUE_DATE * loan2FORMVALUE_AMOUT)/loan2FORMVALUE_YEAR
    var loan2RESULT_INTERESTDAY = Math.round(loan2RESULT_INTERESTDAY * 100) / 100
    document.getElementById('loan2RESULT_INTERESTDAY').innerHTML = loan2RESULT_INTERESTDAY
}