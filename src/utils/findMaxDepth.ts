import {IOutlay} from "../types/interfaces/entities/outlay.ts";

export function findMaxDepth(data: IOutlay[] | null): number {
    if(!data) return 1;
    let maxDepth = 0;

    function findDepthRecursive(item: IOutlay, depth: number) {
        if (item.child && item.child.length > 0) {
            for (const childItem of item.child) {
                findDepthRecursive(childItem, depth + 1);
            }
        } else {
            maxDepth = Math.max(maxDepth, depth);
        }
    }

    for (const item of data) {
        findDepthRecursive(item, 1);
    }

    return maxDepth;
}