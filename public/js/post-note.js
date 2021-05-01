var buttonComment = document.querySelectorAll('.form-comment');


buttonComment.forEach(function (el) {
    el.addEventListener('click', async function (e) {
        var postId = e.target.parentNode.dataset.post
        var commentText = e.target.previousElementSibling.previousElementSibling.value

        if (commentText) {
            const response = await fetch('/api/notes/' + postId, {
                method: 'POST',
                body: JSON.stringify({ body: commentText }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                document.location.reload();
            } else {
                alert('Failed to sign up.');
            }
        }

    })
})