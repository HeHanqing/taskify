import { ActionState } from "@/lib/create-safe-action";
import { CopyList } from "./schema";
import { List } from "@prisma/client";
import { z } from "zod";

export type InputType = z.infer<typeof CopyList>;
export type ReturnType = ActionState<InputType, List>;
