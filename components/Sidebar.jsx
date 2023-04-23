import React from "react";

const CommunitiesImage = (props) => {
  const { image } = props;
  return (
    <>
      <img
        src={`${image}`}
        alt=""
        className="w-[48px] h-[48px] rounded-[8px] mr-1"
      />
    </>
  );
};
const CommunitiesContent = (props) => {
  const { content, color } = props;
  return (
    <p
      className={`text-[12px] font-[500]  px-[10px] py-[3px] border-[1px]  rounded-[12px] flex items-center my-1 mr-1 border-[${color}] text-[${color}]`}
    >
      {content}
    </p>
  );
};

const Sidebar = () => {
  return (
    <div className="pl-3 pr-6 w-[292px] h-[640px] bg-black rounded-[16px] text-[#a2a2a2] py-4">
      <div className="flex items-center ">
        <div className="flex flex-col items-center">
          <div
            className="w-[72px] h-[72px] rounded-full 
        
          
          
          relative  p-[3px] border-[#f8a9101a] border-[4px] "
          >
            {/* <span></span> */}

            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ad55b5129002333.6161ca5983d3b.jpg"
              alt=""
              className=" rounded-full border-2 "
            />
            {/* <span className="border-overlap"></span> */}
          </div>
          <p className="uppercase bg-[#f8a9101a]  text-[12px] text-[#FFC148]  rounded-xl w-[47px] h-[28px] flex items-center font-bold justify-center my-1">
            lvl 2
          </p>
        </div>
        <div className="mx-4">
          <p className="text-[#ffffff] text-[19px] font-[500] my-1">
            dingaling.eth
          </p>
          <p className="text-[#a2a2a2] font-[400] text-[12px]">Oxadgf...jkld</p>
        </div>
      </div>
      <div className="flex items-center my-5">
        <div className="flex items-center">
          <img
            src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
            alt=""
            className="w-[22.71px] h-[18.46px]"
          />
          <span className="text-[#a2a2a2] text-[12px] px-1">@dingalingts</span>
        </div>
        <span class="material-symbols-outlined text-[#a2a2a2] mx-2">
          language
        </span>
      </div>
      <p className="my-4  text-[14px] pr-4">
        An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner
        of 📦 @nftboxes
      </p>
      <div className="my-6">
        <p className="text-[12px] ">Common communties (3)</p>
        <div className="my-2 flex">
          <CommunitiesImage image="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31" />
          <CommunitiesImage image="https://i.seadn.io/gae/SuPXcvDKA_rp9mcYJzxtrT-Wy_6aGFrs8G0J3ZJXdZ6zmSkkKqjVIHWcm0s6ZzPOXu-i7CnuiN36ZP4_JEe1FLVw2aa_IwR2Gpop2w?auto=format&w=1000" />
          <CommunitiesImage image="https://openseauserdata.com/files/66b3434771521acdb538e491baf37734.jpg" />
          <CommunitiesImage image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8KcyV8Jo_pQ8-A6V5Ucy5vMSb5GiX4yGo_mh8a9K4vbnjndNiqB222KL3E2DMGj0U6mA&usqp=CAU" />
        </div>
      </div>
      <div className="flex flex-wrap my-2">
        <CommunitiesContent content="Art 12%" color="#FFC148" />
        <CommunitiesContent content="Utility 12%" color="#FFC148" />
        <CommunitiesContent content="PFP 12%" color="#A2A2A2" />
        <CommunitiesContent content="Metaverse 12%" color="#A2A2A2" />
        <CommunitiesContent content="Gaming 12%" color="#A2A2A2" />
        <CommunitiesContent content="PFP 12%" color="#A2A2A2" />
        <CommunitiesContent content="ens 12%" color="#A2A2A2" />
      </div>
      <div className="w-[95%] mx-auto border-[#a2a2a2] border-2 flex justify-center py-1 rounded-[16px] text-[white] items-center my-7">
        <button className="  text-[14px] ">Subscribe </button>
        <div className="ml-1">
          <span class="material-symbols-outlined text-[14px]">
            double_arrow
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
