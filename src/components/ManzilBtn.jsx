import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <Button   style={{backgroundColor:`#01374d2b`,border:`none`}} variant="outlined" startIcon={<EditIcon style={{color:`black`, marginLeft:`10px`}} />}>
      </Button>
      <Button style={{backgroundColor:`#d61f1f22`,border:`none`}} variant="outlined" startIcon={<DeleteIcon style={{color:`red` ,marginLeft:`10px`}} />}>
      </Button>
    </Stack>
  );
}