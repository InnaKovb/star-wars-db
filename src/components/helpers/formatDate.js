import { format } from 'date-fns';

export function formatDate(dateString) {
    const formattedDate = format(new Date(dateString), 'yyyy-MM-dd');
    return formattedDate;
  }