const {of} = rxjs;
const {map} = rxjs.operators;

(function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay();
    of(day).pipe(
        (day !== 0) ? map(() => "Weekday") : map(() => "Weekend")
    ).subscribe(value => {
        console.log(value)
    })
})();