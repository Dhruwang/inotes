import { useEffect } from "react";
export default function Timer() {
  
  const targetDate = new Date();
targetDate.setHours(targetDate.getHours() + 22); 

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
  const complete = nowTime >= targetDateTime;

  if (complete) {
    return {
      complete,
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
  }

  const secondsRemaining = Math.floor(
    (targetDateTime - nowTime) / 1000
  );
  const hours = Math.floor(secondsRemaining / 60 / 60);
  const minutes =
    Math.floor(secondsRemaining / 60) - hours * 60;
  const seconds = secondsRemaining % 60;

  return {
    complete,
    seconds,
    minutes,
    hours,
  };
}

function updateAllSegments() {
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
  updateAllSegments();
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