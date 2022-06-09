import moment from 'moment'
let weekArray = [];
let dayArray = [];

async function weekDates () {
    // RETURNING CURRENT WEEK OF MONDAY THROUGH SUNDAY
  for (let i = 1; i < 8; i++) {
    let dateObject = moment().day(i).format("YYYY-MM-DD");
    weekArray.push(dateObject)
  }
}
weekDates();

export default weekArray;
