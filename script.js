const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    // Здесь твой код
    const form = document.querySelector('.form');
    const button = getElementById('button');
    const name = document.getElementById('name');
    const secondName = document.getElementById('secondName');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const agree = document.getElementById('agree');

    button.addEventListener('click', () => {
        fetch(`https://polinashneider.space/user`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer: AlesiaMK'
                },
                body: JSON.stringify({
                    "name": name.value,
                    "secondName": secondName.value,
                    "phone": phone.value,
                    "email": email.value,
                    "agree": agree.value
                }),
            })
            .then((result) => {
                return result.json()
            })
            .then((data) => {
                document.querySelector('.form').reset()
                console.log(data)
                let div = document.createElement('div');
                div.className = 'message';
                div.innerHTML = `${name.value}, регистрация успешно пройдена!`;
                document.body.append(div)
            })
            .catch((error) => {
                let div = document.createElement('div');
                div.className = 'message';
                div.innerHTML = `${name.value}, к сожалению произошла ошибка`;
                document.body.append(div)
                console.log(error)
            })
    })

});