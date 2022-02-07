function clickButton() {
    let button = document.getElementById("button");
    button.style.opacity = "0%";
}

function clickLever() {
    let lever = document.getElementById("lever");
    let leverDown = document.getElementById("leverdown");
    lever.style.opacity = "0%";
    leverDown.style.opacity = "100%";
}

<script>
 $( ".et-pb-icon" ).click(function() {
 $( this ).toggleClass( "active" );
 });
</script>