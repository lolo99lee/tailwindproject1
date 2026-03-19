const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const menuItems = document.getElementById("menuItems");

let isOpen = false;

function openMenu() {
  isOpen = true;
  menuItems.classList.remove(
    "-translate-y-2",
    "opacity-0",
    "pointer-events-none",
  );
  menuItems.classList.add(
    "translate-y-0",
    "opacity-100",
    "pointer-events-auto",
  );
  openBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
}

function closeMenu() {
  isOpen = false;
  menuItems.classList.remove(
    "translate-y-0",
    "opacity-100",
    "pointer-events-none",
  );
  menuItems.classList.add("-translate-y-2", "opacity-0", "pointer-events-auto");
  closeBtn.classList.add("hidden");
  openBtn.classList.remove("hidden");
}

openBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  openMenu();
});

closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  closeMenu();
});

document.addEventListener("click", (e) => {
  if (
    !(
      menuItems.contains(e.target) ||
      openBtn.contains(e.target) ||
      closeBtn.contains(e.target)
    ) &&
    isOpen
  )
    closeMenu();
});
