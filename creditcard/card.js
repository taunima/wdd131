document.getElementById("creditForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const cardNumber = document.getElementById("cardNumber").value.replace(/\s/g, "");
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const feedback = document.getElementById("feedback");

    if (cardNumber !== "1234123412341234") {
        feedback.style.color = "red";
        feedback.textContent = "Invalid card number.";
        return;
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; 
    const currentMonth = currentDate.getMonth() + 1;

    const inputMonth = parseInt(month);
    const inputYear = parseInt(year);

    if (inputYear < currentYear ||
        (inputYear === currentYear && inputMonth < currentMonth)) {
        feedback.style.color = "red";
        feedback.textContent = "Card is expired.";
        return;
    }
    
    feedback.style.color = "green";
    feedback.textContent = "Payment Successful!";
});
