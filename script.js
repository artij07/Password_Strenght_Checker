const password = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

password.addEventListener("input", () => {
  const val = password.value;
  let strength = 0;

  // Criteria-based scoring
  if (val.length >= 8) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[a-z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;

  // Visual update
  switch (strength) {
    case 0:
      strengthBar.style.background = "#ddd";
      strengthText.textContent = "";
      break;
    case 1:
    case 2:
      strengthBar.style.background = "red";
      strengthText.textContent = "Weak 🔴";
      break;
    case 3:
    case 4:
      strengthBar.style.background = "orange";
      strengthText.textContent = "Medium 🟠";
      break;
    case 5:
      strengthBar.style.background = "green";
      strengthText.textContent = "Strong 🟢";
      break;
  }
});
