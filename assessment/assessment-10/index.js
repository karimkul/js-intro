function isAlphabetic(char) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.includes(char.toLowerCase());
}

function isNumeric(char) {
    const numbers = "1234567890";
    return numbers.includes(char);
}

function isAllowedChar(char) {
    const allowedChars = "._";
    return allowedChars.includes(char);
}

function isValidEmail(email) {
    var emailParts = email.split("@");

    var username = emailParts[0];
    var domain = emailParts[1];

    if (emailParts.length !== 2) {
        return false;
    }

    // Validating Username edges.

    if (
        isAllowedChar(username[0]) ||
        isAllowedChar(username[username.length - 1])
    ) {
        return false;
    }

    // Checking if username contains alphanumeric chars or dots and underscores

    for (var i = 0; i < username.length; i++) {
        var char = username[i];
        if (!isAlphabetic(char) && !isNumeric(char) && !isAllowedChar(char)) {
            return false;
        }
    }

    // Validates  dot and an underscore do not come together in username

    for (var i = 0; i < username.length - 1; i++) {
        var currentChar = username[i];
        var nextChar = username[i + 1];
        if (isAllowedChar(currentChar) && isAllowedChar(nextChar)) {
            return false;
        }
    }

    // Validates number of dots in domain part. It should be only one
    var domainParts = domain.split(".");
    if (domainParts.length !== 2) {
        return false;
    }

    // It checks if domain name part has at least 1 char.
    if (domainParts[0].length < 1) {
        return false;
    }

    // It checks if domain extension part has min 2 chars and max 3.

    if (domainParts[1].length < 2 || domainParts[1].length > 3) {
        return false;
    }

    // It validates if domain part is alphabetic

    var domainPartWithoutDot = domainParts.join("");
    for (var i = 0; i < domainPartWithoutDot.length; i++) {
        var char = domainPartWithoutDot[i];
        if (!isAlphabetic(char)) {
            return false;
        }
    }

    return true;
}
