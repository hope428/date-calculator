// Milliseconds
const today = Date.now()
const twenty_four_hrs = today + 86400000;
const seventy_two_hrs = today + 259200000;
const one_week = today + 604800000
const three_week = today + (604800000 * 3)
const ten_days = today + 864000000
const six_week = today + (604800000 * 6)
const two_month = today + (86400000 * 60)
const three_month = today + (86400000 * 92)
const four_month = today + (86400000 * 121)

// Date variables
const today_date = (new Date(today))
const twenty_four_hrs_date = (new Date(twenty_four_hrs))
const seventy_two_hrs_date = (new Date(seventy_two_hrs))
const one_week_date = (new Date(one_week))
const ten_days_date = (new Date(ten_days))
const three_week_date = (new Date(three_week))
const six_week_date = (new Date(six_week))
const two_month_date = (new Date(two_month))
const three_month_date = (new Date(three_month))
const four_month_date = (new Date(four_month))

const times = [twenty_four_hrs_date, seventy_two_hrs_date, one_week_date, ten_days_date, three_week_date, six_week_date, two_month_date, three_month_date, four_month_date]
const nums = ["1/2", "3", "4", "5", "6", "7", "8", "9", "10"]

const header = document.getElementById("today").innerText = `${today_date.getMonth() + 1}/${today_date.getDate()}`
const list = document.getElementById("dates-list")

for(let i = 0; i < times.length; i++){
    const li = document.createElement("li")
    li.textContent = `${nums[i]}: ${times[i].getMonth() + 1}/${times[i].getDate()}`
    list.appendChild(li)
}