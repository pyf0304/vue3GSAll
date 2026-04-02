export function GetInputValue(strTxtId) {
    const txt1 = document.getElementById(strTxtId);
    if (txt1 == null) return "";
    return txt1.value;
}

export function GetSelectValue(strSelectId) {
    const sltSex = document.getElementById(strSelectId);
    const intSelectedIndex = sltSex.selectedIndex;
    const itemValue = sltSex.options[intSelectedIndex].value; 
    return itemValue;
}

export function GetSelectText(strSelectId) {
    const sltSex = document.getElementById(strSelectId);
    const intSelectedIndex = sltSex.selectedIndex;
    const itemText = sltSex.options[intSelectedIndex].text;
    return itemText;
}