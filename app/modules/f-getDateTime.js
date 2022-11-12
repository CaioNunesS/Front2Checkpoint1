// function to get date and time in format: yyyy-mm-dd hh:mm:ss:ms
const getDateTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // month is zero based
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    // force 2 digits for month, day, hour, minutes, seconds and 3 digitis for milliseconds using padStart method on string object // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
    return year + '-' + 
    month.toString().padStart(2, '0') + '-' + 
    day.toString().padStart(2, '0') + ' ' + 
    hour.toString().padStart(2, '0') + ':' + 
    minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + ':' + milliseconds.toString().padStart(3, '0');
    }

// console.log(getDateTime());

// export default getDateTime;
export default getDateTime();