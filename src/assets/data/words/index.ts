import { three as t } from "./three";
import { four as fo } from "./four";
import { five as fi } from "./five";
import { six as si } from "./six";
import { seven as se } from "./seven";
import { eight as e } from "./eight";
import { StringUtils } from "../../../shared";

export const three = StringUtils.splitChunks(t, 3);
export const four = StringUtils.splitChunks(fo, 4);
export const five = StringUtils.splitChunks(fi, 5);
export const six = StringUtils.splitChunks(si, 6);
export const seven = StringUtils.splitChunks(se, 7);
export const eight = StringUtils.splitChunks(e, 8);
