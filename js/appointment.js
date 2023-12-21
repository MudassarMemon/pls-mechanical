document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.getElementById("next-button");
    const backButton = document.getElementById("back-button");
    const form = document.getElementById("two-step-form");
    const freeAssessment = document.getElementById("free-assessment");
    const stepOneValidate = document.querySelector(".step_one_validate");


    nextButton.addEventListener("click", function () {
        // Validate the Step 1 fields here
        const service = document.getElementById("service").value;

        if (!service && !freeAssessment.checked) {
            stepOneValidate.style.display = "block"
            return;
        } else {
            stepOneValidate.style.display = "none"
        }

        // If all validations pass, proceed to Step 2
        form.querySelector(".form-step-one").style.display = "none";
        form.querySelector(".form-step-two").style.display = "block";
    });

    backButton.addEventListener("click", function () {
        // If all validations pass, proceed to Step 2
        form.querySelector(".form-step-one").style.display = "block";
        form.querySelector(".form-step-two").style.display = "none";
    });
});