"use strict";

document.write(`<style>
.scroller {
   color: #666;
}
.scroller .button, .scroller .dot {
  font-size: 200%;
  font-weight: 900;
  cursor: pointer;
  user-select: none;
}

.scroller span.dot {
  padding-left: 5px;
  padding-right: 5px;
}
</style>`);


const scrollerTable = [];

function scrollerCallback(scrollerIndex, delta, absolute) {
    const scroller = scrollerTable[scrollerIndex];

    const oldDot = document.getElementById('scroller' + scrollerIndex + 'Dot' + scroller.currentIndex);
    if (absolute !== undefined) {
        scroller.currentIndex = absolute;
    } else {
        scroller.currentIndex = (scroller.currentIndex + delta + scroller.N) % scroller.N;
    }
    const newDot = document.getElementById('scroller' + scrollerIndex + 'Dot' + scroller.currentIndex);

    const img = document.getElementById('scroller' + scrollerIndex);
    img.src = scroller.filenamePattern.replace(/#/, '' + (scroller.i0 + scroller.currentIndex));

    oldDot.innerHTML = '○';
    newDot.innerHTML = '●';
}


function makeScroller(filenamePattern, i0, N) {
    const scrollerIndex = scrollerTable.length;
    
    scrollerTable.push({
        currentIndex: 0,
        i0: i0,
        N: N,
        filenamePattern: filenamePattern
    });

    const filename = filenamePattern.replace(/#/, '' + i0);

    let dots = '';
    for (let i = 0; i < N; ++i) {
        dots += `<span class="dot" id="scroller${scrollerIndex}Dot${i}" onclick="scrollerCallback(${scrollerIndex}, undefined, ${i})">${i == 0 ? '●' : '○'}</span>`;
    }
    
    document.write(`<table class="scroller">
<tr><td><div class="button" onclick="scrollerCallback(${scrollerIndex}, -1)">&lt;</div></td>
<td><img id="scroller${scrollerIndex}" src="${filename}"</td>
<td><div class="button" onclick="scrollerCallback(${scrollerIndex}, +1)">&gt;</div></td></tr>
<tr><td></td><td style="text-align:center;">${dots}</td><td></td></tr>
</table>`);
}
