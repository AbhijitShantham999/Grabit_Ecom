export const handleContactForm = () => {
  const form = document.querySelector("form");

  const inputName = document.getElementById("f_name");
  const inputPhone = document.getElementById("f_phone");
  const inputEmail = document.getElementById("f_email");
  const inputMsg = document.getElementById("f_msg");

  const errorName = document.querySelector("#name .error_span");
  const errorPhone = document.querySelector("#phone .error_span");
  const errorMail = document.querySelector("#email .error_span");
  const errorMsg = document.querySelector("#message .error_span");
  const contactForm = document.querySelector(".form_right");
  const contact_btn = document.getElementById("contact_btn");

  if (!contactForm) {
    console.warn("handleContactForm: .form_right not found in DOM.");
    return;
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = inputName.value.trim();
    const phoneNum = inputPhone.value.trim();
    const email = inputEmail.value.trim();
    const msg = inputMsg.value.trim();

    let isValid = true;

    // Name Validation
    if (name === "") {
      errorName.textContent = "Please Enter a Name";
      errorName.style.opacity = 1;
      isValid = false;
    } else {
      errorName.textContent = "";
      errorName.style.opacity = 0;
    }

    // Phone Number Validation
    if (phoneNum.length < 10) {
      errorPhone.textContent = "Phone Number should be 10 or >10";
      errorPhone.style.opacity = 1;
      isValid = false;
    } else {
      errorPhone.textContent = " ";
      errorPhone.style.opacity = 0;
    }

    // Email validation
    if (email === "") {
      errorMail.textContent = "Please Enter a Email";
      errorMail.style.opacity = 1;
      isValid = false;
    } else {
      errorMail.textContent = " ";
      errorMail.style.opacity = 0;
    }

    // Message Validation
    if (msg === "") {
      errorMsg.textContent = "Please Enter a Message";
      errorMsg.style.opacity = 1;
      isValid = false;
    } else {
      errorMsg.textContent = "";
      errorMsg.style.opacity = 0;
    }

    if (isValid) {
      alert("✅ Form submitted successfully!");
      form.reset();
    }
  });
};
