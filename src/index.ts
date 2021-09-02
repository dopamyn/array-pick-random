export default function array_pick_random<TArray extends unknown[]>(
    array: TArray, itemsCount: number
): TArray {

    const iMax = array.length - 1;
    if (itemsCount > array.length)
        itemsCount = array.length;

    const indexes: number[] = [];
    const items: TArray = [] as TArray;

    while (items.length < itemsCount) {

        let index = Math.floor(Math.random() * iMax);
        if (indexes.includes(index))
            continue;

        indexes.push(index);
        items.push(array[index]);
    }

    return items;
}