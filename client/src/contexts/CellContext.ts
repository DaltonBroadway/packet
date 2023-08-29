import { createContext } from "react";
import { useBasicReducer } from "../hooks/useBasicReducer";
import { useInboundSocketBroker } from "../hooks/useInboundSocketBroker";
import { useOutboundSocketBroker } from "../hooks/useOutboundSocketBroker";

export interface Cell {
  column: number;
  row: number;
  value: string;
}

const [cells, cellDispatch] = useBasicReducer<Cell>({});

useInboundSocketBroker<Cell>("cell", cellDispatch);
const outboundDispatch = useOutboundSocketBroker<Cell>("cell", cellDispatch);

export const CellContext = createContext(cells);
export const CellDispatchContext = createContext(outboundDispatch);