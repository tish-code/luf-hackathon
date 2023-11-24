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
  console.log(e.target);
  if (e.target === e.currentTarget) {
    if (alertModal.style.display === "block") {
      alertModal.style.display = "none";
      // notificationIcon.style.background = "#303030";
    }
  }
});

userModal.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target === e.currentTarget) {
    if (userModal.style.display === "block") {
      userModal.style.display = "none";
    }
  }
});
