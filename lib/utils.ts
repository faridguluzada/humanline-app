import { parse, format } from "date-fns";

export function transformToSelectOptions<
  T extends { id: number; name?: string; title?: string }
>(
  data: T[]
): {
  label: string;
  value: string;
}[] {
  const newData = data?.map((item) => ({
    label: item.name || item.title || "",
    value: (item.name || item.title || "").toLowerCase(),
  }));

  return newData;
}

export const filterValue = <T>(value: T): T | undefined =>
  !value || value === "all" ? undefined : value;

export function dateTransformer(value: string) {
  const parsedDate = parse(value, "MM/dd/yyyy", new Date());
  return format(parsedDate, "yyyy-MM-dd'T'HH:mm:ssXXX");
}
