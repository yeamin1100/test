
document.getElementById("fourth-card").addEventListener("click", function (event) {
    no++;

    const rhombusTitle = document.getElementById("rhombus-title").innerText;

    const rhombusInput = getValue("rhombus-input");

    const rhombusInputTwo = getValue("rhombus-input2");

    const result = commonFunctionTwo(rhombusInput, rhombusInputTwo)

    // validation 
    if (rhombusInput < 0 || isNaN(rhombusInput)) {
        alert("please put a valid number");
        // input.value = "";
        rhombusInput = ""

    }
    else if (rhombusInput === "") {
        alert("please type a Number");


    }

    const tr = document.createElement("tr");
    const tableBody = document.getElementById("table-body");
    tr.innerHTML = `
        <th>${no}</th>
                      <td>${rhombusTitle}</td>
                      <td>${result.toFixed(2)}cm&sup2</td>
                      <td><button class="btn custom-btn btn-secondary">Convert to m&sup2</button></td>
        `
    tableBody.appendChild(tr);

})