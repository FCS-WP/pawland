/**
 * Frontend script for Footer Newsletter block
 */

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.pc-newsletter-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            const submitBtn = form.querySelector('button[type="submit"]');
            const email = emailInput.value;
            
            // Create response message element if it doesn't exist
            let responseMsg = form.querySelector('.pc-newsletter-response');
            if (!responseMsg) {
                responseMsg = document.createElement('div');
                responseMsg.className = 'pc-newsletter-response';
                form.appendChild(responseMsg);
            }
            
            // Loading state
            submitBtn.disabled = true;
            responseMsg.innerHTML = '<p class="loading">Subscribing...</p>';
            responseMsg.className = 'pc-newsletter-response is-loading';
            
            const formData = new FormData();
            formData.append('action', 'zippy_subscribe_newsletter');
            formData.append('email', email);
            formData.append('nonce', zippyNewsletterData.nonce);
            
            fetch(zippyNewsletterData.ajaxUrl, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                submitBtn.disabled = false;
                if (data.success) {
                    responseMsg.innerHTML = `<p class="success">${data.data}</p>`;
                    responseMsg.className = 'pc-newsletter-response is-success';
                    emailInput.value = ''; // Clear input
                } else {
                    responseMsg.innerHTML = `<p class="error">${data.data}</p>`;
                    responseMsg.className = 'pc-newsletter-response is-error';
                }
            })
            .catch(error => {
                submitBtn.disabled = false;
                responseMsg.innerHTML = '<p class="error">An error occurred. Please try again.</p>';
                responseMsg.className = 'pc-newsletter-response is-error';
            });
        });
    });
});
