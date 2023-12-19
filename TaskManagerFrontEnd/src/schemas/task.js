import { z } from "zod";
import { availableColours } from "../misc/AvailableColours";

export const taskSchema = z.object({
  name : z.string().min(1, { message : "The name is neccesary" }),
  category : z.string().optional(),
  expirationDate : z.date().optional(),
  colour : z.enum(availableColours),
  description : z.string().optional()
});
