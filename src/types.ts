import { Card, List } from "@prisma/client";

export type ListWithcards = List & { cards: Card[] };
export type CardWithList = Card & { list: List };
