// Dummy data for outfit recommendations
const outfits = [
    "Casual Jeans and T-shirt",
    "Formal Suit and Tie",
    "Athletic Wear",
    "Party Dress",
    "Business Casual",
    "Beachwear"
  ];
  
  document.getElementById("generateOutfitBtn").addEventListener("click", function() {
    const randomOutfit = outfits[Math.floor(Math.random() * outfits.length)];
    displayOutfit(randomOutfit);
  });
  
  function displayOutfit(outfit) {
    const outfitDisplay = document.getElementById("outfitDisplay");
    outfitDisplay.innerHTML = `<h2>Your Recommended Outfit:</h2><p>${outfit}</p>`;
  }
  // Smooth scrolling effect for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

    // Add hover effect to navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#FF5733'; // Change link color on hover
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '#fff'; // Restore original color when not hovered
        });
    });
