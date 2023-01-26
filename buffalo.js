/// lets use abstraction here. just use a regular function instead of adding the function to the object
function StreetFighterCharacter(character, atttibutes) {
    this.character = character;
    this.attributes = atttibutes;

    (() => {
        const grabCharacterId = document.querySelector(`#${this.character}`)
        grabCharacterId.style.position = "absolute";
        grabCharacterId.style.left = 0;
        grabCharacterId.style.top = 0;
        let moveBy = 40;

        grabCharacterId.addEventListener("click", () => {
            alert(this.attributes);
        })

        grabCharacterId.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    console.log("moved left:", moveBy + "px");
                    grabCharacterId.style.left = parseInt(grabCharacterId.style.left) - moveBy + "px";
                    break;
                case "ArrowRight":
                    console.log("moved right:", moveBy + "px");
                    grabCharacterId.style.left = parseInt(grabCharacterId.style.left) + moveBy + "px";
                    break;
                case "ArrowUp":
                    console.log("moved up", moveBy + "px");
                    grabCharacterId.style.top = parseInt(grabCharacterId.style.top) - moveBy + "px";
                    break;
                case "ArrowDown":
                    console.log("moved down:", moveBy + "px");
                    grabCharacterId.style.top = parseInt(grabCharacterId.style.top) + moveBy + "px";
                    break;
            }
        });

    })()
}

/// TODO: this array of objects uses a map to call the constructor function above. Can I do something similiar to populate the html imgs
    /// also I could use mssm and fill these values in a DB. Do a crud.
const characterValues = [
    {
        character: "guile",
        att: "Mr. Solitude \n Att: Distant \n Str: Good Meditation \n Weak: Very Unsocial",
    },
    {
        character: "blanka",
        att: `Sir Laughs Alot \n Att: Silly, Comfortable \n Str: Relaxes \n Weak: Hides behind Pain`,
        },
        {
            character: "akuma",
            att: `Sir Laughs Alot \n Att: Silly, Comfortable \n Str: Relaxes \n Weak: Hides behind Pain`,
        },
        {
            character: "chunli" ,
            att: `Dr. Empathy \n Att: Understanding, Compassionate \n Str: Intuitive \n Weak: Soft`,
        },
        {
            character: "ken",
            att: `LucyKen \n Att: Strong, Confident \n Str: Null to Criticism \n Weak: Unempathetic`,
        },
        {
            character: "ryu",
            att: `Mr. Focus \n Att: Aware, Prepared \n Str: Accomplishes Tasks \n Weak: Unaware of sorroundings`,
        },
        {
            character: "ehonda",
            att: `Proffesor IDK \n Att: Stagnant, unfocused \n Str:  \n Weak: Can not concentrate`,
        },
        {
            character: "dhalsim",
            att: `Mr. Nervous \n Att: Doubtfull, Anxiious \n Str: Aware of importance \n Weak: Choke`,
        },
];
console.log(characterValues);
    
characterValues.map(item => {
    console.log(item);
    console.log(item.character);
    
    const character = new StreetFighterCharacter(item.character, item.att);
    console.log(character);
    
    // character.actions();
}); 
