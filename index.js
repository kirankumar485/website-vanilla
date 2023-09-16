document.addEventListener("DOMContentLoaded", function () {
  // Handle form submission
  document.getElementById("submitOrder").addEventListener("click", function () {
    // Retrieve form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comments").value;

    // Do something with the form data (e.g., send it to a server)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Order Comments:", comments);

    // Close the modal
    $("#myModal").modal("hide");
  });

  // Range Input
  const rangeInput = document.getElementById("customRange1");
  const rangeValue = document.getElementById("rangeValue");
  const pricingPlans = document.querySelectorAll(".card"); // Get all pricing plans

  // Add an event listener to the range input
  rangeInput.addEventListener("input", function () {
    // Get the current value of the range input
    const value = parseFloat(this.value);

    // Update the value display
    rangeValue.textContent = value.toFixed(0); // Display with two decimal places

    // Hide all pricing plans
    pricingPlans.forEach(function (plan) {
      plan.style.display = "none";
    });

    // Determine which plan to show based on the selected range
    if (value >= 0 && value < 10) {
      document.querySelector(".card:nth-child(1)").style.display = "block"; // Show Plan 1
    } else if (value >= 10 && value < 20) {
      document.querySelector(".card:nth-child(2)").style.display = "block"; // Show Plan 2
    } else if (value >= 20 && value <= 30) {
      document.querySelector(".card:nth-child(3)").style.display = "block"; // Show Plan 3
    }
  });
});
