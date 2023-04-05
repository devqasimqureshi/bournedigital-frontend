export const dateToString = (date: Date) => {
    let newDate = date;
    let year = new Date().getFullYear();
    let month = ("0" + new Date().getMonth()).slice(-2);
    let day = ("0" + new Date().getDate()).slice(-2);
    return year + "-" + month + "-" + day
}