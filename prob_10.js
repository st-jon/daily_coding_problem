// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

const jobScheduler = (fn, int) => {
    setTimeout(() => {
        fn()
    }, int)
}

const callback = () => {
    console.log('start')
}

jobScheduler(callback, 3000)