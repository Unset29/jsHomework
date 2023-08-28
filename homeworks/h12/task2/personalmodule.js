function greetUser(username) {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentDate = currentTime.toLocaleDateString();
    const currentTimeString = currentTime.toLocaleTimeString();
    const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    let greeting;

    if (currentHour < 12) {
        greeting = `Good morning, ${username}!`;
    } else if (currentHour < 18) {
        greeting = `Good afternoon, ${username}!`;
    } else {
        greeting = `Good evening, ${username}!`;
    }

    return {
        greeting,
        currentDate,
        currentTimeString,
        currentTimeZone
    };
}

module.exports = {
    greetUser
};