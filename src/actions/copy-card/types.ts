import { ActionState } from "@/lib/create-safe-action";
import { CopyCard } from "./schema";
import { Card } from "@prisma/client";
import { z } from "zod";

export type InputType = z.infer<typeof CopyCard>;
export type ReturnType = ActionState<InputType, Card>;
