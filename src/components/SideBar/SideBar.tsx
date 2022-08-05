import React from 'react';
import { SideBarDropdown } from '../SideBarDropdown/SideBarDropdown';
import Styles from './SideBar.module.scss';
import { filterData } from 'data/filterData';
import { themeData } from 'data/themeData';

interface Props {
  onClick: () => void;
}

export const SideBar: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className={Styles.container}>
        <p className={Styles.section}>すべて</p>
        <p className={Styles.section}>フィルター</p>
        <div className={Styles.dropdown}>
          <SideBarDropdown title="条件で絞る" lists={filterData} />
        </div>
        <p className={Styles.section}>テーマ</p>
        <div className={Styles.dropdown}>
          <SideBarDropdown title="テーマで絞る" lists={themeData} />
        </div>
        <p className={Styles.section} onClick={props.onClick}>
          ゴミ箱
        </p>
      </div>
    </>
  );
};
