let no = 0;

document.getElementById("first-card").addEventListener("click", function (event) {
    no++;

    const firstTitle = document.getElementById("first-title").innerText;
    const triangleInput = getValue("triangle-input");
    // document.getElementById("triangle-input").value;
    const triangleInputTwo = getValue("triangle-input2");
    //  document.getElementById("triangle-input2").value;

    const result = commonFunctionTwo(triangleInput, triangleInputTwo)

    // validation 
    if (triangleInput  < 0 || isNaN(triangleInput)) {
        alert("please put a valid number");
        // input.value = "";
        triangleInput = ""

    }
    else if (triangleInput === "") {
        alert("please type a Number");


    }

    const tr = document.createElement("tr");
    const tableBody = document.getElementById("table-body");
    tr.innerHTML = `
        <th>${no}</th>
                                <td>${firstTitle}</td>
                                <td>${result}cm&sup2</td>
                                <td><button class="btn custom-btn btn-secondary">Convert to m&sup2</button></td>
        `
    tableBody.appendChild(tr);

})
document.getElementById("second-card").addEventListener("click", function (event) {
    no++;

    const secondTitle = document.getElementById("second-title").innerText;

    const rectangleInput = getValue("rectangle-input");

    const rectangleInputTwo = getValue("rectangle-input2");

    const result = commonFunction(rectangleInput, rectangleInputTwo)

    // validation 
    if (rectangleInput < 0 || isNaN(rectangleInput)) {
        alert("please put a valid number");
        // input.value = "";
        rectangleInput = ""

    }
    else if (rectangleInput === "") {
        alert("please type a Number");


    }

    const tr = document.createElement("tr");
    const tableBody = document.getElementById("table-body");
    tr.innerHTML = `
        <th>${no}</th>
                       <td>${secondTitle}</td>
                       <td>${result}cm&sup2</td>
                       <td><button class="btn custom-btn btn-secondary">Convert to m&sup2</button></td>
        `
    tableBody.appendChild(tr);

})