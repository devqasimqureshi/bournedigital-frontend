import { Container, Grid, Select, MenuItem, SelectChangeEvent } from "@mui/material"

interface Props {
    defaultType: string
    onChange: (e: SelectChangeEvent<any>) => void;
}

const KanbanDropdown: React.FC<Props> = ({ defaultType, onChange }) => <Grid container>
    <Select
        value={defaultType}
        label="Select Board"
        onChange={onChange}
    >
        <MenuItem value={1}>
            Kanban
        </MenuItem>
        <MenuItem value={2}>
            List
        </MenuItem>
    </Select>
</Grid>

export default KanbanDropdown
