
window.addEventListener("DOMContentLoaded", event => {
        const audio = document.querySelector("audio");
        audio.volume = 0.1;
        audio.play();
      });

const fetching = (event) => {
randomNum = Math.ceil(Math.random() * 100);

        fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
           .then(response => response.json())
           .then(data => {
              let order = data['order'];
              let name = data['name'];
              let height = data['height'];
              let weight = data['weight'];
              let sprite = data["sprites"]["front_default"]

            ordertxt = document.querySelector(".order");
            nametxt = document.querySelector(".name");
            heighttxt = document.querySelector(".height");
            weighttxt = document.querySelector(".weight");

            ordertxt.innerText = order;
            nametxt.innerText = name;
            heighttxt.innerText = height;
            weighttxt.innerText = weight;
                document.getElementById("sprite").src = sprite;
                console.log(data)

    });


}

document.getElementById("btnSearch").addEventListener("click",  fetching);

// document.getElementById("myBtn").addEventListener("click", function() {
//     alert("Hello World!");
//   });


//  function hello(event){
//      alert("hi")
//     }
// document.getElementById("btnSearch").addEventListener("click", hello());





