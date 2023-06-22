export default function checkHex (hex) {
    const regex = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;
    return regex.test(hex) ? true : false;
}
