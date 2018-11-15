// every polyfill
Array.prototype.every = function (callback) {
  let ret = true;
  const __self = this;
  for(let k = 0; k < __self.length; k++) {
		if(!callback(__self[k])) {
			ret = false;
			break;
		}
  }
  return ret;
}

// some polyfill
Array.prototype.some = function (callback) {
  let ret = false;
  const __self = this;
  for(let k = 0; k < __self.length; k++) {
		if(!!callback(__self[k])) {
			ret = true;
			break;
		}
  }
  return ret;
}

// map polyfill
Array.prototype.map = function (callback) {
  const newArray = [];
  const __self = this;
  for(let k = 0; k < __self.length; k++) {
    newArray.push(
        callback(__self[k])
    )
  }
  return newArray;
}

// filter polyfill
Array.prototype.filter = function (callback) {
	const newArray = [];
	const __self = this;
	for(let k = 0; k < __self.length; k++) {
		!!callback(__self[k]) && (newArray.push(__self[k]))
	}
	return newArray;
}

// forEach polyfill
Array.prototype.forEach = function (callback) {
  const __self = this;
  for(let k = 0; k < __self.length; k++) {
		__self[k] = callback(__self[k])
  }
}
