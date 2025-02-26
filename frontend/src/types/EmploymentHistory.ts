export interface EmploymentHistory {
  id: number;
  company: string;
  position: string;
  location: string;
  startMonthYear: string;
  endMonthYear: string;
  description?: string[];
}
