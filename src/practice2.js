const inject = (items, sections) => {
    const output = new Array(items.length + sections.length);

    sections.sort((a, b) => a.index - b.index)
    for (let i = 0, offset = 0; i < items.length;) {
        let section = sections[offset];
        // console.log(section)
        if (section != undefined && section.index == i && offset < sections.length) {
            output[i + offset] = section.content;
            offset++;
        } else {
            output[i + offset] = items[i];
            i++;
        }
    }

    return output;
}

export {inject};
