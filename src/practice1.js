const parseData = (input) => {
    let {data, column} = input

    const output = [];
    for (const datum of data) {
        // [_name, _age, _gender, _birthday] = datum;
        let obj = {};
        for (let i = 0; i < column.length; i++) {
            obj[column[i].name] = datum[i];
        }
        output.push(obj)
    }
    return output;
};
export {parseData};
