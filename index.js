function Func() {
    fetch("./bom.json")
        .then((res) => {
        return res.json();
    })
    .then((data) => console.log(data));
}

Func();
