import React, { useContext } from "react"
import { Grid } from "@mui/material"

interface Props {
  // dispatch: React.Dispatch<ActionType>
}

const Header: React.FC<Props> = ({
  // epicOptions,
  // assigneeOptions,
  // filters,
  // dispatch,
}) => (
  <Grid container>
    {/* <Grid container xs={2}>
      <Input
        value={filters.search}
        onChange={(e) => dispatch(actions.onSearchFilter(e.target.value))}
        placeholder="Search.."
      />
    </Grid>
    <Grid container xs={2}>
      <Stack spacing={2} sx={{ width: 300, paddingRight: "1rem" }}>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={assigneeOptions}
          getOptionLabel={(option) => option.name}
          value={filters.assignee}
          onChange={(e: any, value: Assignee[]) =>
            dispatch(actions.onUsersFilter(value))
          }
          renderInput={(params) => (
            <TextField {...params} label="Assignee" placeholder="Assignee" />
          )}
        />
      </Stack>
    </Grid>
    <Grid container xs={2}>
      <Stack spacing={2} sx={{ width: 300, paddingRight: "1rem" }}>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={epicOptions}
          getOptionLabel={(option) => option.title}
          value={filters.epic}
          onChange={(e: any, value: Epic[]) =>
            dispatch(actions.onEpicFilter(value))
          }
          renderInput={(params) => (
            <TextField {...params} label="Epic" placeholder="Epic" />
          )}
        />
      </Stack>
    </Grid>
    <Grid container xs={1}>
      {filters.search || filters.assignee.length || filters.epic.length ? (
        // <Button onClick={() => dispatch(actions.onFilterClear())}>Clear</Button>
      ) : null}
    </Grid> */}
  </Grid>
);

export default Header;
