// let TimerDefault = new Timer('.Timer-default', [new Date(), new Date(2017, 0, 1, 0, 0, 0, 0)]);
// Timer.start(TimerDefault);
//
// // переделать входные параметры класса на объект
let ti1, ti2;
window.onload = function () {
    ti1 = new Timer({
        el: document.querySelector('.timer1'),
        type: '111',
        showUnits: true,
        shedule: [Date.now()+3000, Date.now()+6000]
    });
    ti2 = new Timer({
        el: document.querySelector('.timer2'),
        type: '111',
        showUnits: false,
        shedule: [Date.now(), Date.parse(new Date(2018, 0, 1, 0, 0, 0, 0))]
    });
}
