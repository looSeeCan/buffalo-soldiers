// let circle = document.querySelector(".circle");
let moveBy = 40;


window.addEventListener("load", () => {
    // guile.style.position = "absolute";
    // guile.style.left = 0;
    //  // guile.style.right = 0;
    // guile.style.top = 0;
    blanka.style.position = "absolute";
    gief.style.position = "absolute";
    gief.style.left = 0;
    gief.style.top = 0;
    blanka.style.left = 0;
    blanka.style.top = 0;
    chunli.style.position = "absolute";
    chunli.style.left = 0;
    chunli.style.top = 0;
    ken.style.position = "absolute";
    ken.style.left = 0;
    ken.style.top = 0;
    ryu.style.position = "absolute";
    ryu.style.left = 0;
    ryu.style.top = 0;
    ehonda.style.position = "absolute";
    ehonda.style.left = 0;
    ehonda.style.top = 0;
    dhalsim.style.position = "absolute";
    dhalsim.style.left = 0;
    dhalsim.style.top = 0;

});
//TEST
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const stats = (att) => {
    alert(att); 
}

function StreetFighterCharacter(character, attributes) {
    this.character = character;
    this.attributes = attributes;
    Object.defineProperty(this, "actions", {
        get: function() { ///TODO: how can I use getters and setters properly here
            const grabCharacterId = document.querySelector(`#${this.character}`)
            grabCharacterId.style.top = 0;
            grabCharacterId.addEventListener("click", () => {
                alert(this.attributes);
            })
        }
    }) 
}

const test = new StreetFighterCharacter("test");
console.log(test);

const guile = new StreetFighterCharacter("guile", "Mr. Solitude \n Att: Distant \n Str: Good Meditation \n Weak: Very Unsocial");
console.log(guile);
guile.actions;

// const x = "guile"
// let guile = document.querySelector(`#${x}`);
// guile.addEventListener("click", () => {
//     const att = `Mr. Solitude \n Att: Distant \n Str: Good Meditation \n Weak: Very Unsocial`
//     stats(att)
// });

// guile.addEventListener("keydown", (e) => {
//     switch (e.key) {
//         case "ArrowLeft":
//             console.log("moved left:", moveBy + "px");
//             guile.style.left = parseInt(guile.style.left) - moveBy + "px";
//             break;
//         case "ArrowRight":
//             console.log("moved right:", moveBy + "px");
//             guile.style.left = parseInt(guile.style.left) + moveBy + "px";
//             break;
//         case "ArrowUp":
//             console.log("moved up", moveBy + "px");
//             guile.style.top = parseInt(guile.style.top) - moveBy + "px";
//             break;
//         case "ArrowDown":
//             console.log("moved down:", moveBy + "px");
//             guile.style.top = parseInt(guile.style.top) + moveBy + "px";
//             break;
//     }
// });


let gief = document.querySelector("#gief");
gief.addEventListener("click", () => {
    const att = `Mr.IDGF \n Att: Careless, Assertive \n Str: Assertive \n Weak: Self Destructive`
    stats(att)
});
gief.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            gief.style.left = parseInt(gief.style.left) - moveBy + "px";
            break;
        case "ArrowRight":
            gief.style.left = parseInt(gief.style.left) + moveBy + "px";
            break;
        case "ArrowUp":
            gief.style.top = parseInt(gief.style.top) - moveBy + "px";
            break;
        case "ArrowDown":
            gief.style.top = parseInt(gief.style.top) + moveBy + "px";
            break;
    }
});

let blanka = document.querySelector("#blanka");//im having an issue with this
blanka.addEventListener("click", () => {
    const att = `Sir Laughs Alot \n Att: Silly, Comfortable \n Str: Relaxes \n Weak: Hides behind Pain`
    stats(att)
});
blanka.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            blanka.style.left = parseInt(blanka.style.left) - moveBy + "px";
            break;
        case "ArrowRight":
            blanka.style.left = parseInt(blanka.style.left) + moveBy + "px";
            break;
        case "ArrowUp":
            blanka.style.top = parseInt(blanka.style.top) - moveBy + "px";
            break;
        case "ArrowDown":
            blanka.style.top = parseInt(blanka.style.top) + moveBy + "px";
            break;
    }
});

let chunli = document.querySelector("#chunli");//im having an issue with this
chunli.addEventListener("click", () => {
    const att = `Dr. Empathy \n Att: Understanding, Compassionate \n Str: Intuitive \n Weak: Soft`
    stats(att)
});
chunli.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            chunli.style.left = parseInt(chunli.style.left) - moveBy + "px";
            break;
        case "ArrowRight":
            chunli.style.left = parseInt(chunli.style.left) + moveBy + "px";
            break;
        case "ArrowUp":
            chunli.style.top = parseInt(chunli.style.top) - moveBy + "px";
            break;
        case "ArrowDown":
            chunli.style.top = parseInt(chunli.style.top) + moveBy + "px";
            break;
    }
});

let ken = document.querySelector("#ken");//im having an issue with this
ken.addEventListener("click", () => {
    const att = `LucyKen \n Att: Strong, Confident \n Str: Null to Criticism \n Weak: Unempathetic`
    stats(att)
});
ken.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            ken.style.left = parseInt(ken.style.left) - moveBy + "px";
            break;
        case "ArrowRight":
            ken.style.left = parseInt(ken.style.left) + moveBy + "px";
            break;
        case "ArrowUp":
            ken.style.top = parseInt(ken.style.top) - moveBy + "px";
            break;
        case "ArrowDown":
            ken.style.top = parseInt(ken.style.top) + moveBy + "px";
            break;
    }
});

let ryu = document.querySelector("#ryu");//im having an issue with this
ryu.addEventListener("click", () => {
    const att = `Mr. Focus \n Att: Aware, Prepared \n Str: Accomplishes Tasks \n Weak: Unaware of sorroundings`
    stats(att)
});
ryu.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            ryu.style.left = parseInt(ryu.style.left) - moveBy + "px";
            break;
        case "ArrowRight":
            ryu.style.left = parseInt(ryu.style.left) + moveBy + "px";
            break;
        case "ArrowUp":
            ryu.style.top = parseInt(ryu.style.top) - moveBy + "px";
            break;
        case "ArrowDown":
            ryu.style.top = parseInt(ryu.style.top) + moveBy + "px";
            break;
    }
});

let ehonda = document.querySelector("#ehonda");//im having an issue with this
ehonda.addEventListener("click", () => {
    const att = `Proffesor IDK \n Att: Stagnant, unfocused \n Str:  \n Weak: Can not concentrate`
    stats(att)
});
ehonda.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            ehonda.style.left = parseInt(ehonda.style.left) - moveBy + "px";
            break;
        case "ArrowRight":
            ehonda.style.left = parseInt(ehonda.style.left) + moveBy + "px";
            break;
        case "ArrowUp":
            ehonda.style.top = parseInt(ehonda.style.top) - moveBy + "px";
            break;
        case "ArrowDown":
            ehonda.style.top = parseInt(ehonda.style.top) + moveBy + "px";
            break;
    }
});

let dhalsim = document.querySelector("#dhalsim");//im having an issue with this
dhalsim.addEventListener("click", () => {
    const att = `Mr. Nervous \n Att: Doubtfull, Anxiious \n Str: Aware of importance \n Weak: Choke`
    stats(att)
});
dhalsim.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            dhalsim.style.left = parseInt(dhalsim.style.left) - moveBy + "px";
            break;
        case "ArrowRight":
            dhalsim.style.left = parseInt(dhalsim.style.left) + moveBy + "px";
            break;
        case "ArrowUp":
            dhalsim.style.top = parseInt(dhalsim.style.top) - moveBy + "px";
            break;
        case "ArrowDown":
            dhalsim.style.top = parseInt(dhalsim.style.top) + moveBy + "px";
            break;
    }
});

const ryuTheme = new Audio("audio/Street Fighter II Ryu Theme Original_CBR_256k.mp3");
ryuTheme.autoplay = true;
ryuTheme.volume = 0.2;

