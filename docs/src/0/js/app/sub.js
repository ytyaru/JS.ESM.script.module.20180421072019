export function print(message) {
    console.log(message);
    document.body.innerHTML = document.body.innerHTML + '<br/>' + message;
    document.body.scrollTop = document.body.scrollHeight;
    alert(message);
}
