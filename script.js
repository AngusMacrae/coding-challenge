// QUESTION 1 //

Aobject = function () {
    this.name = 'KRONOSTOKEN';
}

A = function () {
    if (typeof a !== 'undefined') {
        return a;
    } else {
        return new Aobject;
    }
}

a = new A();
b = new A();

console.log(a === b);
console.log(typeof a);
console.log(a.name === 'KRONOSTOKEN');

// QUESTION 2 //

function mergeCsv(input) {

    let fileContents = [];
    let fileLines = [];
    let fileRecords = [];
    let outputFileLines = [];

    for (let i = 0; i < input.files.length; i++) {
        let file = input.files[i];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
            fileContents[i] = reader.result;
            fileLines[i] = [...fileContents[i].split('\n')];
            let headers = fileLines[i][0];
            for (let j = 1; j < fileLines[i].length - 1; j++) {
                fileRecords.push([...fileLines[i][j].split(';')]);
            }
            if (i == input.files.length - 1) {
                fileRecords.sort(sortFunction);
                for (let k = 0; k < fileRecords.length; k++) {
                    outputFileLines.push(fileRecords[k].join(";"));
                }
                outputFileLines.unshift(headers);
                let outputFileContent = outputFileLines.join('\n');
                var blob = new Blob([outputFileContent], {
                    type: "text/plain;charset=utf-8"
                });
                saveAs(blob, "dataOut.csv");
            }
        }
    }

}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    } else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

// QUESTION 3 //

// no Javascript required