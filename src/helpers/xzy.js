export const buildXZY = () => {
    return {
        browserVersion: ((navigator.userAgent.match(/(Chrome|Firefox|Safari|Edge)/) || ['N/A'])[0].split(' ')[0] || 'N/A'),
        deviceType: (navigator.userAgent.match(/(iPhone|iPad|Android|Windows Phone|BlackBerry|Chrome OS)/) || ['N/A'])[0],
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
        date: new Date(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'N/A',
        language: navigator.language || 'N/A',
        browser: navigator.userAgent || 'N/A',
    };
};

//checkout
export const clearBuyerData = (setBuyerData) => {
    setBuyerData((prevBuyerData) => ({
        ...prevBuyerData,
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
    }));
};
//checkout
export const validateBuyerData = (buyerData, items) => {
    return (
        items.length > 0 &&
        buyerData.firstName &&
        buyerData.lastName &&
        buyerData.email &&
        buyerData.confirmEmail &&
        buyerData.email === buyerData.confirmEmail &&
        buyerData.email.includes("@")
    );
};

//footer
export const scrollToTop = (window) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


//order
export function getCurrentDateTimeObject() {
    const currentDateTime = new Date();
    const formattedDateTime = `${currentDateTime.toLocaleDateString()}, ${currentDateTime.toLocaleTimeString()}`;

    const dateTimeObject = {
        date: currentDateTime.toLocaleDateString(),
        time: currentDateTime.toLocaleTimeString(),
        formatted: formattedDateTime,
    };

    return dateTimeObject;
}