const dateTime = document.getElementById("dateTime")
const date = document.getElementById("date")
const time = document.getElementById("time")

setInterval(updateTime, 1000)

function updateTime() {
  dateTime.innerHTML = new Date()
}

function displayDateTime() {
  let newDate = new Date()

  let day = newDate.getDay()
  // let month = newDate.toLocaleString("default", { month: "long" })
  let month = newDate.getMonth()
  let year = newDate.getFullYear()

  let hour = newDate.getHours()
  let min = newDate.getMinutes()
  let sec = newDate.getSeconds()

  date.innerHTML = `${day}/${month + 1}/${year}`
  time.innerHTML = `${hour}:${min}:${sec}`
}
setInterval(displayDateTime, 1000)
