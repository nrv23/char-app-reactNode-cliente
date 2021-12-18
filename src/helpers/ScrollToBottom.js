

import { animateScroll } from 'react-scroll';

export const scrollToBottom = id => { //id del eleento html al que se le quiere hacer el scroll

    animateScroll.scrollToBottom({
        containerId: id,
        duration: 0
    })
}


export const scrollToBottomAnimated = id => { //id del eleento html al que se le quiere hacer el scroll

    animateScroll.scrollToBottom({
        containerId: id,
        duration: 250
    })
}