const bubbleSort = (inputArr) => {
    const len = inputArr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                const tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);

    return inputArr;
};

bubbleSort([2, 3, 4, 1]);
