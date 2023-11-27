// Nav modal methods

const userModal = document.querySelector(".user-modal-overlay");
const authUser = document.querySelector(".user");
const alertModal = document.querySelector(".alerts-overlay");
const notificationIcon = document.querySelector(".notification");

function toggleUserModal() {
  if (userModal.style.display === "" || userModal.style.display === "none") {
    userModal.style.display = "block";
  } else {
    userModal.style.display = "none";
  }
}
function toggleAlertModal() {
  if (alertModal.style.display === "" || alertModal.style.display === "none") {
    alertModal.style.display = "block";
    // notificationIcon.style.background = "#616161";
  } else {
    alertModal.style.display = "none";
    // notificationIcon.style.background = "#303030";
  }
}

authUser.addEventListener("click", toggleUserModal);
notificationIcon.addEventListener("click", toggleAlertModal);

alertModal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    if (alertModal.style.display === "block") {
      alertModal.style.display = "none";
      // notificationIcon.style.background = "#303030";
    }
  }
});

userModal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    if (userModal.style.display === "block") {
      userModal.style.display = "none";
    }
  }
});

// Subscription alert close method
const closeIcons = document.getElementsByClassName("close-sub-alert-icon");
const subscription = document.querySelector(".subscription");
for (i = 0; i < closeIcons.length; i++) {
  closeIcons[i].addEventListener("click", function () {
    subscription.classList.toggle("hidden");
    console.log(subscription);
    setTimeout(function () {
      subscription.style.display = "none";
    }, 300);
  });
}
// setup guide open and close method
const closeBtn = document.querySelector(".setup-guide-closed-icon");
const setupGuide = document.querySelector(".setup-guide-prompts");
const setupContainer = document.querySelector(".setup-section");
const openedBtn = document.querySelector(".setup-guide-opened-icon");

// Setup guide methods
const promptTitle1 = document.querySelector("#promptT1");
const prompt1 = document.querySelector("#prompt1");
const promptTitle2 = document.querySelector("#promptT2");
const prompt2 = document.querySelector("#prompt2");
const promptTitle3 = document.querySelector("#promptT3");
const prompt3 = document.querySelector("#prompt3");
const promptTitle4 = document.querySelector("#promptT4");
const prompt4 = document.querySelector("#prompt4");
const promptTitle5 = document.querySelector("#promptT5");
const prompt5 = document.querySelector("#prompt5");

const prompts = [prompt1, prompt2, prompt3, prompt4, prompt5];

closeBtn.addEventListener("click", function () {
  for (i = 0; i < prompts.length; i++) {
    if (prompts[i].classList.contains("active") && i !== 0) {
      prompts[i].classList.toggle("active");
    }

    if (!prompts[i].classList.contains("active") && i == 0) {
      prompts[i].classList.toggle("active");
    }
  }
  openedBtn.style.display = "flex";
  closeBtn.style.display = "none";
  setupGuide.classList.toggle("setup-opened");
  setupContainer.classList.toggle("container-active");
});

openedBtn.addEventListener("click", function () {
  for (i = 0; i < prompts.length; i++) {
    if (prompts[i].classList.contains("active")) {
      prompts[i].classList.toggle("active");
    }
  }
  closeBtn.style.display = "flex";
  openedBtn.style.display = "none";
  setupGuide.classList.toggle("setup-opened");
  setupContainer.classList.toggle("container-active");
});

promptTitle1.addEventListener("click", function (e) {
  if (prompt2.classList.contains("active")) {
    prompt2.classList.toggle("active");
    prompt1.classList.toggle("active");
  } else if (prompt3.classList.contains("active")) {
    prompt3.classList.toggle("active");
    prompt1.classList.toggle("active");
  } else if (prompt4.classList.contains("active")) {
    prompt4.classList.toggle("active");
    prompt1.classList.toggle("active");
  } else if (prompt5.classList.contains("active")) {
    prompt5.classList.toggle("active");
    prompt1.classList.toggle("active");
  } else {
    prompt1.classList.toggle("active");
  }
});

promptTitle2.addEventListener("click", function (e) {
  if (prompt1.classList.contains("active")) {
    prompt1.classList.toggle("active");
    prompt2.classList.toggle("active");
  } else if (prompt3.classList.contains("active")) {
    prompt3.classList.toggle("active");
    prompt2.classList.toggle("active");
  } else if (prompt4.classList.contains("active")) {
    prompt4.classList.toggle("active");
    prompt2.classList.toggle("active");
  } else if (prompt5.classList.contains("active")) {
    prompt5.classList.toggle("active");
    prompt2.classList.toggle("active");
  } else {
    prompt2.classList.toggle("active");
  }
});

promptTitle3.addEventListener("click", function (e) {
  if (prompt1.classList.contains("active")) {
    prompt1.classList.toggle("active");
    prompt3.classList.toggle("active");
  } else if (prompt2.classList.contains("active")) {
    prompt2.classList.toggle("active");
    prompt3.classList.toggle("active");
  } else if (prompt4.classList.contains("active")) {
    prompt4.classList.toggle("active");
    prompt3.classList.toggle("active");
  } else if (prompt5.classList.contains("active")) {
    prompt5.classList.toggle("active");
    prompt3.classList.toggle("active");
  } else {
    prompt3.classList.toggle("active");
  }
});

promptTitle4.addEventListener("click", function (e) {
  if (prompt1.classList.contains("active")) {
    prompt1.classList.toggle("active");
    prompt4.classList.toggle("active");
  } else if (prompt2.classList.contains("active")) {
    prompt2.classList.toggle("active");
    prompt4.classList.toggle("active");
  } else if (prompt3.classList.contains("active")) {
    prompt3.classList.toggle("active");
    prompt4.classList.toggle("active");
  } else if (prompt5.classList.contains("active")) {
    prompt5.classList.toggle("active");
    prompt4.classList.toggle("active");
  } else {
    prompt4.classList.toggle("active");
  }
});

promptTitle5.addEventListener("click", function (e) {
  if (prompt1.classList.contains("active")) {
    prompt1.classList.toggle("active");
    prompt5.classList.toggle("active");
  } else if (prompt2.classList.contains("active")) {
    prompt2.classList.toggle("active");
    prompt5.classList.toggle("active");
  } else if (prompt3.classList.contains("active")) {
    prompt3.classList.toggle("active");
    prompt5.classList.toggle("active");
  } else if (prompt4.classList.contains("active")) {
    prompt4.classList.toggle("active");
    prompt5.classList.toggle("active");
  } else {
    prompt5.classList.toggle("active");
  }
});
