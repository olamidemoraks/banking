import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Olamide",
    lastName: "Morakinyo",
    email: "olamidemoraks@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type={"greeting"}
            title="Welcome"
            user={loggedIn.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        Recent transaction
      </div>
      <RightSidebar
        user={loggedIn}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 123.5 }]}
        transactions={[]}
      />
    </section>
  );
};

export default Home;
