import React from 'react';
import Styles from './ContentsArea.module.scss';
import TopImage from 'images/top.jpg';

interface Props {
  contentsWidth: number;
}

export const ContentsArea: React.FC<Props> = (props) => {
  const contentsWidth = props.contentsWidth;
  return (
    <div className={Styles['wrapper']} style={{ width: `${contentsWidth}px` }}>
      <h1>教育資金贈与は特例で非課税になる？使うメリットと贈与の方法を解説</h1>
      <p>
        <img src={TopImage} className={Styles['img-block']} />
      </p>
      <p>
        自分の孫に教育資金を渡したいという方は少なくありません。教育資金贈与は非課税で現金を渡せるなど様々なメリットがあります。
      </p>
      <p>
        平成25年に登場した「教育資金の一括贈与の特例」では、非課税で大きな金額の教育資金を渡せると話題となり、今では人気の制度となっております。
      </p>
      <p>
        この記事では、教育資金贈与のメリットとデメリット、注意点を解説していきます。今後利用してみたいと思っている方はぜひ参考にしてみてください。
      </p>
      <p data-content="">
        目次&nbsp;
        <span>
          [<a href="https://green-osaka.com/online/reserve-for-education-donation#">非表示</a>]
        </span>
      </p>
      <ul>
        <li>
          <a href="https://green-osaka.com/online/reserve-for-education-donation#1">
            1章 教育資金贈与は特例を使うことで非課税の対象に！
          </a>
          <ul>
            <li>
              <a href="https://green-osaka.com/online/reserve-for-education-donation#1-1">1-1 教育資金贈与の対象項目</a>
            </li>
            <li>
              <a href="https://green-osaka.com/online/reserve-for-education-donation#1-2">
                1-2 非課税で教育資金贈与する方法
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://green-osaka.com/online/reserve-for-education-donation#2">2章 教育資金贈与のメリット</a>
        </li>
        <li>
          <a href="https://green-osaka.com/online/reserve-for-education-donation#3">3章 教育資金贈与のデメリット</a>
        </li>
        <li>
          <a href="https://green-osaka.com/online/reserve-for-education-donation#44">4章 教育資金贈与の4つの注意点</a>
          <ul>
            <li>
              <a href="https://green-osaka.com/online/reserve-for-education-donation#20233">①制度は2023年3月末まで</a>
            </li>
            <li>
              <a href="https://green-osaka.com/online/reserve-for-education-donation#30">
                ②孫が30歳までに使い切らないといけない
              </a>
            </li>
            <li>
              <a href="https://green-osaka.com/online/reserve-for-education-donation#i">
                ③贈与者が死亡したら相続税が発生する
              </a>
            </li>
            <li>
              <a href="https://green-osaka.com/online/reserve-for-education-donation#i-2">
                ④毎年領収書を金融機関に提出する必要がある
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://green-osaka.com/online/reserve-for-education-donation#5">
            5章 教育資金贈与を使い残しがあったらどうする？
          </a>
          <ul>
            <li>
              <a href="https://green-osaka.com/online/reserve-for-education-donation#5-1110">
                5-1 110万円超えたら贈与税の対象になる
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://green-osaka.com/online/reserve-for-education-donation#6">
            6章 相続税の対策をしたいなら専門家にご相談を
          </a>
        </li>
      </ul>
      <h2>1章 教育資金贈与は特例を使うことで非課税の対象に！</h2>
      <p>
        子どもの教育費は幼稚園入園から大学卒業までの総額として、約1,000万円〜約2,500万円と莫大なお金がかかると言われています。子どものためにも「可愛い孫の教育資金をサポートしてあげたい」という方は多いのではないでしょうか。
      </p>
      <p>
        お金でのサポートは贈与税を心配される方もいらっしゃるかと思いますが、教育資金贈与は「教育資金非課税贈与制度」（教育資金の一括贈与に係る贈与税非課税措置）を使えば非課税の対象となります。
      </p>
      <p>
        教育資金非課税贈与制度では、孫1人あたり1,500万円までが非課税になるため、その範囲であれば贈与税がかかることなくお金を渡すことができます。
      </p>
      <h3>1-1 教育資金贈与の対象項目</h3>
      <p>そもそも教育資金とは、学費や制服、教科書などの教材など学校に通うにおいて必要な資金のことを指します。</p>
    </div>
  );
};
