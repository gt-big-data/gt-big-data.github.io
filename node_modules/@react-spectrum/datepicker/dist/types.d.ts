import { FocusableRef } from "@react-types/shared";
import { ReactElement } from "react";
import { SpectrumTimeFieldProps, TimeValue, DateValue, SpectrumDatePickerProps, SpectrumDateRangePickerProps, SpectrumDateFieldProps } from "@react-types/datepicker";
/**
 * TimeFields allow users to enter and edit time values using a keyboard.
 * Each part of the time is displayed in an individually editable segment.
 */
export const TimeField: <T extends TimeValue>(props: SpectrumTimeFieldProps<T> & {
    ref?: FocusableRef<HTMLElement>;
}) => ReactElement;
/**
 * DatePickers combine a DateField and a Calendar popover to allow users to enter or select a date and time value.
 */
export const DatePicker: <T extends DateValue>(props: SpectrumDatePickerProps<T> & {
    ref?: FocusableRef<HTMLElement>;
}) => ReactElement;
/**
 * DateRangePickers combine two DateFields and a RangeCalendar popover to allow users
 * to enter or select a date and time range.
 */
export const DateRangePicker: <T extends DateValue>(props: SpectrumDateRangePickerProps<T> & {
    ref?: FocusableRef<HTMLElement>;
}) => ReactElement;
/**
 * DateFields allow users to enter and edit date and time values using a keyboard.
 * Each part of a date value is displayed in an individually editable segment.
 */
export const DateField: <T extends DateValue>(props: SpectrumDateFieldProps<T> & {
    ref?: FocusableRef<HTMLElement>;
}) => ReactElement;
export type { SpectrumDateFieldProps, SpectrumDatePickerProps, SpectrumDateRangePickerProps, SpectrumTimeFieldProps } from '@react-types/datepicker';

//# sourceMappingURL=types.d.ts.map
