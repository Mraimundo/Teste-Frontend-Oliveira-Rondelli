import { GoTrashcan } from 'react-icons/go';
import * as C from './styles'
import { Item } from '../../types/item'
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';
import { useState, useCallback } from 'react';



type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    const [tansactions, setTansactions] = useState<Item[]>([]);

    const removeTransactions = useCallback((transactionId: string) => {
        const newTransaction = [...tansactions];
        const removedTransactionIndex = newTransaction.findIndex(transation => transation.id === transactionId);
        if (removedTransactionIndex > -1) {
            newTransaction.splice(removedTransactionIndex, 1);
        }
        setTansactions(newTransaction);

    }, []);

    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>

            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'limegreen'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>

            <C.TableColumn>
                <C.Delete color={categories[item.category].expense ? 'red' : 'limegreen'}>
                    <button onClick={() => removeTransactions(item.id)} type='button'>
                        <GoTrashcan />
                    </button>
                </C.Delete>
            </C.TableColumn>
        </C.TableLine>
    );
};