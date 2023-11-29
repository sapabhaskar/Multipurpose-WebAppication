function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);

    if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
        var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        var result = `Your BMI is ${bmi}.`;

        if (bmi < 18.5) {
            result += " You are underweight.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result += " Your weight is normal.";
        } else if (bmi >= 25 && bmi < 29.9) {
            result += " You are overweight.";
        } else {
            result += " You are obese.";
        }

        document.getElementById("result").textContent = result;
    } else {
        document.getElementById("result").textContent = "Please enter valid height and weight.";
    }
}
