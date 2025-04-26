document.addEventListener("DOMContentLoaded", function () {
    // Initialize the chart as an empty array
    const chart = [];
    
    // Select all add-to-chart buttons
    const buttons = document.querySelectorAll(".add-to-chart");
    
    // Select chart modal and items list
    const viewBtn = document.getElementById("viewChartBtn");
    const chartModal = document.getElementById("chartModal");
    const chartItems = document.getElementById("chartItems");
    const closeBtn = document.getElementById("closeChart");
    const totalAmount = document.getElementById("totalAmount");
  
    // Add event listener to each "Add to Chart" button
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // Find the closest service box
        const box = button.closest(".service-box");
  
        // Get name and price from data attributes
        const name = box ? box.getAttribute("data-name") : null;
        const priceStr = box ? box.getAttribute("data-price") : null;
        
        // Log the extracted values to check
        console.log("Service name:", name);
        console.log("Extracted data-price:", priceStr);
  
        // Check if price is a valid number
        const price = priceStr ? parseFloat(priceStr) : NaN;
        
        // Log the parsed price
        console.log("Service price (after parseFloat):", price);
  
        // Ensure we have valid data before adding to the chart
        if (!name || isNaN(price)) {
          alert("Something went wrong. Please try again.");
          return; // If data is invalid, exit the function
        }
  
        // Add item to the chart array
        chart.push({ name, price });
  
        // Show an alert to confirm the addition
        alert(`${name} added to chart!`);
      });
    });
  
    // Event listener for viewing the chart
    viewBtn.addEventListener("click", () => {
      chartItems.innerHTML = "";  // Clear current items in chart
      let total = 0;  // Initialize total price
  
      // If the chart is empty, show a message
      if (chart.length === 0) {
        chartItems.innerHTML = "<li>No services added yet.</li>";
      } else {
        // Loop through the chart items to display them
        chart.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
          chartItems.appendChild(li);
          total += item.price;
        });
      }
  
      // Update the total amount in the modal
      totalAmount.textContent = `Total: $${total.toFixed(2)}`;
      chartModal.style.display = "flex";  // Show the chart modal
    });
  
    // Close button event listener
    closeBtn.addEventListener("click", () => {
      chartModal.style.display = "none";  // Close the chart modal
    });
  
    // Close modal when clicking outside of it
    window.addEventListener("click", (e) => {
      if (e.target === chartModal) {
        chartModal.style.display = "none";
      }
    });
  });
  