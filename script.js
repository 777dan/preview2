const str1 = "Lorem ipsum";
const str2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nostrum repudiandae, officia ullam fuga dolor sequi placeat id recusandae enim eligendi quasi cupiditate quisquam natus, laborum aperiam, voluptatum cum obcaecati!";
function preview(str, n) {
    if (str.length > n) {
        str = str.substr(0, n).concat("...");
    }
    return str;
}

console.log(preview(str2, 11))
