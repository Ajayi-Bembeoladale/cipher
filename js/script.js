function firstlastsen(word) {
    let firstName = word.charAt(0);
    let name = word.length - 1;
    let lastName = word.charAt(name);
    return (firstName + lastName).toUpperCase();
}

function firstlastsen(word) {
    let firstName = word.charAt(0);
    let name = word.length - 1;
    let lastName = word.charAt(name);
    return (lastName + firstName).toUpperCase();
}

function firstlastsen(word) {
    let firstName = word.charAt(0);
    let name = word.length - 1;
    let lastName = word.charAt(name);
    return word + (lastName + firstName).toUpperCase();
}

function firstlastsen(word) {
    let inName = word.length / 2;
    let initialName = word.charAt(inName)
    let firstName = word.charAt(0);
    let name = word.length - 1;
    let lastName = word.charAt(name);
    return initialName.toUpperCase() + word + (lastName + firstName).toUpperCase();
}

