function toggleTheme() {
  document.body.classList.toggle("light");
}

function scrollTeam(dir) {
  document.getElementById("teamTrack").scrollBy({
    left: dir * 220,
    behavior: "smooth"
  });
}

function openModal(img, name, role, achieve) {
  document.getElementById("modalImg").src = img;
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalRole").innerText = role;
  document.getElementById("modalAchieve").innerText = achieve;
  document.getElementById("memberModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("memberModal").style.display = "none";
}
