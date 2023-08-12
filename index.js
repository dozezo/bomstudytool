function Func() {
    fetch("https://raw.githubusercontent.com/bcbooks/scriptures-json/master/book-of-mormon.json")
        .then((res) => {
        return res.json();
    })
    .then((data) => console.log(data));
}

Func();
