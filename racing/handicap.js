
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

    // Updated 2025 from https://assetbank-eu-west-1.s3.eu-west-1.amazonaws.com/rya-assets_87113cb4549df15cff38e2cd071931c5/457/PY_List_2025_V3.pdf?response-content-disposition=inline%3B%20filename%3D%22457%2FPY_List_2025_V3.pdf%22%3B%20filename%2A%3DUTF-8%27%27457%252FPY%255FList%255F2025%255FV3%252Epdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250306T142442Z&X-Amz-SignedHeaders=host&X-Amz-Credential=AKIATJ7XNAYVAWNFIK7R%2F20250306%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Expires=604800&X-Amz-Signature=65cccc1ad8d9df69c1592a1cd94b2d89f5d9e1dfb66aecd546e38decf08f68d3
    // and https://assetbank-eu-west-1.s3.eu-west-1.amazonaws.com/rya-assets_87113cb4549df15cff38e2cd071931c5/943/Limited_data_PN_List_2025.pdf?response-content-disposition=inline%3B%20filename%3D%22943%2FLimited_data_PN_List_2025.pdf%22%3B%20filename%2A%3DUTF-8%27%27943%252FLimited%255Fdata%255FPN%255FList%255F2025%252Epdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250306T143530Z&X-Amz-SignedHeaders=host&X-Amz-Credential=AKIATJ7XNAYVAWNFIK7R%2F20250306%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Expires=604800&X-Amz-Signature=250d0a23f2474cc4be7dd34a374ccca221c911355dee8a1aa874925c6f34dd6a
    handicap: {
        // Single-handed
        'US Sabot': 1540,
        'RS Tera Sport': 1445,
        'Topper 4.2': 1440,
        'Topper 6.4': 1363,
        'RS Tera Pro': 1370,
        'Hartley H10 Racer': 1350,
        'RS Zest': 1260,
        'Topaz Uno Plus': 1255,
        'Hartley H12 Racer': 1250,
        'Bombardier Invitation': 1235,
        'Optimist': 1631,
        'Force 5': 1230,
        'Sunfish': 1229,
        'ILCA 4': 1216,
        'RS Neo': 1180,
        'Illusion': 1294,
        'British Moth': 1165,
        'ILCA 6': 1154,
        'Solo': 1136,
        'Europe': 1140,
        "O'Pen Skiff": 1140,
        'RS Aero 5': 1139,
        'Byte CII': 1129,
        'OK Dinghy': 1095,
        'RS Aero 6': 1099,
        'ILCA 7': 1104,
        'RS Vareo': 1095,
        'Megabyte': 1060,
        'RS Aero 7': 1063,
        'Finn': 1049,
        'Melges 14': 1047,
        'Hadron H2': 1045,
        'Blaze': 1030,
        'D-Zero': 1029,
        'RS Aero 9': 1005,
        'Phantom': 998,
        'RS 100 8.4': 1001,
        'RS 100 10.2': 981,
        'RS 300': 965,
        'Contender': 969,
        'Swift Solo': 900,
        'Musto Skiff': 834,
        'RS 700': 845,
        'International Moth': 570,
        'Waszp': 570,

        // Double-handed
        'Mirror': 1368,
        'RS Feva XL': 1244,
        'International FJ': 1126,
        'Enterprise': 1137,
        'International 420': 1110,
        'Laser 2000': 1121,
        'Wayfarer': 1109,
        'Snipe': 1110,
        'Laser 2': 1100,
        'Laser Vago': 1071,
        'Albacore': 1037,
        'RS 200': 1050,
        'Scorpion': 1042,
        'Tasar': 1019,
        'Merlin Rocket': 983,
        'Buccaneer 18': 978,
        'International 470': 973,
        'RS 500 XL': 963,
        'Fireball': 959,
        '29er': 900,
        '505': 896,
        'Cherub': 903,
        'B14': 858,
        'Flying Dutchman': 879,
        'VX One': 802,
        'RS 800': 799,
        'International 14': 758,
        '49er': 740,
    }
};
