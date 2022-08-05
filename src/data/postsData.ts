import { PostIndex } from 'types/PostType';

function createData(
  id: number,
  keyword: string,
  title: string,
  status: string,
  theme: string,
  writer: string,
  updated: string
): PostIndex {
  return { id, keyword, title, status, theme, writer, updated };
}

export const postsData = [
  createData(1, 'IT', 'これはためになるテスト記事！', '執筆中', 'Lucy-japan', '菅原', '5分前'),
  createData(2, 'キーワード未設定', 'これはとてもためになるテスト記事！', '執筆中', 'Lucy-japan', '菅原', '1時間前'),
  createData(3, 'お金', 'これはとてもためになるテスト記事です！', '執筆中', 'Lucy-japan', '菅原', '3日前'),
  createData(4, 'SEO', 'これはとてもためになるテスト記事です！', '執筆中', 'Lucy-japan', '菅原', '1週間前'),
  createData(5, 'IT', 'これはとてもためになるテスト記事です！', '執筆中', 'Lucy-japan', '菅原', '2週間前'),
  createData(6, 'ビジネス', 'これはとてもためになるテスト記事です！', '執筆中', 'Lucy-japan', '菅原', '1ヶ月前'),
  createData(7, '子育て', 'これはとてもためになるテスト記事です！', '執筆中', 'Lucy-japan', '菅原', '1ヶ月前'),
  createData(
    8,
    'キーワード未設定',
    'これはとてもためになるテスト記事です！',
    '執筆中',
    'Lucy-japan',
    '菅原',
    '1ヶ月前'
  ),
  createData(9, 'スキンケア', 'これはとてもためになるテスト記事です！', '執筆中', 'Lucy-japan', '菅原', '1ヶ月前'),
  createData(10, 'ビジネス', 'これはとてもためになるテスト記事です！', '執筆中', 'Lucy-japan', '菅原', '1ヶ月前'),
  createData(11, 'SEO', 'これはとてもためになるテスト記事です！', '執筆中', 'Lucy-japan', '菅原', '2ヶ月前'),
  createData(12, 'SEO', 'これはとてもためになるテスト記事です！', '執筆中', 'Lucy-japan', '菅原', '3ヶ月前'),
  createData(13, 'お金', 'これはとてもためになるテスト記事です！', '執筆中', 'Lucy-japan', '菅原', '10ヶ月前'),
  createData(14, 'IT', 'これはとてもためになるテスト記事です！', '執筆中', 'Lucy-japan', '菅原', '1年前'),
  createData(15, 'スキンケア', 'これはとてもためになるテスト記事です！', '執筆中', 'Lucy-japan', '菅原', '2年前'),
];
