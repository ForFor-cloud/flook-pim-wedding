const ENDPOINT =
"https://script.google.com/macros/s/AKfycbzztbWsxecjf72YIKhc48XUQsEmJPwxDxoQXzTre8nHRkAJ9wG0ZISlbMFvFSqIKNZl/exec";

document
.getElementById("rsvpForm")
.addEventListener("submit", async (e) => {

  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    guests: document.getElementById("guests").value,
    food: document.getElementById("food").value
  };

  try {

    await fetch(
      ENDPOINT,
      {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
      }
    );

    alert(
"ขอบคุณสำหรับการตอบรับ ❤️\nแล้วพบกันในวันสำคัญของเรานะครับ"
);

    document
      .getElementById("rsvpForm")
      .reset();

  } catch (error) {

    console.error(error);

    alert(
      "ส่งข้อมูลไม่สำเร็จ"
    );

  }

});