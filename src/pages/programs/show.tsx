import { useShow } from '@pankod/refine-core'
import { Show, Stack, Typography } from '@pankod/refine-mui'

import { IProgram } from '../../interfaces'

export const ProgramShow = () => {
    const { queryResult } = useShow<IProgram>()
    const { data, isLoading } = queryResult
    const record = data?.data

    return (
        <Show isLoading={isLoading}>
            <Stack gap={1}>
                <Typography variant="body1" fontWeight="bold">
                    ID
                </Typography>
                <Typography>{record?.id}</Typography>

                <Typography variant="body1" fontWeight="bold">
                    제목
                </Typography>
                <Typography>{record?.title}</Typography>

                <Typography variant="body1" fontWeight="bold">
                    내용
                </Typography>
                <Typography>{record?.description}</Typography>

                <Typography variant="body1" fontWeight="bold">
                    작성시각
                </Typography>
                <Typography>{record?.createdAt}</Typography>

                <Typography variant="body1" fontWeight="bold">
                    수정시각
                </Typography>
                <Typography>{record?.updatedAt}</Typography>
            </Stack>
        </Show>
    )
}
