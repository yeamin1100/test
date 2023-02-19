document.getElementById("ellipse-card").addEventListener("click", function (event) {
    no++;

    const ellipseTitle = document.getElementById("ellipse-title").innerText;

    const ellipseInput = getValue("ellipse-input");

    const ellipseInputTwo = getValue("ellipse-input2");

    const result = ellipse(ellipseInput, ellipseInputTwo)
    // const result =calculateEllipseY(ellipseInput, ellipseInputTwo)

    // validation 
    if (ellipseInput < 0 || isNaN(ellipseInput)) {
        alert("please put a valid number");
        // input.value = "";
        ellipseInput = ""

    }
    else if (ellipseInput === "") {
        alert("please type a Number");


    }
    
    const tr = document.createElement("tr");
    const tableBody = document.getElementById("table-body");
    tr.innerHTML = `
        <th>${no}</th>
                                <td>${ellipseTitle}</td>
                                <td>${result.toFixed(2)}cm&sup2</td>
                                <td><button class="btn custom-btn btn-secondary">Convert to m&sup2</button></td>
        `
    tableBody.appendChild(tr);

})