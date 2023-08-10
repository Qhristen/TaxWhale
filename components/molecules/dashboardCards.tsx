import React from "react";
import Card from "./card";


  
const DashboardCards = () => {
  return (
    <div className="flex justify-between gap-2 pt-3 lg:flex-nowrap md:flex-wrap flex-wrap">
      <Card icon="images/fluent_wallet-credit-card-24-regular-green.svg" title="Wallet Assets" amount={265} />
      <Card icon="images/la_piggy-bank.svg" title="Deposit" amount={33} />
      <Card icon="images/bi_send-dash.svg" title="Withdrawal" amount={25} />
      <Card icon="images/mingcute_exchange-bitcoin-2-fill.svg" title="Trades" amount={658} />
      <Card icon="images/simple-icons_codereview.svg" title="Reviews" amount={20} />
      <Card icon="images/icon-park-outline_exchange-three.svg" title="Accounts" amount={76}/>
    </div>
  );
};

export default DashboardCards;
