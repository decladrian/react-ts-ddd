type DateFormat = 'DD-MM-YYYY' | 'YYYY-MM-DD' | 'YYYY-MM' | 'MM-YYYY';

const mockStringDate = '2022-20-20';

export class DateMapper {
  static nativeDateToStringFormat(
    date: Date,
    format: DateFormat = 'DD-MM-YYYY'
  ): string {
    return mockStringDate;
  }
}
