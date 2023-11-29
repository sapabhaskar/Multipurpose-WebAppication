async function generateQuote() {
    const quoteText = document.getElementById("quote-text");
    const authorText = document.getElementById("author");
    const quoteContainer = document.getElementById("quote-container");

    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();

        quoteText.textContent = data.content;
        authorText.textContent = `- ${data.author}`;
        quoteContainer.classList.add("show");
    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteText.textContent = "Failed to fetch a quote. Please try again.";
        authorText.textContent = "";
        quoteContainer.classList.add("show");
    }
}
