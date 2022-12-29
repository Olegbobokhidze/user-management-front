import { z, object } from "zod";

export const userSchema = object({
  name: z.string(),
  mail: z.string().email(),
  age: z.number().max(99),
  gender: z.string(),
});
