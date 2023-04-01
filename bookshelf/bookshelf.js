{

let bookshelves = [{
   title: "Technique",
   contents:
[
{title:  "Self Sufficient Sailor",
 url:    "https://amzn.to/3J1JDyk",
 author: "Pardey and Pardey 2019",
 image:  "amzn://51G56ZlGpQL"},

{title:  "Advanced First Aid Afloat",
 url:    "https://amzn.to/3T9LjKN", 
 author: "Eastman and Levinson 2009",
 image:  "amzn://41We3uQvHnL"
},
 
{title:  "Modern Marine Weather",
 url:    "https://amzn.to/3ywCvFC",
 author: "Burch 2018",
 image:  "amzn://51PjMu3+ayL"},
 
{title:  'Storm Tactics Handbook',
 url:    "https://amzn.to/3ZTHpbc", 
 author: "Pardey and Pardey 2008",
 image:  "amzn://51Xhjyc-TpL"},
 
{title:  'Stress-Free Sailing',
 url:    'https://amzn.to/426xzVc', 
 author: 'Wells 2021',
 image:  'amzn://51ixiRLFjmL'}
]},



{ title: "Maintenance",
 contents: [
{title:  "Boatowner's Mechanical and Electrical Manual",
 author: 'Calder 2015',
 image:  'amzn://511OBa4bYnL',
 url:    'https://amzn.to/3l3fsix'},
 
{title:  'Marine Diesel Engines',
 author: 'Calder 2006',
 image:  'amzn://510qvMetq9L',
 url:    'https://amzn.to/3LfE16j'},

{title:  "Get Rid of Boat Odors",
 url:    "https://amzn.to/3T7qFuR",
 author: "Hall 2016",
 image:  "amzn://61Bp5JcvULL"},

{title:   "Fiberglass Boat Repair &amp; Maintenance",
 url:     "https://amzn.to/3K0Iojt",
 image:   "amzn://81Ws9q0Z5vL",
 author:  "(or free [PDF version](https://www.westsystem.com/wp-content/uploads/Fiberglass-Manual-2015.pdf))"}
]},



{title: "Memoir/History",
 contents: [
 {title:   "Sailing Alone Around the World",
 url:     "https://amzn.to/425xjpt",
 author:  "Slocum",
  image:   "amzn://5114A7v9ZVL"},
 
{title:   "Two Years Before the Mast",
 url:     "https://amzn.to/3ZXzWYB",
 author:  "Dana",
 image:   "amzn://51xbP60J+BL"},
 
{title:   "Kon-Tiki",
 url:     "https://amzn.to/3YDNKGU",
 author:  "Heyerdahl",
 image:   "amzn://517FLjuDvUL"},
 
{title:   "Song of the Sirens",
 url:     "https://amzn.to/3mGSHkS",
 author:  "Gann",
 image:   "amzn://41fQaVb53BL"},
 
{title:   "The Curve of Time",
 url:     "https://amzn.to/3JZW0LT",
 author:  "Blanchet",
 image:   "amzn://51vfYtU1ksL"},
 
{title:   "Maiden Voyage",
 url:     "https://amzn.to/3yxdWZa",
 author:  "Aebi and Brennan",
 image:   "amzn://41E0uEd0EwL"},
 
{title:   "Mischief series",
 url:     "https://amzn.to/3Fi2EM9",
 author:  "Tilman",
 image:   "amzn://5102+WxuCvL"},
 
{title:   "Gipsy Moth Circles the World",
 url:     "https://amzn.to/3kZZeqx",
 author:  "Chichester",
 image:   "amzn://51mwVB6eFzL"},
 
{title:   "Dove",
 url:     "https://amzn.to/425yCET",
 author:  "Graham and Gill",
 image:   "amzn://51S6kugL58L"},
 
{title:   "The Log from the Sea of Cortez",
 url:     "https://amzn.to/3ZMtTqs",
 author:  "Steinbeck",
 image:   "amzn://41F+61z7+0L"},
 
{title:   "Seraffyn's European Adventure",
 url:     "https://amzn.to/3LiRxGE",
 author:  "Pardey and Pardey",
 image:   "amzn://51-irzWlToL"},
 
{title:   "Passage to Juneau",
 url:     "https://amzn.to/3ZXBS3x",
 author:  "Raban",
 image:   "amzn://41-WutnD8tL"},
 
{title:   "The Endurance: Shackleton's Incredible Voyage",
 url:     "https://amzn.to/3J42WXY",
 author:  "Lansing",
 image:   "amzn://51nbCCBDUEL"},
 
{title:   "An Embarrassment of Mangoes",
 url:     "https://amzn.to/426R7ck",
 author:  "Vanderhoof",
 image:   "amzn://51kT60sa7hL"},
 
{title:   "The Mirror of the Sea",
 url:     "https://amzn.to/40LnknV",
 author:  "Conrad",
 image:   "amzn://51da9sx6CZL"},
 
{title:   "A Voyage for Madmen",
 url:     "https://amzn.to/3ZuU8jU",
 author:  "Nichols",
 image:   "amzn://51YDxZ8YibL"}
]}
];

let src = '';
for (shelf of bookshelves) {
    src += `\n# ${shelf.title}\n<table>`;
    let imgSrc = '';
    let txtSrc = '';
    for (let b = 0; b < shelf.contents.length; ++b) {
       let {title, author, image, url} = shelf.contents[b];
       
       image = image.replace(/amzn:\/\/(.*)/, "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/$1._SX260_.jpg");
       
       imgSrc += `<td width=33%><center><a href="${url}">![](${image} class="book")</a></center></td>`;
       txtSrc += `<td>[_${title}_](${url})<br>${author}</td>`;
    
       // Commit the row
       if (b % 3 === 2 || b === shelf.contents.length - 1) {
          src += `<tr valign=top>${imgSrc}</tr><tr valign=top>${txtSrc}</tr><tr><td><br></td></tr>`;
          txtSrc = imgSrc = '';
       }
    }
    src += '</table>';
}

document.write(src);
}
