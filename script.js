const strokes = [
    "Lorem ipsum",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nostrum repudiandae, officia ullam fuga dolor sequi placeat id recusandae enim eligendi quasi cupiditate quisquam natus, laborum aperiam, voluptatum cum obcaecati!"
];
function preview(strokes, n) {
    for (let i = 0; i < strokes.length; i++) {
        if (strokes[i].length > n) {
            strokes[i] = strokes[i].substr(0, n);
            strokes[i] = strokes[i].substr(0, strokes[i].lastIndexOf(" "));
            strokes[i] = strokes[i].concat("...");
        }
    }
    return strokes;
}

console.log(preview(strokes, 20))
