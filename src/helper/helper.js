export const getHalaman = (input) => {
    if (input.length === 1) {
        return input
    } else {
        const [start, end] = input.split("-");
        const halaman = [];
        for (let i = parseInt(start); i <= parseInt(end); i++) {
            halaman.push(i);
        }
        return halaman
    }
}

export const getLength = (input) => {
    if (input.length === 1 || input.length === 2) {
        return 1
    } else {
        const [start, end] = input.split("-");
        return parseInt(end) - parseInt(start) + 1
    }
}

console.log(getLength("10"));
