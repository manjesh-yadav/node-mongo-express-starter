const { DateTime } = require('luxon');

const capitalizeFirstLetter = (string) => {
    if (typeof (string) == 'string') {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
        return ''
    }
}

const replaceArray = (replaceString, find, replace) => {
    let regex;
    for (let i = 0; i < find.length; i++) {
        regex = new RegExp(find[i], "g");
        replaceString = replaceString.replace(regex, replace[i]);
    }
    return replaceString;
};

const nowMysqlFormate = () => {
    return DateTime.utc().toFormat('yyyy-MM-dd HH:mm:ss');
}


module.exports = {
    capitalizeFirstLetter,
    replaceArray,
    nowMysqlFormate
};
