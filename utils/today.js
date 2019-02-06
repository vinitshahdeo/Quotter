module.exports.getDay = function(){
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      const d = new Date();
      const dayName = days[d.getDay()];
      return dayName;
    };