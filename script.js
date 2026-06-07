function convertTemperature() {

    let temp =
        parseFloat(
            document.getElementById("temperature").value
        );

    let from =
        document.getElementById("fromUnit").value;

    let to =
        document.getElementById("toUnit").value;

    let result;

    if (isNaN(temp)) {
        document.getElementById("result").innerHTML =
            "Please enter a valid number";
        return;
    }

    if (from === to) {
        result = temp;
    }

    else if (from === "C" && to === "F") {
        result = (temp * 9/5) + 32;
    }

    else if (from === "C" && to === "K") {
        result = temp + 273.15;
    }

    else if (from === "F" && to === "C") {
        result = (temp - 32) * 5/9;
    }

    else if (from === "F" && to === "K") {
        result = (temp - 32) * 5/9 + 273.15;
    }

    else if (from === "K" && to === "C") {
        result = temp - 273.15;
    }

    else if (from === "K" && to === "F") {
        result = (temp - 273.15) * 9/5 + 32;
    }

    document.getElementById("result").innerHTML =
        `${result.toFixed(2)} °${to}`;
}

function clearFields() {

    document.getElementById("temperature").value = "";

    document.getElementById("result").innerHTML =
        "Result will appear here";
}