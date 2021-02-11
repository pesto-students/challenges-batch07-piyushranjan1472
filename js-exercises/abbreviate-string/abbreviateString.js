// import { isString } from 'util';
function abbreviateString(str) {
    const split_names = str.trim().split(' ');
    const length = split_names.length - 1;
    if (split_names.length > 1) {
        return (`${split_names[0]} ${split_names[length].charAt(0).toUpperCase()}.`);
    }
    return split_names[0];
}
// console.log(abbreviateString('Piyush ranjan'));
export { abbreviateString };
