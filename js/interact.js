(function () {
    "use strict";

    //reveal the info data on click 
    // Toggle will switch each content
    let dot0 = document.querySelector("#dot0");
    let dot1 = document.querySelector("#dot1");
    let dot2 = document.querySelector("#dot2");
    let content = document.querySelector(".right-side-space");

    function addContent1() {
        content.innerHTML = `
    <p>The head, having mouthparts projecting forward or sometimes downturned, is usually heavily
    sclerotized and is sometimes very large. The eyes are compound and may display remarkable adaptability..</p>
    `
    }

    function addContent2() {
        content.innerHTML = `
    <p>The forewings of beetles are not used for flight, but form elytra which cover the hind part of the body and protect the hindwings. The elytra are usually hard shell-like structures which must be raised to allow the hind wings to move for flight.</p>
    `
    }

    function addContent3() {
        content.innerHTML = `
    <p>The thorax is segmented into the two discernible parts, the pro- and pterothorax. The pterothorax is the fused meso- and metathorax, which are commonly separated in other insect species, although flexibly articulate from the prothorax.</p>
    `
    }

    dot0.addEventListener("click", addContent1);
    dot1.addEventListener("click", addContent2);
    dot2.addEventListener("click", addContent3);




})();