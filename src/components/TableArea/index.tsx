import * as C from './styles'
import { Item } from '../../types/item';
import { TableItem } from '../TableItem';


type Props = {
    list: Item[]
    setList: React.Dispatch<React.SetStateAction<Item[]>>
}

export const TableArea = ({ list, setList }: Props) => {
    return (
        <C.Container>
            <C.Table>
                <thead>
                    <tr>
                        {/* <C.TableHeadColumn width={150}>Data</C.TableHeadColumn>
                        <C.TableHeadColumn width={180}>Categoria</C.TableHeadColumn>
                        <C.TableHeadColumn>Título</C.TableHeadColumn>
                        <C.TableHeadColumn width={100}>Valor</C.TableHeadColumn>
                        <C.TableHeadColumn width={100}>Excluir</C.TableHeadColumn> */}

                        <C.TableHeadColumn>Data</C.TableHeadColumn>
                        <C.TableHeadColumn >Categoria</C.TableHeadColumn>
                        <C.TableHeadColumn>Título</C.TableHeadColumn>
                        <C.TableHeadColumn >Valor</C.TableHeadColumn>
                        <C.TableHeadColumn >Excluir</C.TableHeadColumn>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <TableItem key={index} item={item} list={list} setList={setList} />
                    ))}
                </tbody>
            </C.Table>
        </C.Container>
    );

}