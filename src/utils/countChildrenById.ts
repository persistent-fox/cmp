import { IOutlay } from "../types/interfaces/entities/outlay.ts";

export function countChildrenById(objArray: IOutlay[], targetId: number): number {
  let foundObject: IOutlay | undefined;

  function findObjectById(arr: IOutlay[], id: number): IOutlay | undefined {
    for (const obj of arr) {
      if (obj.id === id) {
        foundObject = obj;
        return obj;
      }
      if (obj.child.length > 0) {
        findObjectById(obj.child, id);
      }
    }
    return undefined;
  }

  findObjectById(objArray, targetId);

  if (!foundObject) {
    return 0;
  }

  function countChildrenRecursive(obj: IOutlay): number {
    if (obj.child.length === 0) {
      return 1;
    }

    let count = 1;

    for (let i = 0; i < obj.child.length; i++) {
      const child = obj.child[i];
      count += countChildrenRecursive(child);
    }

    return count;
  }

  if (foundObject.child.length === 1) {
    return 1;
  }

  return countChildrenRecursive(foundObject) - 1;
}
