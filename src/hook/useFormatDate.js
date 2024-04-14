import { format } from "date-fns";

export function useFormatDate(date, formattedDate="MM/dd/yyyy") {
    return format(new Date(), formattedDate)
}