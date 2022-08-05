import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import LinkIcon from '@mui/icons-material/Link';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ListIcon from '@mui/icons-material/List';
import GridOnIcon from '@mui/icons-material/GridOn';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CssIcon from '@mui/icons-material/Css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import { DropdownAlignSelect } from './DropdownToggle/DropdownAlignSelect';
import { DropdownTextboxSelect } from './DropdownToggle/DropdownTextboxSelect';
import { DropdownBoxSelect } from './DropdownToggle/DropdownBoxSelect';
import { DropdownBlockSelect } from './DropdownToggle/DropdownBlockSelect';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export const EditIcons: React.FC = () => {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <IconButton value="image" aria-label="image">
        <AddPhotoAlternateIcon />
      </IconButton>
      <DropdownBlockSelect />
      <StyledToggleButtonGroup size="small" value={formats} onChange={handleFormat} aria-label="text formatting">
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
        <ToggleButton value="strikethrough" aria-label="strikethrough">
          <StrikethroughSIcon />
        </ToggleButton>
        <ToggleButton value="color" aria-label="color">
          <FormatColorTextIcon />
          <ArrowDropDownIcon />
        </ToggleButton>
      </StyledToggleButtonGroup>
      <IconButton value="clear" aria-label="clear">
        <FormatClearIcon />
      </IconButton>
      <IconButton value="link" aria-label="link">
        <LinkIcon />
      </IconButton>
      <IconButton value="list-numbered" aria-label="list numbered">
        <FormatListNumberedIcon />
      </IconButton>
      <IconButton value="list" aria-label="list">
        <ListIcon />
      </IconButton>
      <IconButton value="table" aria-label="table">
        <GridOnIcon />
      </IconButton>
      <IconButton value="quote" aria-label="quote">
        <FormatQuoteIcon />
      </IconButton>
      <DropdownAlignSelect />
      <DropdownTextboxSelect />
      <DropdownBoxSelect />
      <ToggleButton value="css" aria-label="css" sx={{ border: 0 }}>
        <CssIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
    </>
  );
};
