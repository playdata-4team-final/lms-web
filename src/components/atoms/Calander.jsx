import React, { useEffect, useState } from "react";
import styles from "../../styles/components/atoms/Calander.module.css";
const Calendar = ({
  selectedDay,
  setSelectedDay,
  isPrevMonth,
  isNextMonth,
}) => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date()); // 현재 날짜 상태 추가
  const [orangeCircleDate, setOrangeCircleDate] = useState(new Date());

  useEffect(() => {
    setOrangeCircleDate(currentDate); // 오렌지 서클을 현재 날짜로 초기화
  }, [currentDate]);

  useEffect(() => {
    // 선택한 날짜가 변경되면 동그라미 표시 날짜를 업데이트
    setOrangeCircleDate(selectedDay || currentDate); // 선택한 날짜가 없으면 현재 날짜로 초기화
  }, [selectedDay, currentDate]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isSameDay = (toDay, compareDay) => {
    const toDayWithoutTime = new Date(
      toDay.getFullYear(),
      toDay.getMonth(),
      toDay.getDate()
    );
    const compareDayWithoutTime = new Date(
      compareDay?.getFullYear(),
      compareDay?.getMonth(),
      compareDay?.getDate()
    );

    return toDayWithoutTime.getTime() === compareDayWithoutTime.getTime();
  };

  const onClickDay = (day, event) => {
    if (isSameDay(day, selectedDay)) {
      setSelectedDay(null);
    } else {
      setSelectedDay(day);

      // 클릭한 날짜로 주황 동그라미 위치 업데이트
      setCurrentDate(day); // 현재 날짜 업데이트
    }
  };
  const prevCalendar = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        currentMonth.getDate()
      )
    );
  };

  const nextCalendar = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        currentMonth.getDate()
      )
    );
  };

  const buildCalendarDays = () => {
    const curMonthStartDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();
    const curMonthEndDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );
    const prevMonthEndDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      0
    );
    const nextMonthStartDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1
    );
    const days = Array.from({ length: curMonthStartDate }, (_, i) => {
      return new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        prevMonthEndDate.getDate() - i
      );
    }).reverse();

    days.push(
      ...Array.from(
        { length: curMonthEndDate.getDate() },
        (_, i) =>
          new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1)
      )
    );

    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      days.push(
        ...Array.from(
          { length: remainingDays },
          (_, i) =>
            new Date(
              nextMonthStartDate.getFullYear(),
              nextMonthStartDate.getMonth(),
              i + 1
            )
        )
      );
    }
    return days;
  };

  const isOrangeCircleDay = (day) => {
    return isSameDay(day, orangeCircleDate);
  };

  const buildCalendarTag = (calendarDays) => {
    return calendarDays.map((day, i) => {
      if (day.getMonth() < currentMonth.getMonth()) {
        return (
          <td key={i} className="prevMonthDay">
            {isPrevMonth ? day.getDate() : ""}
          </td>
        );
      }
      if (day.getMonth() > currentMonth.getMonth()) {
        return (
          <td key={i} className="nextMonthDay">
            {isNextMonth ? day.getDate() : ""}
          </td>
        );
      }
      if (day < today) {
        return (
          <td key={i} className="prevDay">
            {day.getDate()}
          </td>
        );
      }
      return (
        <td
          key={i}
          className={`futureDay ${isSameDay(day, selectedDay) && "choiceDay"}`}
          onClick={(e) => onClickDay(day, e)}
        >
          <span
            className={`${
              isOrangeCircleDay(day) && !isSameDay(day, today)
                ? "orange-circle"
                : ""
            }`}
          >
            {day.getDate()}
          </span>
        </td>
      );
    });
  };

  const divideWeek = (calendarTags) => {
    return calendarTags.reduce((acc, day, i) => {
      if (i % 7 === 0) acc.push([day]);
      else acc[acc.length - 1].push(day);
      return acc;
    }, []);
  };

  const calendarDays = buildCalendarDays();
  const calendarTags = buildCalendarTag(calendarDays);
  const calendarRows = divideWeek(calendarTags);

  return (
    <div className="calendar">
      <div className="calendarNav">
        <div className="calendarNav-title">
          <span className="current-month">
            <span className="calendar_font">오늘 </span>
            <button
              data-testid="prevMonth"
              onClick={prevCalendar}
              className="prevMonth-button"
            >
              &lt;
            </button>
            {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
            <button
              data-testid="nextMonth"
              onClick={nextCalendar}
              className="nextMonth-button"
            >
              &gt;
            </button>
          </span>
        </div>
        <div className="calendarNav-button"></div>
      </div>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day, i) => (
              <th key={i} data-testid="calendarHead">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarRows.map((row, i) => (
            <tr key={i}>{row}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
