import React from "react";
import LineChartCard from "./LineChartCard";
import { dummyData } from "../../utils/dummyData";
import BarChartCard from "./BarChartCard";
import pic from "../../assets/user.png";
import { Avatar } from "@mui/material";
import { BsChevronRight } from "react-icons/bs";
import TransactionsTable from "./TransactionsTable";

const Dashboard = () => {
  const investors = [
    "Hamza Siddique",
    "Hamza Siddique",
    "Hamza Siddique",
    "Hamza Siddique",
    "Hamza Siddique",
    "Hamza Siddique",
    "Hamza Siddique",
  ];

  return (
    <div className="w-full flex-col">
      <p className="text-[#11142D] font-bold text-[20px] mb-4 lg:text-[38px]">
        Welcome back👋
      </p>
      <div className="flex flex-col mb-4 lg:flex-row justify-between gap-3 border-[1px] p-4 border-[#EDF2F7] rounded-2xl">
        <div className="w-full lg:w-1/3 flex items-center lg:border-r-[1px] lg:border-r-[#EDEDED] lg:border-b-0 border-b-[1px] border-b-[#EDEDED] border-r-0  justify-around">
          <div className="flex flex-col gap-1 ">
            <p className="text-[#8A9099] text-[15px]">Merchants</p>
            <p className="text-[#3F434A] text-[30px] font-semibold ">100</p>
          </div>
          <LineChartCard
            data={dummyData}
            tooltipTitle="Title"
            strokeColor="#304FFD"
          />
        </div>
        <div className="w-full lg:w-1/3 flex items-center lg:border-r-[1px] lg:border-r-[#EDEDED] lg:border-b-0 border-b-[1px] border-b-[#EDEDED] border-r-0  justify-around">
          <div className="flex flex-col gap-1 ">
            <p className="text-[#8A9099] text-[15px]">Investors</p>
            <p className="text-[#3F434A] text-[30px] font-semibold ">200</p>
          </div>
          <LineChartCard
            data={dummyData}
            tooltipTitle="Title"
            strokeColor="#304FFD"
          />
        </div>
        <div className="w-full lg:w-1/3 flex items-center  justify-around">
          <div className="flex flex-col gap-1 ">
            <p className="text-[#8A9099] text-[15px]">Transactions</p>
            <p className="text-[#3F434A] text-[30px] font-semibold ">1500</p>
          </div>
          <LineChartCard
            data={dummyData}
            tooltipTitle="Title"
            strokeColor="#304FFD"
          />
        </div>
      </div>

      <div className="w-full flex flex-col mb-4 lg:flex-row  justify-between">
        <div className="w-full lg:w-2/3 border-[#EDF2F7] border-[1px] rounded-[16px] p-[24px] lg:mr-2 lg:mb-0 mb-3">
          <div className="flex">
            <p className="text-[20px] text-[#3F434A] font-bold">Statistics</p>
          </div>

          <div>
            <BarChartCard />
          </div>
        </div>
        <div className="w-full flex flex-col lg:w-1/3 border-[#EDF2F7] border-[1px] rounded-[16px]">
          <div className="p-4 border-b-[1px] border-b-[#EDEDED]">
            <p className="text-[#3F434A] text-[20px] font-bold">
              Top Investors
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4 overflow-y-scroll h-[270px]">
            {investors.map((val, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center justify-start p-2 gap-2"
                >
                  <Avatar alt="hamza" src={pic} />
                  <p className="text-[#3F434A] text-[15px] font-bold ">{val}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row  justify-between">
        <div className="w-full border-[#EDF2F7] border-[1px] rounded-[16px] p-[24px] lg:mr-2 lg:mb-0 mb-3">
          <div className="flex items-center justify-between">
            <p className="text-[20px] text-[#3F434A] font-bold">
              Latest Transactions
            </p>
            <button className="bg-[#FAFAFA] flex items-center gap-3 p-3 text-[#1A202C] text-xs rounded-[4px]">
              View All{" "}
              <span className="text-[#1A202C] text-xs">
                <BsChevronRight />
              </span>
            </button>
          </div>

          <div>
            <TransactionsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
