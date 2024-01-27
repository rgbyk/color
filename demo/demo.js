// --------------------------------
// isMobile()
// --------------------------------

let isMobile = false;

if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

// --------------------------------
// setAttributes([], [])
// --------------------------------

function setAttributes(el, attrs) {
    for(const key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

// --------------------------------
// ready({ ... });
// --------------------------------

const ready = callback => {
    if (document.readyState !== "loading") {
        callback();
    } else {
        document.addEventListener("DOMContentLoaded", callback);
    }
};

// ==========================================
// ! Change Color Blindness
// ==========================================

// function onChangeColorBlindness() {
//     let str = "";
//     const select = document.getElementById("demo-color-cvd");
//     const option = select.options[select.selectedIndex];

//     document.querySelectorAll(".cvd").forEach(({
//         style
//     }) => {
//         if ( style.filter != "None" ){
//             style.filter = `url('.#${option.value}') grayscale(0)`;
//         }
//     });
// }

// ready(() => {
//     onChangeColorBlindness();
// });

//
// Scheme Menus
//
// document.querySelectorAll("[aria-controls]").forEach(e => {
//   e.addEventListener("click", () => {

//     let ariaPressed = e.getAttribute("aria-pressed");
//     const ariaControls = e.getAttribute("aria-controls");
//     const ariaTarget = document.getElementById(ariaControls);
//     const buttons = e.parentNode.querySelectorAll("[aria-controls]");

//     [].forEach.call(buttons, (button) => {
//       button.setAttribute("aria-pressed", false);
//         const buttonControls = button.getAttribute("aria-controls");
//         const buttonTarget = document.getElementById(buttonControls);
//         buttonTarget.setAttribute("aria-hidden", true);
//     });

//     switch (ariaPressed) {
//       case "true":
//         e.setAttribute("aria-pressed", false);
//         ariaTarget.setAttribute("aria-hidden", true);
//         break;
//       case "false":

//         e.setAttribute("aria-pressed", true);
//         ariaTarget.setAttribute("aria-hidden", false);
//         break;
//     }

//   });
// });

// --------------------------------
// rgb2hex()
// --------------------------------

function rgb2hex(rgb) {
    rgb = rgb.match(
        /^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
    );
    return rgb && rgb.length === 4 ?
        `#${(`0${parseInt(rgb[1], 10).toString(16)}`).slice(-2)}${(`0${parseInt(rgb[2], 10).toString(16)}`).slice(-2)}${(`0${parseInt(rgb[3], 10).toString(16)}`).slice(-2)}` :
        "";
}

// --------------------------------
// generateSchemeRow()
// --------------------------------
function generateSchemeRowHtml() {
    const schemeRow = document.querySelectorAll(".scheme-row--js");
    const schemeRowDepth = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

    [].forEach.call(schemeRow, row => {
        const schemeRowType = row.getAttribute("data-scheme-type");
        const schemeRowName = row.getAttribute("data-scheme-name");
        const schemeModel = row.getAttribute("data-scheme-model");

        const schemeTypeAlpha = schemeRowType === "alpha";
        const schemeTypeNeutral = schemeRowType === "neutral";

        [].forEach.call(schemeRowDepth, depth => {
            const schemeColorType = getSchemeColorType(schemeTypeAlpha, schemeModel, schemeTypeNeutral, schemeRowName, depth);
            row.innerHTML += createListItem(schemeColorType, depth);
        });
    });
}

function getSchemeColorType(schemeTypeAlpha, schemeModel, schemeTypeNeutral, schemeRowName, depth) {
if (['primary', 'slate', 'stone', 'grey'].includes(schemeRowName)) {

        if (schemeTypeAlpha) {
            return `${schemeRowName}-${depth}-alpha`;
        } else if (schemeTypeNeutral) {
            return `${schemeRowName}-${depth}-neutral`;
        }

        return `${schemeRowName}-${depth}`;        
    }
    if (schemeTypeAlpha) {
        return `${schemeRowName}-${schemeModel}-${depth}-alpha`;
    } else if (schemeTypeNeutral) {
        return `${schemeRowName}-${schemeModel}-${depth}-neutral`;
    }
    return `${schemeRowName}-${schemeModel}-${depth}`;
}

function createListItem(schemeColorType, depth) {
    return `<li style="background-image: linear-gradient(-35deg, rgba(var(--${schemeColorType}-alpha), 0.4) 20%, rgba(var(--${schemeColorType}-alpha), 0.6));">
                <figure class="scheme-row--figure" data-cs-num="${depth}" data-cs-hex data-cs-rgb data-cs-var="${schemeColorType}">
                    <button class="reset-button scheme-color--preview" data-clipboard-text style="background-color: var(--${schemeColorType})"></button>
                    <figcaption class="scheme-color--meta">
                        <div class="scheme-color--num"><span>${depth}</span></div>
                        <div class="scheme-color--hex"></div>
                        <div class="scheme-color--rgb"></div>
                        <div class="scheme-color--rgba"></div>
                        <div class="scheme-color--var"></div>
                    </figcaption>
                </figure>
            </li>`;
}

function sampleAndSetAttributes() {
    const schemeRow = document.querySelectorAll(".scheme-row--js");

    [].forEach.call(schemeRow, row => {
        const schemeTypeAlpha = row.getAttribute("data-scheme-type") === "alpha";
        const schemeRowColor = row.querySelectorAll(".scheme-row--figure");

        [].forEach.call(schemeRowColor, color => {
            setSchemeAttributes(color, schemeTypeAlpha);
        });
    });
}

function setSchemeAttributes(color, schemeTypeAlpha) {
    let schemeColorPreview = color.querySelector(".scheme-color--preview");
    let schemeColor = schemeColorPreview.parentNode;

    let getSchemeColorVariable = schemeColor.getAttribute("data-cs-var");
    let getSchemeColorRgb = window.getComputedStyle(schemeColorPreview, null).getPropertyValue("background-color");

    schemeColor.querySelector(".scheme-color--var").innerHTML = `<span>--${getSchemeColorVariable}</span>`;

    if (schemeTypeAlpha) {
        handleAlphaType(schemeColor, schemeColorPreview, getSchemeColorRgb);
    } else {
        handleNonAlphaType(schemeColor, schemeColorPreview, getSchemeColorRgb);
    }
}

function handleAlphaType(schemeColor, schemeColorPreview, getSchemeColorRgb) {
    setAttributes(schemeColor, { 'data-cs-rgba': getSchemeColorRgb });
    schemeColor.querySelector(".scheme-color--rgba").innerHTML = `<span>${getSchemeColorRgb}</span>`;
    schemeColor.querySelector(".scheme-color--hex").remove();
    schemeColor.querySelector(".scheme-color--rgb").remove();
    schemeColor.removeAttribute("data-cs-hex");
    schemeColor.removeAttribute("data-cs-rgb");
}

function handleNonAlphaType(schemeColor, schemeColorPreview, getSchemeColorRgb) {
    let colorhex = rgb2hex(getSchemeColorRgb);
    setAttributes(schemeColor, {
        'data-cs-hex': colorhex,
        'data-cs-rgb': getSchemeColorRgb
    });
    setAttributes(schemeColorPreview, {
        'data-clipboard-text': colorhex,
    });

    let rgbString = getSchemeColorRgb.substring(4, getSchemeColorRgb.length - 1).replace(/ /g, '').split(', ');
    schemeColor.querySelector(".scheme-color--rgb").innerHTML = `<span>${rgbString}</span>`;
    schemeColor.querySelector(".scheme-color--hex").innerHTML = `<span>${colorhex}</span>`;
}


// --------------------------------
// Generate Unique IDs
// --------------------------------

function makeSchemeIds(){
     const __SCHEME_ROW = document.querySelectorAll(".scheme-row");
     i = 1;

     [].forEach.call(__SCHEME_ROW, __ROW => {
        const b = __ROW.getAttribute("data-scheme-name");
        const c = b.split(' ');
        const d = c[0].substr(0, 5).replace('#','').replace('-','');

        __ROW.setAttribute("id", d + i++);

        const e = __ROW.getAttribute("id");
     });
}

// --------------------------------
// getScheme
// --------------------------------

function getScheme() {
    let cs_value_rgb = window.getComputedStyle(e).getPropertyValue("background-color");
    let cs_value_hex = rgb2hex(cs_value_rgb);   
}

// --------------------------------
// colorSpectrumTable()
// --------------------------------

function colorSpectrumTable() {
    let selector = document.querySelector("#spectrum-options");
    let selected = selector.options[selector.selectedIndex];

    // t g(selected.value);

    let type = selected.value;

    document.querySelectorAll("[data-color]").forEach((e) => {
        let cs_value_rgb = window.getComputedStyle(e).getPropertyValue("background-color");
        let cs_value_hex = rgb2hex(cs_value_rgb);

        if ( type == 'hex' ) {
            e.innerHTML = cs_value_hex;
        }

        if ( type == 'rgb' ) {
            e.innerHTML = cs_value_rgb;
        }

        if ( type == 'pos' ) { }

    });
}

// --------------------------------
// --------------------------------
function monitorNeutralizeSelector() {
    const neutralizeSelector = document.querySelector('#selectNeutralize');

    neutralizeSelector.addEventListener('change', () => {
        const selectedOption = neutralizeSelector.value;

        const pureSchemeRows = document.querySelectorAll('.scheme-row--js[data-scheme-type="pure"]');
        const neutralSchemeRows = document.querySelectorAll('.scheme-row--js[data-scheme-type="neutral"]');

        // Determine display style based on selected option
        let displayPure = selectedOption === 'all' || selectedOption === 'false';
        let displayNeutral = selectedOption === 'all' || selectedOption === 'true';

        pureSchemeRows.forEach(row => {
            row.style.display = displayPure ? 'grid' : 'none';
            row.setAttribute('aria-hidden', !displayPure);
        });

        neutralSchemeRows.forEach(row => {
            row.style.display = displayNeutral ? 'grid' : 'none';
            row.setAttribute('aria-hidden', !displayNeutral);
        });

        sampleAndSetAttributes();
    });
}


function monitorModelSelector() {
    const modelSelector = document.querySelector('#modelSelector');

    modelSelector.addEventListener('change', () => {
        const selectedModel = modelSelector.value;

        const rgbRows = document.querySelectorAll('.scheme-row--js[data-scheme-model="rgb"]');
        const rybRows = document.querySelectorAll('.scheme-row--js[data-scheme-model="ryb"]');

        // Determine display style based on selected model
        let displayRgb = selectedModel === 'all' || selectedModel === 'rgb';
        let displayRyb = selectedModel === 'all' || selectedModel === 'ryb';

        rgbRows.forEach(row => {
            row.style.display = displayRgb ? 'grid' : 'none';
            row.setAttribute('aria-hidden', !displayRgb);
        });

        rybRows.forEach(row => {
            row.style.display = displayRyb ? 'grid' : 'none';
            row.setAttribute('aria-hidden', !displayRyb);
        });

        sampleAndSetAttributes();
    });
}


function initializeColorSchemeSelection() {
    const selectHarmony = document.querySelector('#selectHarmony');

    function updateStylesheet() {
        const harmonyEnabled = selectHarmony.value === 'true';

        const stylesheetId = harmonyEnabled ? 'stylesheetHarmonized' : 'stylesheet';

        document.getElementById('stylesheet').disabled = harmonyEnabled;
        document.getElementById('stylesheetHarmonized').disabled = !harmonyEnabled;
        sampleAndSetAttributes();
    }

    updateStylesheet();

    selectHarmony.addEventListener('change', updateStylesheet);
}



// --------------------------------
// --------------------------------
document.addEventListener('DOMContentLoaded', initializeColorSchemeSelection);
document.addEventListener('DOMContentLoaded', function() {
    generateSchemeRowHtml();
    initializeColorSchemeSelection();
    monitorNeutralizeSelector();
    monitorModelSelector();
});


// --------------------------------
// getColorPosition()
// --------------------------------

// function getColorPosition() { 
//     const csSelector = document.getElementById("cs-options");
//     let csSelected = csSelector.options[csSelector.selectedIndex];
//     const csScheme = document.querySelector(`[data-scheme-name=${csSelected.value}]`);

//     const csScheme_50 = csScheme.querySelectorAll(".scheme-color")[0].querySelector(".scheme-color--preview");
//     const csScheme_100 = csScheme.querySelectorAll(".scheme-color")[1];
//     const csScheme_200 = csScheme.querySelectorAll(".scheme-color")[2];
//     const csScheme_300 = csScheme.querySelectorAll(".scheme-color")[3];
//     const csScheme_400 = csScheme.querySelectorAll(".scheme-color")[4];
//     const csScheme_500 = csScheme.querySelectorAll(".scheme-color")[5];
//     const csScheme_600 = csScheme.querySelectorAll(".scheme-color")[6];
//     const csScheme_700 = csScheme.querySelectorAll(".scheme-color")[7];
//     const csScheme_800 = csScheme.querySelectorAll(".scheme-color")[8];
//     const csScheme_900 = csScheme.querySelectorAll(".scheme-color")[9];

//     const hex_50 = window.getComputedStyle(csScheme_50).getPropertyValue("background-color");
// }

// --------------------------------
// getColorSelected()
// --------------------------------

// function getColorSelected(e) {
//     const selector = e;
//     let selected = selector.options[selector.selectedIndex];
//     const options = Array.from(selector.options).map(({value}) => value);

//     document.querySelectorAll(".demo-colorspectrum-table").forEach(({classList}) => {
//         classList.remove(...options);
//         classList.add(selected.value);
//     });

//     if ( e.id == 'cs-options' ) {
//         document.querySelectorAll("td[data-color]").forEach((e) => {
//             e.setAttribute("data-color", selected.value);
//         });

//         colorSpectrumTable();
//     }
// }

// --------------------------------
// ready function
// --------------------------------

// ready(() => {
//     getColorSelected("primary");
// });