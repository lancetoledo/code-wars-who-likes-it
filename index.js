function likes(names) {
  // TODO
  let str1 = ' likes this';
  let str2 = ' like this';
  let count = 0;
  let length = names.length;

  //If names is empty
  if (length == 0) {
    return 'no one' + str1;
  }

  for (let i = 0; i < length; i++) {
    if (length < 2 && length > 0) {
      return names[i] + str1;
    } else if (length == 2) {
      return names[i] + ' and ' + names[i + 1] + str2;
    } else if (length == 3) {
      return names[i] + ', ' + names[i + 1] + ' and ' + names[i + 2] + str2;
    } else {
      for (let i = 0; i < length; i++) {
        count++;
        if (count == 2) {
          return (
            names[0] +
            ', ' +
            names[1] +
            ' and ' +
            (length - count) +
            ' others' +
            str2
          );
        }
      }
    }
  }
}

console.log(likes(['Peter', 'Lance', 'Alex', 'Jenny']));
