import { IOutlay } from "../types/interfaces/entities/outlay.ts";

export function updateObjectById(
  array: IOutlay[],
  selectedId: number | null,
  newData: IOutlay,
  param: "edit" | "create",
): IOutlay[] {
  return array.map((obj) => {
    if (obj.id === selectedId) {
      // Объект найден, обновляем его свойства
      switch (param) {
        case "edit":
          return { ...obj, child: [...obj.child.slice(0, -1), { ...newData, child: [] }] };
        case "create":
          return { ...obj, child: [...obj.child, newData] };
      }
    }

    if (obj.child && obj.child.length > 0) {
      // Рекурсивно обрабатываем вложенные массивы
      return { ...obj, child: updateObjectById(obj.child, selectedId, newData, param) };
    }

    // Если текущий объект не является целевым, возвращаем его без изменений
    return obj;
  });
}
