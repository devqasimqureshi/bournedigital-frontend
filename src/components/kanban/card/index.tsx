import React from "react"
import { Card, Grid } from "@mui/material"
import type { TaskType } from "interfaces"

const BoardCard: React.FC<TaskType> = ({ ...card }) => {
  return (
    <Grid bgcolor="white" width="100%" item>
      <Card style={{ padding: "1rem" }}>
        <Grid container style={{ padding: "0.5rem 0" }}>
          {card.name}
        </Grid>
        <Grid container style={{ padding: "0.5rem 0" }}>
          {card.description}
        </Grid>
      </Card>
    </Grid>
  );
};

export default BoardCard
