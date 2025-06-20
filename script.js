/*function to control sidebar*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
document.addEventListener("DOMContentLoaded", function(){ 
  const spanYear = document.getElementById("fullyear");
  const year = new Date().getFullYear();
  spanYear.textContent = year;
})



const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fields = [
    {
      id: "name",
      value: document.getElementById("name").value.trim(),
      validators: [
        { test: v => v !== "", error: "Name cannot be empty" },
        { test: v => v.length >= 6, error: "Name should be at least 6 characters" }
      ],
      success: "Name is valid"
    },
    {
      id: "email",
      value: document.getElementById("email").value.trim(),
      validators: [
        { test: v => v !== "", error: "Email cannot be empty" },
        {
          test: v => /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/.test(v),
          error: "Email should contain @ and a valid domain"
        }
      ],
      success: "Email is valid"
    },
    {
      id: "message",
      value: document.getElementById("message").value.trim(),
      validators: [
        { test: v => v !== "", error: "Message cannot be empty" },
        { test: v => v.length >= 6, error: "Message should contain at least 6 characters" }
      ],
      success: "Message is valid"
    }
  ];

  fields.forEach(({ id, value, validators, success }) => {
    const input = document.getElementById(id);
    const errorEl = document.getElementById(`${id}-error`);
    
    input.classList.remove("input-error", "input-success");
    errorEl.classList.remove("text-error", "text-success");

    const failed = validators.find(v => !v.test(value));
    
    if (failed) {
      input.classList.add("input-error");
      errorEl.classList.add("text-error");
      errorEl.textContent = failed.error;
    } else {
      input.classList.add("input-success");
      errorEl.classList.add("text-success");
      errorEl.textContent = success;
    }
  });
});
