function inputValidation(type, input) {

    input = input.trim();

    if (!input) {
        return input;
    }

    switch (type) {
        case 'name':
            input = input[0].toUpperCase() + input.slice(1).toLowerCase();
            break;

        case 'email':
            //add validation, if you want :) 
            break;

        case 'pass':
            //add validation, if you want :) 
            break;

        default:
    }
    return input;
}

export default inputValidation;