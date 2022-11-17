import { useDataGrid, DataGrid, GridColumns, DateField, List, ShowButton } from '@pankod/refine-mui'

import { IProgram } from '../../interfaces'

const columns: GridColumns<IProgram> = [
    { field: 'title', headerName: '프로그램 제목', flex: 1, minWidth: 150 },
    {
        field: 'description',
        headerName: '프로그램 내용',
        flex: 2,
    },
    {
        field: 'createdAt',
        headerName: '생성날짜',
        minWidth: 220,
        renderCell: function render(params) {
            return <DateField format="LLL" value={params.row.createdAt} />
        },
    },
    {
        headerName: 'Actions',
        field: 'actions',
        minWidth: 250,
        renderCell: function render(params) {
            return <ShowButton hideText recordItemId={params.row.id} />
        },
    },
]

export const ProgramList: React.FC = () => {
    const { dataGridProps } = useDataGrid<IProgram>()

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    )
}
