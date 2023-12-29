import { IOutlay } from "../types/interfaces/entities/outlay.ts";

export function deleteObjectById(array: IOutlay[], selectedId: number | null): IOutlay[] {
  return array.filter((obj) => {
    if (obj.id === selectedId) {
      return false;
    }

    if (obj.child && obj.child.length > 0) {
      obj.child = deleteObjectById(obj.child, selectedId);
    }

    return true;
  });
}
