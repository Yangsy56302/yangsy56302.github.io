const lastStr = "2038-01-19T03:14:07+00:00";
const last = new Date(lastStr);

function updateTime() {
    document.getElementById('last').textContent = last.toISOString();
    const current = new Date();
    document.getElementById('current').textContent = current.toISOString();
    document.getElementById('deltaSeconds').textContent = parseInt((last.getTime() - current.getTime()) / 1000).toString();
}

setInterval(updateTime, 1000 / 24);