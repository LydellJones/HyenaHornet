document.addEventListener("DOMContentLoaded", function() {

    const newDiv = document.createElement('div');

    const nav = `
        <nav class="navbar-brand" style="background-color: deepskyblue !important;">
            <img src="../favicon.ico" width="50" height="50" class="d-inline-block align-top" alt="">
            <label style="font-size: 2vw; padding-top: 5px;"><strong>Vsite</strong></label>
        </nav>`;


    newDiv.innerHTML = nav;

    const base = document.getElementById("basepage");

    if (base) {
        // Get the parent node of the base element
        const parent = base.parentNode;

        // Insert the new div before the base element
        parent.insertBefore(newDiv, base);
    } else {
        console.error("Element with ID 'basepage' not found.");
    }
});
