let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let ui = new UI();
searchBtn.addEventListener('click', (e)=>{
    let userText = searchUser.value;
    if(userText != '') {
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data => {
            // console.log(data);
            if(data.message == 'Not Found'){
                //Show alert
                ui.showAlert("User not found !!", "alert alert-danger");
            } else {
                //Show profile
                ui.showProfile(data);
            }
        })
    } else{
        //clear profile
        ui.clearProfile();
    }
});