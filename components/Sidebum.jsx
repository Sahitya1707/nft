import React from "react";

const Profile = (props) => {
  const { name, number } = props;
  return (
    <div className="flex justify-between  text-[12px]  font-[500]">
      <p className="text-[#A2A2A2] ">{name}</p>
      <div className="text-[white] flex items-center">
        <p>{number}</p>
        <span
          class="material-symbols-outlined text-[12px] pl-1"
          id="google-font"
        >
          change_history
        </span>
      </div>
    </div>
  );
};

const TimePx = (props) => {
  const { time, px, pxNumber } = props;
  return (
    <div className="flex justify-between mt-1 text-[12px]  font-[400]">
      <p className="text-[#A2A2A2] ">{time}</p>
      <div className="flex">
        {pxNumber ? (
          <p className="text-[white]">
            {pxNumber}
            <span
              class="material-symbols-outlined text-[12px] px-2"
              id="google-font"
            >
              change_history
            </span>
          </p>
        ) : null}

        <p className="text-[#19ed78] ">{px}</p>
      </div>
    </div>
  );
};

const HighlightsCard = (props) => {
  const { image, title, color, detail, profile, number, time, px, icon } =
    props;
  return (
    <div
      className="relative w-[201px] h-[148px] bg-[black]
          rounded-[16px] py-2 px-2 mr-3"
    >
      {/* <div className="bg-[#ff000053] top-0 w-[50%] absolute h-[50%] left-0 rounded-tr-[16px] rounded-tl-[16px]"></div> */}
      <div className="flex">
        <img
          src={`${image}`}
          alt=""
          className={`w-[52px] h-[52px] rounded-[8px] shadow-[10px_12px_30px_20px_${color}2b]`}
        />
        <div className="mx-2 mb-8">
          <p className={`text-[white] text-[14px] font-[500]`}>{title}</p>
          <p className={`text-[${color}] text-[12px] font-[400] px-2 my-1`}>
            {detail}
          </p>
        </div>
      </div>
      {/* <div className="flex justify-between  text-[12px]  font-[500]">
        <p className="text-[#A2A2A2] ">dinglaing.eth</p>
        <div className="text-[white] flex items-center">
          <p>1.82</p>
          <span class="material-symbols-outlined text-[12px] pl-1">
            change_history
          </span>
        </div>
      </div> */}
      <Profile name={profile} number={number} /> <TimePx time={time} px={px} />
    </div>
  );
};
const CardProfile = (props) => {
  const { image, time, profieId, number, px, pxNumber } = props;
  return (
    <div className="relative pt-[3px] pb-[5px] px-[4px]  bg-[#111111] w-[201px] h-[305px] rounded-[8px] mr-2">
      <img
        src={`${image}`}
        alt=""
        className="w-[193px] h-[193px] rounded-[4px]   mx-auto"
      />
      <p className="absolute text-[#ffffff] text-[12px] right-[8px] top-[171px] font-[500] bg-[#00000080] px-2 rounded-[31px] py-[1px]">
        {" "}
        {time}
      </p>
      <div className="mx-2">
        <p className="font-[500] text-[14px] text-[white]  my-2">{profieId}</p>
        <Profile name="Bought" number={`${number}`} />
        <TimePx time="Floor" px={`${px}`} pxNumber={`${pxNumber}`} />
      </div>
    </div>
  );
};

const Sidebum = () => {
  return (
    <div className="w-[1070px] mx-10">
      <div className="w-[100%] h-[200px]">
        <p className="text-[#a2a2a2] font-[500] text-[14px]">Highlights</p>
        <div className="mt-5 flex">
          <HighlightsCard
            image="https://www.pngfind.com/pngs/m/45-455802_sa-logo-png-transparent-png.png"
            title="ENS Linked"
            detail="ENS Linked"
            color="#4bdfff"
            profile="dingaling.eth"
            number="1.83"
            time="2 months ago"
            px="+200xp"
          />
          <HighlightsCard
            image="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/01/14121356/mutant-975x1024-1-1.jpeg"
            title="Best Flip"
            detail="sold"
            color="#ffc148"
            profile="CryptoPunk #2131"
            number="98.5"
            time="10 days ago"
            px="+150xp"
          />
          <HighlightsCard
            image="https://fortunescrown.com/wp-content/uploads/2022/03/NFTs.jpg"
            title="Should have..."
            detail="Mint"
            color="#44FFC8"
            profile="Rare Apepe #6974"
            number="98.5"
            time="10 days ago"
            px="+200xp"
          />
          <HighlightsCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxizcBdYdiyhkYjm9D-1EAUNtW65m3RdhJYpEWhHcVhne6EMzo4YUoy2Yk66o0Se4D7GA&usqp=CAU"
            title="First NFT bought"
            detail="Bought"
            color="#4BDFFF"
            profile="BAYC #7925"
            number="98.5"
            time="2 months ago"
            px="+10xp"
          />
          <HighlightsCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6EZzsVfsMNQJlzPYMFuJPZNI0Z2YDXA_eaVZ_RQ10oq99H7nP0TmgonsmBDP913-9dM&usqp=CAU"
            title="Paper Handed"
            detail="Sold"
            color="#44FFC8"
            profile="Moonbird #7866"
            number="98.5"
            time="10 days ago"
            px="+200xp"
          />
        </div>
      </div>
      <div className="w-[100%] flex mt-10">
        <CardProfile
          image="https://i.pinimg.com/736x/d7/f3/2e/d7f32e6c302205c45f082e6de141ef00.jpg"
          time="3 Months"
          profieId="#Azuki #9839"
          number="02.82"
          px="+21.6%"
          pxNumber="12.74"
        />
        <CardProfile
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPs0DlFMQ4i10wY1BFVvnh54Xi5sriVWBQNaNJ4K2LqexSybBXy7qQKk9T1teHEBvOu_0&usqp=CAU"
          time="3 Months"
          profieId="#MAYC #9839"
          number="02.89"
          px="+21.6%"
          pxNumber="12.74"
        />
        <CardProfile
          image="https://pbs.twimg.com/tweet_video_thumb/FIy5SNEWQAAeEX9.jpg"
          time="3 Months"
          profieId="#MoonBirds #9839"
          number="02.82"
          px="+21.6%"
          pxNumber="12.74"
        />
        <CardProfile
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUZfgikF0MuClm3_po73PYvJUXGofVLxQa76VBKMBdYwNbUW3H6_5SG8nepOwMhBvzeQ&usqp=CAU"
          time="3 Months"
          profieId="Otherdeed #9839"
          number="02.82"
          px="+21.6%"
          pxNumber="12.74"
        />
        <CardProfile
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjJsNuMmanxJrvEPsFb389gGSq0JEXhmAX2D5YQx6gC2a0Ux-l6VelDUnp9iI6V8Qf9o&usqp=CAU"
          time="3 Months"
          profieId="Cryptoz #9839"
          number="02.82"
          px="+21.6%"
          pxNumber="12.74"
        />
      </div>
    </div>
  );
};

export default Sidebum;
