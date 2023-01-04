function inputValidation(type, input) {

    input = input.trim();

    let payload = {
        value: input,
        error: false,
        notification: ''
    };

    switch (type) {
        case 'name':
            if (!input) {
                payload = { ...payload, error: true, notification: 'Name input is empty.' };
                break;
            }

            payload = { ...payload, value: input[0].toUpperCase() + input.slice(1).toLowerCase() };
            break;

        case 'email':
            //add validation, if you want :) 
            break;

        case 'pass':
            //add validation, if you want :) 
            break;

        default:
    }
    return payload;
}

export default inputValidation;