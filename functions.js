export function getCurrentMonth() {

    const urlParams = new URLSearchParams(window.location.search);
    const month = urlParams.get('month');

    if (month) {

        return new Date(month);

    } else {
        
        return new Date();

    }

}

export function getNextMonth(date) {

    const dayOfMonth = date.getDate();
    const returnDate = new Date(date.getTime());

    returnDate.setMonth(returnDate.getMonth() + 1 + 1, 0);

    if (dayOfMonth >= returnDate.getDate()) {

        return returnDate;

    } else {
        
        returnDate.setFullYear(
            returnDate.getFullYear(),
            returnDate.getMonth(),
            dayOfMonth
        );

    }
    
    return returnDate;

}

export function getPrevMonth(date) {

    const dayOfMonth = date.getDate();
    const returnDate = new Date(date.getTime());

    returnDate.setMonth(returnDate.getMonth() + 1 - 1, 0);

    if (dayOfMonth >= returnDate.getDate()) {

        return returnDate;

    } else {
        
        returnDate.setFullYear(
            returnDate.getFullYear(),
            returnDate.getMonth(),
            dayOfMonth
        );

    }
    
    return returnDate;

}

export function formatDate(date) {

    const returnDate = new Date(date.getTime());

    return `${returnDate.getFullYear()}-${returnDate.getMonth() + 1}-${returnDate.getDate()}`;

}

export function startOfMonth(date) {
    
    const returnDate = new Date(date.getTime());

    returnDate.setDate(1);
    returnDate.setHours(0, 0, 0, 0);
 
    return returnDate;

}

export function startOfWeek(date) {


    const returnDate = new Date(date.getTime());
    const weekStartsOn = 0;
    const diff = returnDate.getDay() - weekStartsOn;

    returnDate.setDate(returnDate.getDate() - diff);
    returnDate.setHours(0, 0, 0, 0);

    return returnDate;
}

export function addDay(date) {

    const returnDate = new Date(date.getTime());

    returnDate.setDate(returnDate.getDate() + 1);

    return returnDate;
}