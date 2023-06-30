
const secondsPerMinute = 60;
const minutesPerHour = 60;
const secondsPerHour = minutesPerHour * secondsPerMinute;

// Converts an integer into a two digit decimal string with leading zeros
function twoDigit(x) {
    return (x < 10 ? '0' : '') + x;
}

function formatTime(s, fmt) {
    s = Math.round(s);
    switch (fmt) {
    case 'delta s':
        return ((s >= 0) ? '+' : '-') + s + ' s';
    case 'delta m:ss':
        return ((s >= 0) ? '+' : '-') + Math.floor(s / 60) + ':' + twoDigit(s % 60);
    case 'h:mm:ss':
        {
            let m = Math.floor(s / secondsPerMinute);
            s = s % secondsPerMinute;
            let h = Math.floor(m / minutesPerHour);
            m = m % minutesPerHour;
            return `${h}:${twoDigit(m)}:${twoDigit(s)}`;
        } 
    default:
        return '' + s;
    }
}


const Portsmouth = {
    correctedTime: function correctedTime(ET, PN) {
        return ET * 1000 / PN;
    },

    pursuitOffset: function pursuitOffset(PN, ET_Z, PN_Z) {
        return ET_Z * (1 - PN / PN_Z);
    },

    // Updated 2023
    handicap: {
        'RS Zest': 1260,
        'I420': 1111,
        'ILCA 7': 1101,
        'Wayfarer': 1101,
        'Laser Vago': 1064,
        'RS Aero 9': 1010,
        '29er': 922,
        'RS 800': 799
    }
};
