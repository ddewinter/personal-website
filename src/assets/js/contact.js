// Contact form: builds a pre-written email and opens the visitor's email app.
// No server or third-party service involved; nothing is sent from the page.
(function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const to = form.dataset.email;
  const status = document.getElementById("form-status");
  const fields = {
    name: form.querySelector("#name"),
    email: form.querySelector("#email"),
    topic: form.querySelector("#topic"),
    message: form.querySelector("#message"),
  };

  const messages = {
    name: "Please add your name.",
    email: "Please add an email address I can reply to.",
    emailFormat: "That email address doesn't look quite right.",
    message: "Please write a short message.",
  };

  function setError(input, text) {
    const error = document.getElementById(input.id + "-error");
    input.setAttribute("aria-invalid", text ? "true" : "false");
    if (error) error.textContent = text || "";
  }

  function validate() {
    let firstInvalid = null;
    const name = fields.name.value.trim();
    const email = fields.email.value.trim();
    const message = fields.message.value.trim();

    setError(fields.name, name ? "" : messages.name);
    if (!name) firstInvalid = firstInvalid || fields.name;

    let emailError = "";
    if (!email) emailError = messages.email;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) emailError = messages.emailFormat;
    setError(fields.email, emailError);
    if (emailError) firstInvalid = firstInvalid || fields.email;

    setError(fields.message, message ? "" : messages.message);
    if (!message) firstInvalid = firstInvalid || fields.message;

    return firstInvalid;
  }

  // Exposed for testing: returns the mailto: link for the current form values.
  function buildMailto() {
    const name = fields.name.value.trim();
    const email = fields.email.value.trim();
    const topic = fields.topic.value;
    const message = fields.message.value.trim();

    const subject = `${topic} — from ${name}`;
    const body = `${message}\n\n—\n${name}\n${email}`;

    // encodeURIComponent keeps line breaks (%0A) and special characters intact.
    // Email links expect CRLF line breaks (RFC 6068).
    const crlfBody = body.replace(/\r?\n/g, "\r\n");
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(crlfBody)}`;
  }
  form.buildMailto = buildMailto;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstInvalid = validate();
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }
    window.location.href = buildMailto();
    status.hidden = false;
  });

  // Clear an error as soon as the visitor fixes the field.
  for (const input of [fields.name, fields.email, fields.message]) {
    input.addEventListener("input", () => {
      if (input.getAttribute("aria-invalid") === "true" && input.value.trim()) setError(input, "");
    });
  }

  // "Copy" button next to the plain email address.
  const copyButton = document.querySelector("[data-copy]");
  if (copyButton && navigator.clipboard) {
    copyButton.hidden = false;
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(copyButton.dataset.copy);
        copyButton.textContent = "Copied";
        setTimeout(() => (copyButton.textContent = "Copy"), 2000);
      } catch {
        copyButton.textContent = "Press ⌘/Ctrl+C";
      }
    });
  }
})();
