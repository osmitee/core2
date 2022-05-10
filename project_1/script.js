function clickButton() {
    let button = document.getElementById("button");
    button.style.opacity = "0%";
}

function clickLever() {
    let lever = document.getElementById("lever");
    let leverDown = document.getElementById("leverdown");
    if (lever.style.opacity === "0%") {
    leverDown.style.opacity = "100%";
    }
    else {
    lever.style.opacity === "0%"
    }
    };
   

<script>
 $( ".et-pb-icon" ).click(function() {
 $( this ).toggleClass( "active" );
 });
</script>