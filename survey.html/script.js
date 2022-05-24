function submitForm() {
    event.preventDefault();
};


/* skal til at gemme alt i boksen så man kan se det næste display block/none */
const spg1 = document.querySelector(".spg1"); 
const spg2 = document.querySelector(".spg2"); 
const spg3 = document.querySelector(".spg3"); 
const spg4 = document.querySelector(".spg4"); 
const spg5 = document.querySelector(".spg5"); 

const slut = document.querySelector(".slut");

/*Den første _1 ul i index*/
/*fanger de forskellige valg */
const ul1_2 = document.querySelector(".valg1_2"); /* Spørgsmål 1 - Næste knap*/
const ul2_1 = document.querySelector(".valg2_1"); /* Spørgsmål 2 - Tilbage knap*/
const ul2_2 = document.querySelector(".valg2_2"); /* Spørgsmål 2 - Næste knap*/
const ul3_1 = document.querySelector(".valg3_1"); /* Spørgsmål 3 - Tilbage knap*/
const ul3_2 = document.querySelector(".valg3_2"); /* Spørgsmål 3 - Næste knap*/
const ul4_1 = document.querySelector(".valg4_1"); /* Spørgsmål 4 - Tilbage knap*/
const ul4_2 = document.querySelector(".valg4_2"); /* Spørgsmål 4 - Næste knap*/
const ul5_1 = document.querySelector(".valg5_1"); /* Spørgsmål 5 - Tilbage knap*/
const ul5_3 = document.querySelector(".valg5_3"); /* Spørgsmål 5 - Afslut knap*/

const Feedback = document.querySelector(".Feedback"); /*??????*/


/* Spørgsmål 1 - Næste knap*/
ul1_2.addEventListener("click", function () {
    if (document.getElementById('s1-svar1').checked) {
        spg1.style.display = "none";
        spg2.style.display = "block";
    }
    else if (document.getElementById('s1-svar2').checked) {
        spg1.style.display = "none";
        spg2.style.display = "block";
    }
    else {
        alert("Vær venlig at svare på spørgsmålet");
    };

    if (document.getElementById('s1-svar1').checked || document.getElementById('s1-svar2').checked) {
        const svarTilS1 = document.querySelector("input[name=s1]:checked").value;
        console.log(svarTilS1);
    }

});




/* Spørgsmål 2 - Næste knap*/
ul2_2.addEventListener("click", function () {
    if (document.getElementById('s2-svar1').checked) {
        spg2.style.display = "none";
        spg3.style.display = "block";
    }
    else if (document.getElementById('s2-svar2').checked) {
        spg2.style.display = "none";
        spg3.style.display = "block";
    }
    else {
        alert("Vær venlig at svare på spørgsmålet");
    }

    if (document.getElementById('s2-svar1').checked || document.getElementById('s2-svar2').checked) {
        const svarTilS2 = document.querySelector("input[name=s2]:checked").value;
        console.log(svarTilS2)
    }
});




/* Spørgsmål 2 - Tilbage knap*/
ul2_1.addEventListener("click", function () {
    spg2.style.display = "none";
    spg1.style.display = "block";
});




/* Spørgsmål 3 - Næste knap*/
ul3_2.addEventListener("click", function () {
    if (document.getElementById('s3-svar1').checked) {
        spg3.style.display = "none";
        spg4.style.display = "block";
    }
    else if (document.getElementById('s3-svar2').checked) {
        spg3.style.display = "none";
        spg4.style.display = "block";
    }
    else if (document.getElementById('s3-svar3').checked) {
        spg3.style.display = "none";
        spg4.style.display = "block";
    }
    else if (document.getElementById('s3-svar4').checked) {
        spg3.style.display = "none";
        spg4.style.display = "block";
    }
    else if (document.getElementById('s3-svar5').checked) {
        spg3.style.display = "none";
        spg4.style.display = "block";
    }
    else {
        alert("Vær venlig at svare på spørgsmålet");
        spg4.style.display = "none";
        spg3.style.display = "block";
    }

    if (document.getElementById('s3-svar1').checked || document.getElementById('s3-svar2').checked 
    || document.getElementById('s3-svar3').checked || document.getElementById('s3-svar4').checked 
    || document.getElementById('s3-svar5').checked) {
        const svarTilS3 = document.querySelector("input[name=s3]:checked").value;
        console.log(svarTilS3)
    }

});




/* Spørgsmål 3 - Tilbage knap*/
ul3_1.addEventListener("click", function () {
    spg3.style.display = "none";
    spg2.style.display = "block";
});




/* Spørgsmål 4 - Næste knap*/
ul4_2.addEventListener("click", function () {
    if (document.getElementById('s4-svar1').checked) {
        spg4.style.display = "none";
        spg5.style.display = "block";
    }
    else if (document.getElementById('s4-svar2').checked) {
        spg4.style.display = "none";
        spg5.style.display = "block";
    }
    else if (document.getElementById('s4-svar3').checked) {
        spg4.style.display = "none";
        spg5.style.display = "block";
    }
    else if (document.getElementById('s4-svar4').checked) {
        spg4.style.display = "none";
        spg5.style.display = "block";
    }
    else if (document.getElementById('s4-svar5').checked) {
        spg4.style.display = "none";
        spg5.style.display = "block";
    }
    else {
        alert("Vær venlig at svare på spørgsmålet");
        spg5.style.display = "none";
        spg4.style.display = "block";
    }

    if (document.getElementById('s4-svar1').checked || document.getElementById('s4-svar2').checked 
    || document.getElementById('s4-svar3').checked || document.getElementById('s4-svar4').checked 
    || document.getElementById('s4-svar5').checked) {
        const svarTilS4 = document.querySelector("input[name=s4]:checked").value;
        console.log(svarTilS4)
    }
});





/* Spørgsmål 4 - Tilbage knap*/
ul4_1.addEventListener("click", function () {
    spg4.style.display = "none";
    spg3.style.display = "block";
});




/* Spørgsmål 5 - Afslut knap*/
ul5_3.addEventListener("click", function () {
    spg5.style.display = "none";
    Feedback.style.display = "none";
    slut.style.display = "block";

    const message = document.getElementById('besked');
    console.log(message.value);
});





/* Spørgsmål 5 - Tilbage knap*/
ul5_1.addEventListener("click", function () {
    spg5.style.display = "none";
    spg4.style.display = "block";
});



