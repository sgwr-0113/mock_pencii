import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { postsData } from 'data/postsData';
import Box from '@mui/material/Box';

interface Column {
  id: 'keyword' | 'title' | 'status' | 'theme' | 'writer' | 'updated';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'keyword', label: 'キーワード', minWidth: 170 },
  { id: 'title', label: 'タイトル', minWidth: 400 },
  {
    id: 'status',
    label: 'ステータス',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'theme',
    label: 'テーマ',
    minWidth: 160,
    align: 'center',
  },
  {
    id: 'writer',
    label: '作成者',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'updated',
    label: '最終更新',
    minWidth: 100,
    align: 'center',
    // format: (value: number) => value.toLocaleString('en-US'),
  },
];

export const DashTable: React.FC = () => {
  return (
    <>
      <h2>すべて</h2>
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
              <TableCell key="action" align="center" style={{ minWidth: 80 }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {postsData.map((post) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={post.id}>
                {columns.map((column) => {
                  const value = post[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      <a href={process.env.PUBLIC_URL + '/detail'}>
                        <Box sx={{ width: '100%' }}>{value}</Box>
                      </a>
                    </TableCell>
                  );
                })}
                <TableCell key="action" align="center" style={{ minWidth: 80 }}>
                  <a href="#">
                    <ContentCopyOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
                  </a>
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
                  <p>{post.keyword}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
