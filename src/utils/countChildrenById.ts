import { IOutlay } from "../types/interfaces/entities/outlay.ts";

export function countChildrenById(objArray: IOutlay[], targetId: number): number {
  function countRecursive(node: IOutlay): void {
    total += 1;  // Увеличиваем счетчик для текущего узла

    // Рекурсивно обрабатываем детей, исключая детей последнего ребенка
    if (node.child && node !== lastChild) {
      for (const child of node.child) {
        countRecursive(child);
      }
    }
  }

  let total = 0;  // Инициализируем счетчик
  let lastChild: IOutlay | null = null;  // Протипизированный параметр lastChild

  function findNodeById(currentNode: IOutlay): IOutlay | null {
    if (currentNode.id === targetId) {
      return currentNode;
    }

    // Рекурсивно ищем вложенные узлы
    if (currentNode.child) {
      for (const child of currentNode.child) {
        const foundNode = findNodeById(child);
        if (foundNode) {
          return foundNode;
        }
      }
    }

    return null;
  }

  // Находим узел с заданным ID в массиве или его вложенных узлах
  const targetNode = findNodeById(objArray[0]);  // Предполагается, что objArray[0] - это корневой объект

  if (targetNode) {
    const children = targetNode.child || [];
    lastChild = children[children.length - 1];  // Записываем последнего ребенка
    countRecursive(targetNode);
  }

  return total - 1;  // Вычитаем 1, чтобы не учитывать предков последнего ребенка
}