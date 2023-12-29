import { IOutlay } from "../types/interfaces/entities/outlay.ts";

export function findObjectById(array: IOutlay[], selectedId: number | null): IOutlay | null {
  for (let obj of array) {
    if (obj.id === selectedId) {
      return obj;
    }

    if (obj.child && obj.child.length > 0) {
      const result = findObjectById(obj.child, selectedId);
      if (result) {
        return result;
      }
    }
  }

  return null;
}
