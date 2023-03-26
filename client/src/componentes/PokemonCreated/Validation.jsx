


export default function validate(input) {
    let errors = {};
    let regexStats = /^[0-9_-]{1,2}$/;

    if (!input.name) {
        errors.name = 'A name is required'
    }
    if (!input.life) { ///signos else if() {}
        errors.life = 'Standard of living is required';
    } else if (!regexStats.test(input.life)) {
        errors.life = 'Only accepts numbers from 0 to 100 '
    }
    if (!input.attack) {
        errors.attack = 'Attack level is required';
    } else if (!regexStats.test(input.attack)) {
        errors.attack = 'Only accepts numbers from 0 to 100 '
    }
    if (!input.defense) {
        errors.defense = 'Defense level is required';
    } else if (!regexStats.test(input.defense)) {
        errors.defense = 'Only accepts numbers from 0 to 100 '
    }
    if (!input.speed) {
        errors.speed = 'Speed level is required';
    } else if (!regexStats.test(input.speed)) {
        errors.speed = 'Only accepts numbers from 0 to 100 '
    }
    if (!input.height) {
        errors.height = 'A height is required';
    } else if (!regexStats.test(input.height)) {
        errors.height = 'Only accepts numbers from 0 to 100 '
    }
    if (!input.weight) {
        errors.weight = 'A weight is required';
    } else if (!regexStats.test(input.weight)) {
        errors.weight = 'Only accepts numbers from 0 to 100 '
    }
    if (!input.img) {
        errors.img = 'An image is required';
    }
    if (input.types?.length === 0 || input.types === undefined) {
        errors.types = 'At least one type is required';
    }
    return errors;
}

export function  validateName(name){
    let errors = {};
    if(!name){
        errors.name = 'Pokemon no encontrado';
    }
    return errors;
}
