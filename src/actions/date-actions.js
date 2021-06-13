var moment = require('moment');

exports.getTimeStampDMY = (date, time) => {

  // var momentStamp = moment(`${date} ${time}`, 'M-DD-YYYY hh:mm a').format('x');
  var momentStamp = moment(`${date} ${time}`, 'DD-M-YYYY hh:mm a').format('x');
  return Number(momentStamp);

};

exports.getTimeStampMDY = (date, time) => {

  var momentStamp = moment(`${date} ${time}`, 'M-DD-YYYY hh:mm a').format('x');
  // var momentStamp = moment(`${date} ${time}`, 'DD-M-YYYY hh:mm a').format('x');
  return Number(momentStamp);

};

// exports.getDateString = (aDate) => {
//   var momentString = moment(aDate).format("dddd, MMM Do");
//   return momentString;
// }

exports.getDay = (aDate) => {
  var momentString = moment(aDate).format("ddd, MMM Do");
  return momentString;
}

exports.getDateTime = (aDate) => {
  var momentString = moment(aDate).format("MMM DD, h:k a");
  return momentString;
}
//
// exports.getDateTime = (aDate) => {
//   return aDate;
// }
