// função principal de validação de email
function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}
// função principal de validação de senha
function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordError();
}

function isEmailValid() {
    const email = form.email().value;
    return email ? validateEmail(email) : false;
}

function toggleEmailErrors () {
    const email = form.email().value;
    // valida se o campo de e-mail está vazio ou não: "Email é obrigatório"
    form.emailRequiredError().style.display = !email ? "block" : "none";

    // valida se o email é válido ou inválido: "email é inválido"
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordError() {
    const password = document.getElementById('password').value;
    // valida se o campo de senha está vazio ou não: "Senha é obrigatória"
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.login().disabled = !emailValid || !passwordValid;

}

function isPasswordValid() {
    const password = form.password().value;
    return password ? true : false;
}

const form = {
    email: () => document.getElementById('email'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    password: () => document.getElementById('password'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    recoverPasswordButton: () => document.getElementById('recover-password-button'),
    login: () => document.getElementById('login-button')

}