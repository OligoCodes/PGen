const generatePassword = () => {
      const inputValue = parseFloat(document.getElementById("char").value);
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
      let password = "";
      for (let i = 0; i < inputValue; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      document.getElementById("pass").textContent = password;
  };
