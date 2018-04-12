
$(window).on("load", sidenVises);

/*
Elementer:
jesus_sprite
brian_sprite
brian_container
jesus_container


Animationer:
jesus_jump
brian_walkcycle
move_brian_right
brian_gaar_ud
brian_taler
*/

// Når siden er loadet

function sidenVises () {
    console.log("sidenVises!");

    //Start lyd: Engle musik

    //Start anim: Brian kommer ind
    $("#brian_container").addClass("move_brian_right");
    //Start anim: Brian går
    $("#brian_sprite").addClass("brian_walkcycle");
    //Start anim: Jesus hopper
    $("#jesus_sprite").addClass("jesus_jump");

}

$("#jesusTaler").on("click",jesusTaler);
function jesusTaler() {
    console.log("jesusTaler!");

    //Stop anim: Brian Walkcycle
    $("#brian_sprite").removeClass("brian_walkcycle");

    //Stop anim: Stop jesus hopper
    $("#jesus_sprite").removeClass("jesus_jump");

    //Spil lyd: Jesus tale
    $("#jesus_sprite").addClass("jesus_taler");

    //Stop lyd: Stop Jesus tale
}

$("#brianTale").on("click",brianTale);
function brianTale() {
    console.log("brianTale");

    //Stop anim: Stop jesus tale
     $("#jesus_sprite").removeClass("jesus_taler");

    //Start anim: Brian tale
    $("#brian_sprite").addClass("brian_taler");

    //Spil lyd: Brian tale

    //Stop lyd: Brian tale
}

function jesusTale2() {
    console.log("jesusTale2!");

    //Stop anim: Brian tale
    $("#brian_sprite").removeClass("brian_taler");
    //Spil lyd: jesus tale 2

    //Stop lyd: stop Jesus tale 2
}

$("#brianGaarUd").on("click",brianGaarUd);
function brianGaarUd() {
    console.log("brianGaarUd");

    //Start anim: Brian vender sig om og går ud
    $("#brian_container").addClass("brian_gaar_ud");
    //Start anim: Brian går
    $("#brian_sprite").addClass("brian_walkcycle");

}
