let commentSection = document.querySelector('.comment-section');
let button = document.querySelector('#submit');
let text = document.querySelector('#entry')
let target = null;
let reply = false;

function addComment(target) {
        const data = `<div class="comment">
                            <img id="user-icon" src="https://www.clipartmax.com/png/middle/41-410339_add-person-comments-add-person-icon.png" alt="">

                            <div class="comment-info">
                                <h3>Name</h3>
                                <p>${text.value}</p>
                                <p id="reply">reply</p>
                            </div>
                    </div>`

        if (!target){
            commentSection.innerHTML += data
        }
        else if (target) {
            target.innerHTML += data;
        }
}

button.addEventListener('click', () => {
    if(text.value)  addComment(target);
    target = null;
    text.value='';
})

commentSection.addEventListener('click', (e) => {
    if (e.target.id === 'reply') target = e.target
})