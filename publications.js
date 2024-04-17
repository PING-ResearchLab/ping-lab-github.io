// JavaScript for handling the dropdown box
document.addEventListener("DOMContentLoaded", function() {
    // Get the dropdown element
    const dropdown = document.getElementById("publicationTypeDropdown");

    // Add event listener for change event
    dropdown.addEventListener("change", function() {
        // Get the selected option value
        const selectedValue = dropdown.value;

        // Here, you can handle what happens when the dropdown value changes
        // For example, you can filter the publication results based on the selected value
        console.log("Selected value:", selectedValue);
    });
});
