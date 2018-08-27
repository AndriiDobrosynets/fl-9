function findType(data) {
  return typeof data;
}

function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

function map(arr, func) {
  let result = [];
  forEach(arr, function (el) {
    return result.push(func(el));
  })
  return result;
}

function filter(arr, func) {
  let filteredArray = [];
  forEach(arr, function (el) {
    if (func(el)) {
      filteredArray.push(el);
    }
  })
  return filteredArray;
}

function getAdultAppleLovers(data) {
  return map(filter(data, function (el) {
    return el.favoriteFruit === 'apple' && el.age > 18;
  }), function (el) {
    return el.name;
  })
}

function keys(obj) {
  let keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}


function values(obj) {
  let values = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}

function showFormattedDate(date) {
  const MONTHS = {
    0: {
      shortName: 'Jan'
    },
    1: {
      shortName: 'Feb'
    },
    2: {
      shortName: 'Mar'
    },
    3: {
      shortName: 'Apr'
    },
    4: {
      shortName: 'May'
    },
    5: {
      shortName: 'Jun'
    },
    6: {
      shortName: 'Jul'
    },
    7: {
      shortName: 'Aug'
    },
    8: {
      shortName: 'Sep'
    },
    9: {
      shortName: 'Oct'
    },
    10: {
      shortName: 'Now'
    },
    11: {
      shortName: 'Dec'
    }
  }
  return `It is ${date.getDate()} of ${MONTHS[date.getMonth()].shortName}, ${date.getFullYear()}`;
}