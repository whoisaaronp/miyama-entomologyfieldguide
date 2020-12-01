(function () {
    "use strict";

    //reveal the info data on click 
    // Toggle will switch each content
    let dot0 = document.querySelector("#dot0");
    let dot1 = document.querySelector("#dot1");
    let dot2 = document.querySelector("#dot2");
    let content = document.querySelector(".right-side-space");

    // inject text into this
    function addContent1() {
        content.innerHTML = `
        <h2 style="font-size: 24px; 
        font-weight:800; margin-bottom: 15px;">Thorax</h2>
    <p style="line-height: 1.5em; margin-bottom: 10px;">
    The thorax is segmented into the two discernible parts, the prothorox and pterothorax. The pterothorax is the fused meso- and metathorax, which are commonly separated in other insect species, although flexibly articulate from the prothorax.</p><p style="line-height: 1.5em; margin-bottom: 10px;">It's shiny(middle section) and their wing cases are red chestnut brown. The thorax is attached head and has the three pairs of legs attached. All insects have 3 pairs of legs joined to the thorax. At the end of their legs, stag beetles have little hooks to help them grip on to things.
    </p>
    `
    }
    // inject text into this
    function addContent2() {
        content.innerHTML = `<h2 style="font-size: 24px; 
        font-weight:800; margin-bottom: 15px;">Mandibles</h2>
    <p style="line-height: 1.5em; margin-bottom: 10px;">
    The head of the male has enlarged jaws or mandibles. These are used for fighting with other males, for attracting a mate, and for holding the mate still during mating. The stag beetle also uses his jaws to protect himself if he feels threatened.</p>
    `
    }
    // inject text into this

    function addContent3() {
        content.innerHTML = `<h2 style="font-size: 24px; 
        font-weight:800; margin-bottom: 15px;">Wings</h2>
    <p style="line-height: 1.5em; margin-bottom: 10px;">
    The stag beetle has two pairs of wings, like all insects. The top pair, also called elytra or wing cases, is very hard and shiny. These cover a fine, veined pair underneath which look like very large fly wings. When the stag beetle flies it holds the wing cases up and unfolds the soft wings underneath. It flies upright with its large black wing cases held behind it. It is also very noisy.
    </p>
    `
    }

    dot0.addEventListener("click", addContent1);
    dot1.addEventListener("click", addContent2);
    dot2.addEventListener("click", addContent3);




})();