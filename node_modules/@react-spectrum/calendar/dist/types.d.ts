import { DateValue, SpectrumCalendarProps, SpectrumRangeCalendarProps } from "@react-types/calendar";
import { FocusableRef } from "@react-types/shared";
import { ReactElement } from "react";
/**
 * Calendars display a grid of days in one or more months and allow users to select a single date.
 */
export const Calendar: <T extends DateValue>(props: SpectrumCalendarProps<T> & {
    ref?: FocusableRef<HTMLElement>;
}) => ReactElement;
/**
 * RangeCalendars display a grid of days in one or more months and allow users to select a contiguous range of dates.
 */
export const RangeCalendar: <T extends DateValue>(props: SpectrumRangeCalendarProps<T> & {
    ref?: FocusableRef<HTMLElement>;
}) => ReactElement;
export type { SpectrumCalendarProps, SpectrumRangeCalendarProps } from '@react-types/calendar';

//# sourceMappingURL=types.d.ts.map
