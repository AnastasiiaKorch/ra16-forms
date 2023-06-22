export default function hexToRgb (hex) {
    const arr = [];

    arr.push(parseInt(hex.slice(1, 3), 16))
    arr.push(parseInt(hex.slice(3, 5), 16))
    arr.push(parseInt(hex.slice(5, 7), 16))

    return `rgb(${arr.toString()})`;
}