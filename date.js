exports.getDate = function() {
  const today = new Date();
  const options = {
    weekday: "long", //short
    day: "numeric",
    month: "long",
  }; //JavaScript Object
  return today.toLocaleString("en-US", options);
}

exports.getTime = function() {
  const today = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }; //JavaScript Object
  return today.toLocaleString("en-US", options);

}
