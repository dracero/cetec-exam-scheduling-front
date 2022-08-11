export const ID = "ID";
export const COURSE = "COURSE";
export const START = "START";
export const START_MINUTES_MARGIN = "START MINUTES MARGIN";
export const FINISH_MINUTES_MARGIN = "FINISH MINUTES MARGIN";
export const FINISH = "FINISH";
export const EXAM = "EXAM";
export const RESET = "RESET";

export const id = (newId) => ({
  type: ID,
  newId
});

export const course = (newCourse) => ({
  type: COURSE,
  newCourse
});

export const start = (newStart) => ({
  type: START,
  newStart
});

export const finish = (newFinish) => ({
  type: FINISH,
  newFinish
});

export const startMinutesMargin = (newStartMinutesMargin) => ({
  type: START_MINUTES_MARGIN,
  newStartMinutesMargin
});

export const finishMinutesMargin = (newFinishMinutesMargin) => ({
  type: FINISH_MINUTES_MARGIN,
  newFinishMinutesMargin
});

export const exam = (newExam) => ({
  type: EXAM,
  newExam
});

export const reset = () => ({
  type: RESET,
});