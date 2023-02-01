import { useEffect } from "react";
export default function Timer() {

  //present time 
  // targetDate.setHours(targetDate.getHours() + 22); 
  let targetDate = new Date();

  function getTimeSegmentElements(segmentElement) {
    const segmentDisplay = segmentElement.querySelector(
      '.segment-display'
    );
    const segmentDisplayTop = segmentDisplay.querySelector(
      '.segment-display__top'
    );
    const segmentDisplayBottom = segmentDisplay.querySelector(
      '.segment-display__bottom'
    );

    const segmentOverlay = segmentDisplay.querySelector(
      '.segment-overlay'
    );
    const segmentOverlayTop = segmentOverlay.querySelector(
      '.segment-overlay__top'
    );
    const segmentOverlayBottom = segmentOverlay.querySelector(
      '.segment-overlay__bottom'
    );

    return {
      segmentDisplayTop,
      segmentDisplayBottom,
      segmentOverlay,
      segmentOverlayTop,
      segmentOverlayBottom,
    };
  }

  function updateSegmentValues(
    displayElement,
    overlayElement,
    value
  ) {
    displayElement.textContent = value;
    overlayElement.textContent = value;
  }

  function updateTimeSegment(segmentElement, timeValue) {
    const segmentElements =
      getTimeSegmentElements(segmentElement);

    if (
      parseInt(
        segmentElements.segmentDisplayTop.textContent,
        10
      ) === timeValue
    ) {
      return;
    }

    segmentElements.segmentOverlay.classList.add('flip');

    updateSegmentValues(
      segmentElements.segmentDisplayTop,
      segmentElements.segmentOverlayBottom,
      timeValue
    );

    function finishAnimation() {
      segmentElements.segmentOverlay.classList.remove('flip');
      updateSegmentValues(
        segmentElements.segmentDisplayBottom,
        segmentElements.segmentOverlayTop,
        timeValue
      );

      this.removeEventListener(
        'animationend',
        finishAnimation
      );
    }

    segmentElements.segmentOverlay.addEventListener(
      'animationend',
      finishAnimation
    );
  }

  function updateTimeSection(sectionID, timeValue) {
    const firstNumber = Math.floor(timeValue / 10) || 0;
    const secondNumber = timeValue % 10 || 0;
    const sectionElement = document.getElementById(sectionID);
    const timeSegments =
      sectionElement.querySelectorAll('.time-segment');

    updateTimeSegment(timeSegments[0], firstNumber);
    updateTimeSegment(timeSegments[1], secondNumber);
  }

  function getTimeRemaining(targetDateTime) {
    const nowTime = Date.now();
    const complete = nowTime


    while (true) {
      const hours = targetDate.getHours()
      const minutes = targetDate.getMinutes()
      const seconds = targetDate.getSeconds()
      return {
        complete,
        seconds,
        minutes,
        hours,
      };
    }
  }

  function updateAllSegments() {
    targetDate = new Date()
    const timeRemainingBits = getTimeRemaining(
      new Date(targetDate).getTime()

    );
    updateTimeSection('seconds', timeRemainingBits.seconds);
    updateTimeSection('minutes', timeRemainingBits.minutes);
    updateTimeSection('hours', timeRemainingBits.hours);

    return timeRemainingBits.complete;
  }

  const countdownTimer = setInterval(() => {
    const isComplete = updateAllSegments();

    if (isComplete) {
      clearInterval(countdownTimer);
    }
  }, 1000);


  useEffect(() => {
    const interval = setInterval(() => {
      updateAllSegments();

    }, 1000);

  }, [])



  return (
    <div className='timer'>
      <div class="countdown">
        <div class="time-section" id="hours">
          <div class="time-group">
            <div class="time-segment">
              <div class="segment-display">
                <div class="segment-display__top"></div>
                <div class="segment-display__bottom"></div>
                <div class="segment-overlay">
                  <div class="segment-overlay__top"></div>
                  <div class="segment-overlay__bottom">       </div>
                </div>
              </div>
            </div>
            <div class="time-segment">
              <div class="segment-display">
                <div class="segment-display__top"></div>
                <div class="segment-display__bottom"></div>
                <div class="segment-overlay">
                  <div class="segment-overlay__top"></div>
                  <div class="segment-overlay__bottom"></div>
                </div>
              </div>
            </div>
          </div>
          <p>Hours</p>
        </div>
        <div className="timerDots">:</div>

        <div class="time-section" id="minutes">
          <div class="time-group">
            <div class="time-segment">
              <div class="segment-display">
                <div class="segment-display__top"></div>
                <div class="segment-display__bottom"></div>
                <div class="segment-overlay">
                  <div class="segment-overlay__top"></div>
                  <div class="segment-overlay__bottom"></div>
                </div>
              </div>
            </div>
            <div class="time-segment">
              <div class="segment-display">
                <div class="segment-display__top"></div>
                <div class="segment-display__bottom"></div>
                <div class="segment-overlay">
                  <div class="segment-overlay__top"></div>
                  <div class="segment-overlay__bottom"></div>
                </div>
              </div>
            </div>
          </div>
          <p>Minutes</p>
        </div>
        <div className="timerDots">:</div>

        <div class="time-section" id="seconds">
          <div class="time-group">
            <div class="time-segment">
              <div class="segment-display">
                <div class="segment-display__top"></div>
                <div class="segment-display__bottom"></div>
                <div class="segment-overlay">
                  <div class="segment-overlay__top"></div>
                  <div class="segment-overlay__bottom"></div>
                </div>
              </div>
            </div>
            <div class="time-segment">
              <div class="segment-display">
                <div class="segment-display__top"></div>
                <div class="segment-display__bottom"></div>
                <div class="segment-overlay">
                  <div class="segment-overlay__top"></div>
                  <div class="segment-overlay__bottom"></div>
                </div>
              </div>
            </div>
          </div>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};