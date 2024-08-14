document.getElementById('eventButton').addEventListener('click', function() {
    if (typeof roistat !== 'undefined' && roistat.event && roistat.event.send) {
        roistat.event.send("Событие с сайта", {
            "value": "123"
        });
        alert('Событие отправлено!');
    } else {
        console.error('Roistat SDK не доступен или метод event.send отсутствует');
    }
});
