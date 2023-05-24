alert("로그인 페이지입니다.");

const clock = document.querySelector(".clock");

function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const Seconds = date.getSeconds();
  clock.innerText = `${hours}:${minutes}:${Seconds}`;
}

getClock();
setInterval(getClock, 1000);
