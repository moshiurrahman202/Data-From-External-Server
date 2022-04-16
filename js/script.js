document.getElementById("getjoke").addEventListener("click", loadjokes);

function loadjokes(e){
    let number = document.getElementById("numberofjoke").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onprogress = function (){
        document.getElementById("output").innerHTML = "<h3>Loading........</h3>";
    }

    xhr.onload = function () {
        if (this.status === 200){
            let data = JSON.parse(this.responseText);
            // console.log(data);
            let jokes = data.value;
            let output = "<ol>";
            jokes.forEach(element => {
                // console.log(element.joke);
                output += `<li>${element.joke}</li>`;

            });
            output += "</ol>";
            // console.log(output);
            document.getElementById("output").innerHTML = output;

           
        }
    }

    xhr.send();
}
