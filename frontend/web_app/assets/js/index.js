const checkList = document.querySelectorAll(".date-wrapper");
    checkBoxes = document.querySelectorAll("input[type='checkbox']"),
    totalCheckBoxes = checkBoxes.length,
    sections = document.querySelectorAll(".sectionStart");

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

var UserName;
var Age;
var Gender;
var Height;
var Weight;
$('#SubmitBtn').on('click', () => {
    UserName = $('#nameTxti').val();
    Age = $('#agei').val();
    Gender = $('#genderi').val();
    Height = $('#heighti').val();
    Weight = $('#weighti').val();
})

var monT1;
var monT2;
var tuesT1;
var tuesT2;
var wedT1;
var wedT2;
var thursT1;
var thursT2;
var friT1;
var friT2;
var satT1;
var satT2;
var sunT1;
var sunT2;
$('#SubmitBtn2').on('click', () => {
    monT1 = $('#monStarti').val();
    monT2 = $('#monEndi').val();
    tuesT1 = $('#tuesStarti').val();
    tuesT2 = $('#tuesEndi').val();
    wedT1 = $('#wedStarti').val();
    wedT2 = $('#wedEndi').val();
    thursT1 = $('#thursStarti').val();
    thursT2 = $('#thursEndi').val();
    friT1 = $('#friStarti').val();
    friT2 = $('#friEndi').val();
    satT1 = $('#satStarti').val();
    satT2 = $('#satEndi').val();
    sunT1 = $('#sunStarti').val();
    sunT2 = $('#sunEndi').val();
})

var UserNameN;
var AgeN;
var GenderN;
var HeightN;
var WeightN;
var monT1N;
var monT2N;
var tuesT1N;
var tuesT2N;
var wedT1N;
var wedT2N;
var thursT1N;
var thursT2N;
var friT1N;
var friT2N;
var satT1N;
var satT2N;
var sunT1N;
var sunT2N;
$('#SubmitBtn3').on('click', () => {
    UserNameN = $('#nameTxt').val();
    AgeN = $('#age').val();
    GenderN = $('#gender').val();
    HeightN = $('#height').val();
    WeightN = $('#weight').val();
    monT1N = $('#monStart').val();
    monT2N = $('#monEnd').val();
    tuesT1N = $('#tuesStart').val();
    tuesT2N = $('#tuesEnd').val();
    wedT1N = $('#wedStart').val();
    wedT2N = $('#wedEnd').val();
    thursT1N = $('#thursStart').val();
    thursT2N = $('#thursEnd').val();
    friT1N = $('#friStart').val();
    friT2N = $('#friEnd').val();
    satT1N = $('#satStart').val();
    satT2N = $('#satEnd').val();
    sunT1N = $('#sunStart').val();
    sunT2N = $('#sunEnd').val();
})