import { useState } from "react";

const useCheckboxes = (checkBoxList) => {
    const [ checkboxes, setCheckboxes ] = useState(checkBoxList)

    function setCheckbox(index, checked) {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index].checked = checked
        setCheckboxes(newCheckboxes)
    }

    return [
        checkboxes,
        setCheckbox
    ]
};

export default useCheckboxes;