function rollDice() {
    const numofDice= document.getElementById("numofDice").value;
    const diceresult = document.getElementById("diceresult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numofDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }

    diceresult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}
