console.log("Welcome to JourniAI")
const moodButtons=document.querySelectorAll(".mood-btn");
const recommendationBox = document.getElementById("recommendation-box");

const recommendation ={

    "😊 Happy Escape": `
        <h3>😊 Happy Escape</h3>
        <p>🎡 Goa<br>Beaches And Nightmare<br><br>🏖️ Maldives<br>Relaxation And Escape<br><br>🌴 Bali<br>Exotic And Spiritual</p>
    `,
    
    "😌 Peace & Relax": `
        <h3>😌 Peace & Relax</h3>
        <p>🌿 Kerala <br>Culture And Serene<br><br>🏞️ Coorg<br> Verdant And Aromatic<br><br>🏔️ Himachal<br>Alpine And Pristine</p>
    `,

    "🔥 Adventure": `
        <h3>🔥 Adventure</h3>
        <p>🏔️ Ladakh <br>Arid And Monastic<br><br>🥾 Manali<br>Breathtaking And Frosty<br><br>🚣 Rishikesh<br>Spiritual And Thrilling</p>
    `,

    "💕 Romantic": `
        <h3>💕 Romantic</h3>
        <p>❤️ Paris<br>Romantic And Grand<br><br>🌅 Santorini<br>Volcanic And Sunlit<br><br>🏰 Udaipur<br>Palatial And Ornate</p>
    `,

    "👨‍👩‍👧 Family Time": `
        <h3>👨‍👩‍👧 Family Time</h3>
        <p>🎢 Singapore<br>Lush And Dynamic<br><br>🐼 Mysuru<br>Royal And Sandlewood<br><br>🏖️ Andaman<br>Aquamarine And Historic</p>
    `,

    "🎉 Friends Trip": `
        <h3>🎉 Friends Trip</h3>
        <p>🎉 Goa<br>Sun-Kissed And Vibrant<br><br>🌆 Dubai<br>Lavish And Ambitious<br><br>🏝️ Phuket<br>Craggy And Indulgent</p>
    `
};

moodButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        recommendationBox.innerHTML = recommendation[button.textContent];
    });
});