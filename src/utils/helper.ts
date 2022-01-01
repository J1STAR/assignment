/**
 * 두 날짜가 동일한지 확인
 */
export const IsSameDay = (d1: Date, d2: Date): boolean => {
  return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
};

/**
 * 날짜를 yyyy.mm.dd hh:mm 형태로 변환
 */
export const translateDate = (date: string): string => {
  const base = new Date(date);
  const year: string | number = base.getFullYear();
  let month: string | number = base.getMonth() + 1;
  let day: string | number = base.getDate();
  let hour: string | number = base.getHours();
  let min: string | number = base.getMinutes();
  month = month >= 10 ? month : `0${month}`;
  day = day >= 10 ? day : `0${day}`;
  hour = hour >= 10 ? hour : `0${hour}`;
  min = min >= 10 ? min : `0${min}`;
  return `${year}.${month}.${day} ${hour}:${min}`;
};

/**
 * 마감일과 현재 일수와의 차이를 계산
 */
export const calTimeDiff = (date: string): number => {
  const diff = (new Date().getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24);
  return Math.round(diff) + 1;
};
