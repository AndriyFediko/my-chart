const ctx = document.getElementById('myChart');
let labels = [];
let values = [];
let colors = [];
const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow',
        'Green',
    ],
    datasets: [{
        data: [150, 150, 150, 150],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(2, 205, 66)',
        ],
        hoverOffset: 4,
    }],
};
let myChart = new Chart(ctx, {
    type: 'pie',
    data: data
});

function GetTargetNunber(a) {
    let all = document.querySelectorAll(".addElementForm");
    let target = a.closest(".addElementForm");
    let countAll = 0;
    let targetCount = 0;
    for (one of all) {
        countAll++
        if (one == target) {
            targetCount = countAll;
        }
    }
    return targetCount;
}
$(".addBock").click(function (e) {
    console.log("asdad")
    if (e.target.closest(".addElementForm").classList.contains("addElementFormNotActive")) {
        $(".addBock").append(` <div class="addElementForm addElementFormNotActive">
        <div class="inputsContainer">
            <input id="labelInp" placeholder="Enter item label" class="elemInfo" type="text" maxlength="10">
            <input id="valueInp" placeholder="Enter item value" class="elemInfo" type="number">
        </div>
        <button class="changeColor btn">
            <img class="paintBrush" src="./img/paintBrush.png" alt="changeColor">
            <input class="colorInp" type="color">
        </button>
        <button class="add btn" id="add">
            <img class="plus" src="./img/plus.png" alt="add">
        </button>
    </div>`);
        e.target.closest(".addElementForm").classList.remove("addElementFormNotActive");
        $(".add").click(function (e) {
            if (!e.target.closest(".addElementForm").classList.contains("addElementFormNotActive")) {
                if ($(`.addElementForm:nth-child(${GetTargetNunber(e.target)}) #valueInp`).val() != "" && $(`.addElementForm:nth-child(${GetTargetNunber(e.target)}) #labelInp`).val() != "") {
                    $(`.addElementForm:nth-child(${GetTargetNunber(e.target)}) input`).css("border", "2px solid rgb(2, 184, 2)");
                    labels[GetTargetNunber(e.target) - 1] = $(`.addElementForm:nth-child(${GetTargetNunber(e.target)}) #labelInp`).val();
                    values[GetTargetNunber(e.target) - 1] = $(`.addElementForm:nth-child(${GetTargetNunber(e.target)}) #valueInp`).val();
                    colors[GetTargetNunber(e.target) - 1] = $(`.addElementForm:nth-child(${GetTargetNunber(e.target)}) .colorInp`).val();
                    data.datasets[0].data = values;
                    data.datasets[0].backgroundColor = colors;
                    data.labels = labels;
                    myChart.update();
                } else if ($(`.addElementForm:nth-child(${GetTargetNunber(e.target)}) #valueInp`).val() != "" && $(`.addElementForm:nth-child(${GetTargetNunber(e.target)}) #labelInp`).val() == "") {
                    $(`.addElementForm:nth-child(${GetTargetNunber(e.target)}) #labelInp`).css("border", "2px solid rgb(177, 9, 9)");
                } else if ($(`.addElementForm:nth-child(${GetTargetNunber(e.target)}) #valueInp`).val() == "" && $(`.addElementForm:nth-child(${GetTargetNunber(e.target)}) #labelInp`).val() != "") {
                    $(`.addElementForm:nth-child(${GetTargetNunber(e.target)}) #valueInp`).css("border", "2px solid rgb(177, 9, 9)");
                } else {
                    $(`.addElementForm:nth-child(${GetTargetNunber(e.target)}) input`).css("border", "2px solid rgb(177, 9, 9)");
                }
            }
        });
    }
});