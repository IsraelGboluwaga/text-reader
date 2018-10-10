if (!('speechSynthesis' in window)) {
    // Synthesis support. Make your web apps talk!
    alert('Oops. Your browser does not support this feature.');
} else {

    var clear_text_element = document.getElementById('clear');
    clear_text_element.addEventListener('click', function () {
        var textarea = document.getElementsByTagName('textarea');
        textarea[0].value = '';
    });

    var read_text_element = document.getElementById('read');
    read_text_element.addEventListener('click', function () {


        var text_value = document.getElementsByTagName('textarea')[0].value;
        var message = new SpeechSynthesisUtterance();

        message.voiceURI = 'native';
        message.volume = 1; // 0 to 1
        message.rate = 1; // 0.1 to 10
        message.pitch = 1; //0 to 2
        message.text = text_value;
        message.lang = 'en-US';

        message.onend = function (e) {
            alert('Reading done!');
        };
        if (speechSynthesis.paused == true) {
            SpeechSynthesis.resume();
        }
        else {
            speechSynthesis.speak(message);
        }
    });

    var pause_reading_element = document.getElementById('pause');
    pause_reading_element.addEventListener('click', function () {
        speechSynthesis.pause();
        pause_reading_element.style.display = 'none';
        resume_reading_element.style.display = 'block';

    });

    var resume_reading_element = document.getElementById('resume');
    resume_reading_element.addEventListener('click', function () {
        speechSynthesis.resume();
        resume_reading_element.style.display = 'none';
        pause_reading_element.style.display = 'block';
    });

}