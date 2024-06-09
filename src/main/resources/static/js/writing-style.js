//ANIMATION
const container = document.getElementById("container");
container.classList.add('move');
/*
const anim = document.getElementById("animation");
anim.addEventListener("click", () => {
    container.classList.add('out');
});
*/
//

// toggle create <-> check
const create_div = document.getElementById("create-div");
const check_div = document.getElementById("check-div");
check_div.style.display = "none";

const toggle_btn = document.getElementById("temp-btn");
var iscreate = true;
toggle_btn.addEventListener("click", toggle_view);

function toggle_view() {
    if (iscreate) {
        check_div.style.display = "block";
        create_div.style.display = "none";
    } else {
        create_div.style.display = "block";
        check_div.style.display = "none";
    }
    iscreate = !iscreate;
}

const writing_style_content = document.getElementById("writing-style-content");

//create style
const create_style_btn = document.getElementById("create-style-btn");
create_style_btn.addEventListener("click", create_style);

function create_style() {
    create_style_btn.disabled = true;
    const textarea = document.getElementById("short-writing");
    const member_id = sessionStorage.getItem("memberId");
    const access_token = sessionStorage.getItem("accessToken");

    const data = {
        userInput: textarea.value
    };

    fetch(url + `style?memberId=${member_id}`, {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            toggle_view();
            writing_style_content.innerText = data.result.content;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
