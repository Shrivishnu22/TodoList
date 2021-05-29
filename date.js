exports.getDate = function() {
    const today = new Date();
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    return day = today.toLocaleDateString("en-IN", options);
}
exports.getDay = function() {
    const today = new Date();
    const options = {
        weekday: 'long'
    };
    return today.toLocaleDateString("en-IN", options);

}