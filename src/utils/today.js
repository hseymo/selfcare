import moment from 'moment';
let utilToday;
async function currentDay () {
    return utilToday = moment().format('YYYY-MM-DD');
}
currentDay();

export default utilToday;