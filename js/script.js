let regexMail = /^.+@yy\.zz/;

function connexion() {
    var email = document.getElementById("se_connecter");
    var password = document.getElementById("mot_de_passe");

    const mail = document.getElementById("left_alert");

    const taille = document.getElementById("left_medium");

    const chille = document.getElementById("left_medium");

    if(!regexMail.test(email.value)) {
        mail.innerHTML = "! Le format n'est pas bon";
    } else {
        mail.innerHTML ="";
    }
    let regex = /\d/;
    if(password.value.length < 8) {
        taille.innerHTML = "! Au moins 8 caractères";
    }
    else {
        taille.innerHTML = "";
        if(!regex.test(password.value)) {
            chille.innerHTML = "! Au moins 1 chiffre";
        } else {
            chille.innerHTML = "";
            if(email.value.includes("@yy.zz")) {
                document.getElementById("connect").click;
            }
        }
    }
}

function inscription() {
    var mail = document.getElementById("ins_mail");
    var mail_config = document.getElementById("ins_mail_config");

    const mail_c = document.getElementById("mail_c");
    if(mail.value != mail_config.value) {
        mail_c.innerHTML = "! Mails différents";
    } else {
        mail_c.innerHTML = "";
        if(!regexMail.test(mail.value)) {
            mail_c.innerHTML = "! Le format n'est pas correcte";
        }
    }
}

function dateNais() {
    let optionsj = [];
    for (let i = 1; i <= 31; i++) {
        optionsj.push({ value: i, text: i });
    }
    
    let selectj = document.getElementById("jour");
    
    optionsj.forEach(option => {
        let opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        selectj.appendChild(opt);
    });
    
    let optionsm = [];
    for (let i = 1; i <= 12; i++) {
        optionsm.push({ value: i, text: i });
    }
    
    let selectm = document.getElementById("mois");
    
    optionsm.forEach(option => {
        let opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        selectm.appendChild(opt);
    });

    let optionsa = [];
    for (let i = 1990; i <= 2024; i++) {
        optionsa.push({ value: i, text: i });
    }
    
    let selectA = document.getElementById("nombre");
    
    optionsa.forEach(option => {
        let opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        selectA.appendChild(opt);
    });
}