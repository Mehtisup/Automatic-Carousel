<script>
let fine = 0;
fineFunction();

function fineFunction() {
    var i;
    var myFine = document.getElementsByClassName("myFine");
    for (i = 0 ; i < myFine.length ; i++) {
        myFine[i].style.display = "none";
    }
    fine++;
    if (fine > myFine.length) {fine = 1}
    myFine[fine-1].style.display = "block";
    setTimeout(fineFunction, 3000);
}
</script>
