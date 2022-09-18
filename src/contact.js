export function contact (){
    const contactUs = document.createElement('div');

    const contactDetails = (function makeContactDetails(){
        const contactDetails = document.createElement('div');
        contactDetails.setAttribute('class', 'contact-details');

        const phone = document.createElement('span');
        phone.setAttribute('class', 'phone');
        phone.innerText = '0525381648';
        contactDetails.appendChild(phone)

        const address = document.createElement('span');
        address.setAttribute('class', 'address');
        address.innerText = 'Beverly Hills 90210';
        contactDetails.appendChild(address)

        const email = document.createElement('span');
        email.setAttribute('class', 'email');
        email.innerText = 'MiZot@LechLishon.com';
        contactDetails.appendChild(email)
        
        return contactDetails
    })()

    const contactForm = (function makeContactForm(){
        const form = document.createElement('form');
        form.setAttribute('class', 'contactForm');
        form.setAttribute('onsubmit', 'return false');

        const firstName = document.createElement('input');
        firstName.setAttribute('required', true);
        firstName.setAttribute('type', 'text');
        firstName.setAttribute('name', 'firstName');
        firstName.setAttribute('id', 'firstName');
        firstName.setAttribute('placeholder', 'First Name');

        const lastName = document.createElement('input');
        lastName.setAttribute('required', true);
        lastName.setAttribute('type', 'text');
        lastName.setAttribute('name', 'lastName');
        lastName.setAttribute('id', 'lastName');
        lastName.setAttribute('placeholder', 'Last Name');

        const phone = document.createElement('input');
        phone.setAttribute('required', true);
        phone.setAttribute('type', 'number');
        phone.setAttribute('name', 'phone');
        phone.setAttribute('id', 'phone');
        phone.setAttribute('placeholder', 'Phone Number');

        const message = document.createElement('textarea');
        message.setAttribute('required', true);
        message.setAttribute('type', 'text');
        message.setAttribute('name', 'message');
        message.setAttribute('id', 'message');
        message.setAttribute('placeholder',
         'Enter your message here.');

        const email = document.createElement('input');
        email.setAttribute('required', true);
        email.setAttribute('type', 'text');
        email.setAttribute('name', 'email');
        email.setAttribute('id', 'email');
        email.setAttribute('placeholder', 'e-mail');

        const submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('id', 'submit');
        submit.innerText = 'Send';
        
        form.appendChild(firstName);
        form.appendChild(lastName);
        form.appendChild(phone);
        form.appendChild(message);
        form.appendChild(email);
        form.appendChild(submit);

        return form;
    })()

    contactUs.appendChild(contactDetails);
    contactUs.appendChild(contactForm);
    return contactUs
}
