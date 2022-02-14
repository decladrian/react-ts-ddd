type DateFormat = 'DD-MM-YYYY' | 'YYYY-MM-DD' | 'YYYY-MM' | 'MM-YYYY';

export class DateMapper {
  static nativeDateToStringFormat(date: Date, format: DateFormat) {
    return '2022-20-20';
  }
}
