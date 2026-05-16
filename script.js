// ================= TO DO =================
if (document.getElementById("addBtn")) {
    const input = document.getElementById("taskInput");
    const btn = document.getElementById("addBtn");
    const list = document.getElementById("list");

    btn.addEventListener("click", function () {
        const taskText = input.value;

        const div = document.createElement("div");
        div.textContent = taskText;

        const del = document.createElement("button");
        del.textContent = "Delete";

        del.addEventListener("click", function () {
            div.remove();
        });

        div.appendChild(del);
        list.appendChild(div);

        input.value = "";
    });
}


// ================= COLORS =================
if (document.getElementById("palette")) {
    const palette = document.getElementById("palette");

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();

        const box = document.createElement("div");
        box.className = "box";
        box.style.background = color;
        box.textContent = color;

        box.addEventListener("click", function () {
            navigator.clipboard.writeText(color);
            alert("Copied!");
        });

        palette.appendChild(box);
    }
}


// ================= MODAL =================
if (document.getElementById("openBtn")) {
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const modal = document.getElementById("modal");

    openBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
}