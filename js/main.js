/**
 * @author Ethan Ummel
 * @since 2022.09.13
 */

'use strict';
const listeBackground = document.getElementById('background');
listeBackground.addEventListener('change', function() {
    let img = './img/backgrounds/' + listeBackground.value;
    document.body.style.backgroundImage = `url(${img})`;
});
