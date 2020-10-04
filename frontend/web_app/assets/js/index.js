const checkList = document.querySelectorAll(".date-wrapper");
    checkBoxes = document.querySelectorAll("input[type='checkbox']"),
    totalCheckBoxes = checkBoxes.length;

function toggleForm() {
    for (let i = 0; i < totalCheckBoxes; i++){
        if (checkBoxes[i].checked == true) {
            checkList[i].querySelector(".timeBox").classList.remove("hidden");
        }
        else {
            checkList[i].querySelector(".timeBox").classList.add("hidden");
        }
    }
}