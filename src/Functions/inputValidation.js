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

            const newInputName = input[0].toUpperCase() + input.slice(1).toLowerCase();
            payload = { ...payload, value: newInputName };
            break;

        case 'email':
            if (!input) {
                payload = { ...payload, error: true, notification: 'Email input is empty.' };
                break;
            }

            const newInputEmail = input.toLowerCase();
            payload = { ...payload, value: newInputEmail };
            break;

        case 'pass':
            const passLenght = 4;
            if (input.length < 4) {
                payload = { ...payload, error: true, notification: `Password must contain at least ${passLenght} characters.` };
                break;
            }

            payload = { ...payload, value: input };
            break;

        default:
    }
    return payload;
}

export default inputValidation;