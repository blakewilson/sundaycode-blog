import { parseISO, format } from "date-fns";
import { FC } from "react";

type DateProps = {
  isoDate: string;
};

const Date: FC<DateProps> = ({ isoDate }) => {
  if (!isoDate) {
    return null;
  }

  const date = parseISO(isoDate);
  return <time dateTime={isoDate}>{format(date, "LLLL	d, yyyy")}</time>;
};

export default Date;
