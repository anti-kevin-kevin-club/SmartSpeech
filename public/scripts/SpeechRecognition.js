$(document).ready(function() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.addEventListener('result', e => {
        console.log(e.results);

        // const transcript = Array.from(e.results)
        //     .map(result => result[0])
        //     .map(result => result.transcript)
        //     .join('');
        // const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
        // p.textContent = poopScript;
        // if (e.results[0].isFinal) {
        //     p = document.createElement('p');
        //     words.appendChild(p);
        // }
    });

    recognition.start();
})
