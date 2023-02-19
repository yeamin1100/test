
document.getElementById("third-card").addEventListener("click", function (event) {
    no++;

    const parallelogramTitle = document.getElementById("parallelogram-title").innerText;

    const parallelogramInput = getValue("parallelogram-input");

    const parallelogramInputTwo = getValue("parallelogram-input2");

    const result = commonFunction(parallelogramInput, parallelogramInputTwo)

    // validation 
    if (parallelogramInput < 0 || isNaN(parallelogramInput)) {
        alert("please put a valid number");
        // input.value = "";
        parallelogramInput = ""

    }
    else if (parallelogramInput === "") {
        alert("please type a Number");


    }
    
    const tr = document.createElement("tr");
    const tableBody = document.getElementById("table-body");
    tr.innerHTML = `
        <th>${no}</th>
                     <td>${parallelogramTitle}</td>
                     <td>${result.toFixed(2)}cm&sup2</td>
                     <td><button class="btn custom-btn btn-secondary">Convert to m&sup2</button></td>
        `
    tableBody.appendChild(tr);

})