var editPost = document.querySelector('.edit-post');

console.log(editPost);

editPost.addEventListener('click', async function (e) {
    var titleText = e.target.previousElementSibling.previousElementSibling.previousElementSibling.value;
    var bodyText = e.target.previousElementSibling.value;

    var postId = e.target.parentNode.dataset.edit

    console.log(postId);
    if (titleText && bodyText) {
        const response = await fetch('/api/edit/' + postId, {
            method: 'PUT',
            body: JSON.stringify({ title: titleText, body: bodyText }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to sign up.');
        }
    }

})
