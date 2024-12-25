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


<div class="form-group">
<label class="visuallyhidden"> Full Name </label>
[text* your-streetaddress class:form-control placeholder "Street Address *"] 
</div>    
<div class="form-group">
<label class="visuallyhidden"> City</label> 
[text* your-city class:form-control placeholder "City *"] 
</div> 
<div class="form-group">
<label class="visuallyhidden"> Email</label>
[email* your-email class:form-control autocomplete:email placeholder "Email Address *"] 
</div> 
<div class="form-group">
<label class="visuallyhidden"> Phone</label>
[tel* your-phone class:form-control maxlength:10 placeholder "Phone Number *"]
</div> 
<div class="form-group">
<label class="visuallyhidden"> Full Name </label>
[text* full-name class:form-control placeholder "Full Name *"] 
</div> 
<div class="form-group">
<label> Message</label>
[textarea your-message x3 class:form-control placeholder "Message"] 
</div>
<div class="form-group">[acceptance your-consent] I accept the <a href="#">Term of service</a> [/acceptance]</div>
<div class="form-group" aria-label="Submit button" style="margin-bottom:0px;!important">[submit "Let's connect"]</div>
<script>
    document.addEventListener('wpcf7mailsent', function(event) { 
    if ('1871' == event.detail.contactFormId) {
        setTimeout(function() {
            // Ẩn biểu mẫu
            let formElement = document.querySelector('#wpcf7-f1871-p16-o1 form');
            if (formElement) {
                formElement.style.display = 'none';
            }

            // Hiển thị thông báo cảm ơn
            let parentDiv = document.querySelector('div[id*="wpcf7-f1871-p16-o1"]');
            if (parentDiv) {
                let messageDiv = document.createElement('div');
                messageDiv.id = 'thankYouMessage';
                messageDiv.style.marginTop = '20px';
                messageDiv.style.padding = '32px 30px'; 
                messageDiv.style.textAlign = "center";
                messageDiv.style.fontSize = '18px';
                messageDiv.style.color = '#846346'; 

                // Thêm thẻ div class="frm-ct7-us"
                let innerDiv = document.createElement('div');
                innerDiv.className = 'frm-ct7-us';
                innerDiv.innerText = '<h4>Thank you!</h4><p>Your submission has been successful</p>';

                // Chèn innerDiv vào messageDiv
                messageDiv.appendChild(innerDiv);

                // Chèn messageDiv vào parentDiv
                parentDiv.appendChild(messageDiv);
            }
        }, 2500);
    }
}, false);
</script>
