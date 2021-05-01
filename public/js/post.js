var postPost = document.querySelector('.post-post');

postPost.addEventListener('click', async function (e) {
    console.log(e)
    var titleText = e.target.previousElementSibling.previousElementSibling.previousElementSibling.value
    var bodyText = e.target.previousElementSibling.value

    if (titleText && bodyText) {
        const response = await fetch('/api/edit', {
            method: 'POST',
            body: JSON.stringify({ title: titleText, body: bodyText }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("Good to go")
        } else {
            alert('Failed to post');
        }
    }
    document.location.href = '/homepage';

})
