
document.getElementById("fifth-card").addEventListener("click", function (event) {
    no++;

    const pentagonTitle = document.getElementById("pentagon-title").innerText;

    const pentagonInput = getValue("pentagon-input");

    const pentagonInputTwo = getValue("pentagon-input2");

    const result = commonFunctionTwo(pentagonInput, pentagonInputTwo)

    // validation 
    if (pentagonInput < 0 || isNaN(pentagonInput)) {
        alert("please put a valid number");
        // input.value = "";
        pentagonInput = ""

    }
    else if (pentagonInput === "") {
        alert("please type a Number");


    }
    
    const tr = document.createElement("tr");
    const tableBody = document.getElementById("table-body");
    tr.innerHTML = `
        <th>${no}</th>
                                <td>${pentagonTitle}</td>
                                <td>${result.toFixed(2)}cm&sup2</td>
                                <td><button class="btn custom-btn btn-secondary">Convert to m&sup2</button></td>
        `
    tableBody.appendChild(tr);

})