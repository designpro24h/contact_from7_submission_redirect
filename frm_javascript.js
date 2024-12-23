/* Đưa vào java script lấy theo id form contact 7*/
document.addEventListener('wpcf7mailsent', function(event) { 
    if ('1853' == event.detail.contactFormId) {
        setTimeout(function() {
            // Ẩn biểu mẫu
            let formElement = document.querySelector('#wpcf7-f1853-p18-o1 form');
            if (formElement) {
                formElement.style.display = 'none';
            }

            // Hiển thị thông báo cảm ơn
            let parentDiv = document.querySelector('div[id*="wpcf7-f1853-p18-o1"]');
            if (parentDiv) {
                let messageDiv = document.createElement('div');
                messageDiv.id = 'thankYouMessage';
                messageDiv.style.marginTop = '20px';
                messageDiv.style.padding = '32px 30px'; // Bổ sung padding
                messageDiv.style.backgroundColor = '#fff'; // Bổ sung background-color
                messageDiv.style.fontSize = '18px';
                messageDiv.style.color = '#846346'; // Màu xanh lá cây

                // Thêm thẻ div class="frm-ct7-us"
                let innerDiv = document.createElement('div');
                innerDiv.className = 'frm-ct7-us';
                innerDiv.innerText = 'Thank You for Contacting Us';

                // Chèn innerDiv vào messageDiv
                messageDiv.appendChild(innerDiv);

                // Chèn messageDiv vào parentDiv
                parentDiv.appendChild(messageDiv);
            }
        }, 2500);
    }
}, false);
