
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
        return ((s >= 0) ? '+' : '') + s + ' s';
    case 'delta m:ss':
        return ((s >= 0) ? '+' : '-') + Math.floor(Math.abs(s) / 60) + ':' + twoDigit(Math.abs(s) % 60);
    case 'm:ss':
        return Math.floor(s / 60) + ':' + twoDigit(Math.abs(s) % 60);
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

    // Updated 2024
    handicap: {
        // Single-handed
        'US Sabot': 1540,
        'RS Tera Sport': 1445,
        'Topper 5.3': 1377,
        'Topper 6.4': 1365,
        'RS Tera Pro': 1359,
        'Hartley H10 Racer': 1350,
        'RS Zest': 1260,
        'Topaz Uno Plus': 1255,
        'Hartley H12 Racer': 1250,
        'Bombardier Invitation': 1235,
        'Force 5': 1230,
        'Sunfish': 1229,
        'ILCA 4': 1208,
        'RS Neo': 1180,
        'British Moth': 1160,
        'ILCA 6': 1147,
        'Solo': 1142,
        'Europe': 1141,
        "O'Pen Skiff": 1140,
        'RS Aero 5': 1141,
        'Byte CII': 1132,
        'OK Dinghy': 1110,
        'RS Aero 6': 1102,
        'ILCA 7': 1101,
        'RS Vareo': 1093,
        'Megabyte': 1068,
        'RS Aero 7': 1061,
        'Finn': 1049,
        'Melges 14': 1047,
        'Hadron H2': 1034,
        'Blaze': 1033,
        'D-Zero': 1029,
        'RS Aero 9': 1008,
        'Phantom': 1004,
        'RS 100 8.4': 1004,
        'RS 100 10.2': 981,
        'RS 300': 972,
        'Contender': 966,
        'Swift Solo': 900,
        'Musto Skiff': 837,
        'RS 700': 845,
        'International Moth': 570,
        'Waszp': 570,

        // Double-handed
        'Mirror': 1390,
        'RS Feva XL': 1244,
        'International FJ': 1126,
        'Enterprise': 1117,
        'International 420': 1111,
        'Laser 2000': 1107,
        'Wayfarer': 1109,
        'Snipe': 1099,
        'Laser 2': 1085,
        'Laser Vago': 1064,
        'Albacore': 1037,
        'RS 200': 1046,
        'Scorpion': 1044,
        'Tasar': 1020,
        'Merlin Rocket': 983,
        'Buccaneer 18': 978,
        'International 470': 973,
        'RS 500 XL': 966,
        'Fireball': 955,
        '29er': 895,
        '505': 896,
        'Cherub': 903,
        'B14': 853,
        'Flying Dutchman': 829,
        'VX One': 802,
        'RS 800': 799,
        'International 14': 758,
        '49er': 740,
    }
};
