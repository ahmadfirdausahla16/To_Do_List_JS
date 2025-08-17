const submit = document.getElementById("button");
const inputUser = document.getElementById("textin");

inputUser.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submit.click();
  }
});

submit.addEventListener("click", function () {
  const userInput = document.getElementById("textin").value;
  if (userInput !== "") {
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.classList.add("list-item");
    li.textContent = userInput;

    const span = document.createElement("span");
    span.classList.add("span");

    const done = document.createElement("button");
    done.classList.add("done");
    done.textContent = "O";

    done.addEventListener("click", function () {
      li.textContent = userInput + " done";
    });

    const del = document.createElement("button");
    del.classList.add("del");
    del.textContent = "X";

    del.addEventListener("click", function () {
      li.remove();
      updateListPadding();
    });

    span.appendChild(done);
    span.appendChild(del);
    li.appendChild(span);
    ul.appendChild(li);
    updateListPadding();

    const h3 = document.querySelector("h3");
    h3.textContent = "Your list bellow";

    function updateListPadding() {
      const listin = document.querySelectorAll(".list-item");
      listin.forEach((item, index) => {
        if (index === 0) {
          item.style.padding = "0 5rem 0 5rem";
        } else {
          item.style.padding = "2rem 5rem 0 5rem";
        }
      });

      listin.forEach((item) => {
        if (listin.length > 0) {
          const lastItem = listin[listin.length - 1];
          lastItem.style.paddingBottom = "5rem";
        }
      });
    }

    document.getElementById("textin").value = "";
  }
});
