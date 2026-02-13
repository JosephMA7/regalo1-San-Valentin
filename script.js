const messages = {
    'feliz': "¡Esa alegría me encanta! Escucha esto...",
    'cansada': "Sé que ha sido un día largo, descansa un poquito conmigo...",
    'triste': "No estás sola, mi vida. Escúchame bien...",
    'enojada': "Respira profundo... tengo algo que decirte para que se te pase."
};

let currentAudio = new Audio();

document.querySelectorAll('.mood-btn').forEach(button => {
    button.addEventListener('click', function() {
        const mood = this.getAttribute('data-mood');
        
        // Ajuste para tus audios (audioCansada.ogg, etc)
        const moodCapitalized = mood.charAt(0).toUpperCase() + mood.slice(1);

        // 1. Lógica del Audio
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio.src = `audio/audio${moodCapitalized}.ogg`; 
        currentAudio.play().catch(e => console.error("Error audio", e));

        // 2. CORRECCIÓN DE LA IMAGEN: Usamos .jpeg (con 'e')
        const photo = document.getElementById('mood-photo');
        photo.src = `assets/${mood}.jpeg`; 

        // 3. Interfaz
        document.getElementById('instruction').classList.add('hidden');
        document.querySelector('.mood-options').classList.add('hidden');
        document.getElementById('response-text').innerText = messages[mood];
        document.getElementById('message-container').classList.remove('hidden');
    });
});

function reset() {
    currentAudio.pause();
    document.getElementById('instruction').classList.remove('hidden');
    document.querySelector('.mood-options').classList.remove('hidden');
    document.getElementById('message-container').classList.add('hidden');
}