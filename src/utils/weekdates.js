import moment from 'moment'
let weekArray = [];
let dayArray = [];

async function weekDates () {
    // RETURNING CURRENT WEEK OF MONDAY THROUGH SUNDAY
  for (let i = 1; i < 8; i++) {
    let dateObject = moment().day(i).format("YYYY-MM-DD");
    let dayObject = moment().day(i).format("dddd, MM-DD-YYYY");
    weekArray.push(dateObject)
    dayArray.push(dayObject)
  }
}
weekDates();

export default weekArray;
