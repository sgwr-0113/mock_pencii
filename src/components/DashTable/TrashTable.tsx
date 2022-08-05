import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import RestorePageOutlinedIcon from '@mui/icons-material/RestorePageOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { postsData } from 'data/postsData';
import Box from '@mui/material/Box';

interface Column {
  id: 'title' | 'theme';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'title', label: 'タイトル', minWidth: 400 },
  {
    id: 'theme',
    label: 'テーマ',
    minWidth: 160,
    align: 'center',
  },
];

export const TrashTable: React.FC = () => {
  return (
    <>
      <h2>ゴミ箱</h2>
      {/* PC */}
      <TableContainer sx={{ display: { xs: 'none', md: 'flex' }, maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
              <TableCell key="restoration" align="center" style={{ minWidth: 80 }}>
                復元
              </TableCell>
              <TableCell key="delete" align="center" style={{ minWidth: 80 }}>
                完全に削除
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {postsData.map((post) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={post.id}>
                {columns.map((column) => {
                  const value = post[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {value}
                    </TableCell>
                  );
                })}
                <TableCell key="restoration" align="center" style={{ minWidth: 80 }}>
                  <a href="#">
                    <RestorePageOutlinedIcon fontSize="small" />
                  </a>
                </TableCell>
                <TableCell key="delete" align="center" style={{ minWidth: 80 }}>
                  <a href="#">
                    <DeleteOutlinedIcon fontSize="small" />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* タブレット・スマホ */}
      <TableContainer sx={{ display: { md: 'none' }, maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table" sx={{ width: '100%' }}>
          <TableBody>
            {postsData.map((post) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={post.id}>
                <TableCell key={post.id} sx={{ p: 0 }}>
                  <h4>{post.title}</h4>
                  <Box sx={{ display: 'flex', alignItems: 'center', pb: 2 }}>
                    <a href="#">
                      <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                        <RestorePageOutlinedIcon fontSize="small" />
                        復元
                      </Box>
                    </a>
                    <a href="#">
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <DeleteOutlinedIcon fontSize="small" />
                        完全に削除
                      </Box>
                    </a>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
