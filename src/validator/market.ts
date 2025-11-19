import { z } from "zod";
import { OutcomeType } from "@prisma/client";



export const marketCreateSchema = z.object({
  title: z.string().min(10),
  thumbnail: z.string().min(1),
  category: z.string().optional(),
  outcome: z.array(z.string()).min(1)
});
