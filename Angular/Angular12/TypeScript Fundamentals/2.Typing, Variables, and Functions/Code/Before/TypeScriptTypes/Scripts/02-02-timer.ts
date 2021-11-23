// namespace is the preferred keyword over module
namespace demo_02_02 {
    var
        // Basics properties
        timerId: number = -1,
        interval: number = 25,
        ms: number = 0,
        seconds: number = 0,
        minutes: number = 0,

        // Kick the timer off with an interval
        startTimer = function () {
            if (timerId === -1) {
                timerId = window.setInterval('demo_02_02.turnTimerOn()', interval);
            }
        },

        // Update the screen with the timer data
        displayTimer = function () {
            document.getElementById('milliseconds').innerHTML = ms.toString();
            document.getElementById('seconds').innerHTML = seconds.toString();
            document.getElementById('minutes').innerHTML = minutes.toString();
        },

        // Pause the timer
        pauseTimer = function () {
            window.clearInterval(timerId);
            timerId = -1;
        },

        // Reset the timer to 0
        clearTimer = function () {
            pauseTimer();
            ms = 0;
            seconds = 0;
            minutes = 0;
            displayTimer();
        },

        // Bootstrap everything
        init: (s: string, p: string, c: string) => void
            = function (startButton, pauseButton, clearButton) {
                document.getElementById(startButton).
                    addEventListener("click", startTimer, false);
                document.getElementById(pauseButton).
                    addEventListener("click", pauseTimer, false);
                document.getElementById(clearButton).
                    addEventListener("click", clearTimer, false);
                displayTimer();
            };

            // Start counting
        export function turnTimerOn () {
            ms += interval;
            if (ms >= 1000) {
                ms = 0;
                seconds += 1;
            }
            if (seconds >= 60) {
                ms = 0;
                seconds = 0;
                minutes += 1;
            }
            displayTimer();
        };


    window.onload = function () {
        init('startButton', 'pauseButton', 'clearButton');
    };
}