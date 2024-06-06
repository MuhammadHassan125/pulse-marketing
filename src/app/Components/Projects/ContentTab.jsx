'use client';
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";

export default function ContentTab({ tabImage, setTabImage }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTabImage(Number(newValue) - 1);
  };

  const handleNext = () => {
    const newValue = (Number(value) % 3 ) + 1;
    setValue(String(newValue));
    setTabImage(newValue - 1);
  };

  const handlePrevious = () => {
    const newValue = (Number(value) - 2 + 3 ) % 3 + 1;
    setValue(String(newValue));
    setTabImage(newValue - 1);
  };

  return (
    <Box
      sx={{
        width: "70%",
        typography: "body1",
        transform: { xs: "none", sm: "none", md: "translateX(100px)" },
      }}
    >
      <TabContext value={value}>
        <TabPanel value="1">
          <main className="w-full">
            <div className="justify-between items-center">
              <div className="w-[100%] justify-center items-center">
                <h3 className="text-[#50A2D4] poppins-medium text-[20px]">01</h3>
                <h1 className="poppins-medium text-4xl">The Monster</h1>
              </div>
              <div className="w-[100%]">
                <p className="poppins-light font-light text-[14px] my-3">
                  Discover a world of music with Monster Music! Stream your favorite songs, create custom playlists, and explore new tunes with ease. Enjoy high-quality sound and a user-friendly interface. Download now and unleash the music monster in you!
                </p>
              </div>
            </div>
          </main>
        </TabPanel>

        <TabPanel value="2">
          <main className="w-full">
            <div className="justify-between items-center">
              <div className="w-[100%] justify-center items-center">
                <h3 className="text-[#50A2D4] poppins-medium text-[20px]">02</h3>
                <h1 className="poppins-medium text-4xl">Food App</h1>
              </div>
              <div className="w-[100%]">
                <p className="poppins-light font-light text-[14px] my-3">
                Discover a world of culinary delights with our Food app! Browse thousands of recipes, order delicious meals from top restaurants, and explore local flavors. With user-friendly features and quick delivery options, satisfy your cravings effortlessly. Download now and embark on a mouthwatering journey!
                </p>
              </div>
              
            </div>
          </main>
        </TabPanel>

        <TabPanel value="3">
          <main className="w-full">
            <div className="justify-between items-center">
              <div className="w-[100%] justify-center items-center">
                <h3 className="text-[#50A2D4] poppins-medium text-[20px]">03</h3>
                <h1 className="poppins-medium text-4xl">Fintech App</h1>
              </div>
              <div className="w-[100%]">
                <p className="poppins-light font-light text-[14px] my-3">
                Manage your finances effortlessly with our Fintech app! Track expenses, budget smartly, and make secure transactions. Enjoy real-time updates, personalized insights, and easy-to-use features designed to help you achieve your financial goals. Download now and take control of your financial future!
                </p>
              </div>
            </div>
          </main>
        </TabPanel>

        {/* <TabPanel value="4">
          <main className="w-full">
            <div className="justify-between items-center">
              <div className="w-[100%] justify-center items-center">
                <h3 className="text-[#50A2D4] poppins-medium text-[20px]">04</h3>
                <h1 className="poppins-medium text-4xl">Hassan</h1>
              </div>
              <div className="w-[100%]">
                <p className="poppins-light font-light text-[14px] my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </p>
              </div>
            </div>
          </main>
        </TabPanel>

        <TabPanel value="5">
          <main className="w-full">
            <div className="justify-between items-center">
              <div className="w-[100%] justify-center items-center">
                <h3 className="text-[#50A2D4] poppins-medium text-[20px]">05</h3>
                <h1 className="poppins-medium text-4xl">Another Tab</h1>
              </div>
              <div className="w-[100%]">
                <p className="poppins-light font-light text-[14px] my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </p>
              </div>
            </div>
          </main>
        </TabPanel> */}

        <Box sx={{ borderBottom: 1, borderColor: "divider #fffff" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#ffffff",
              },
              fontFamily: "Poppins",
            }}
          >
            <Tab
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IoMdArrowBack style={{ marginRight: 8 }} />
                  <span className="text-[12px] poppins-light">Previous</span>
                </Box>
              }
              onClick={handlePrevious}
              value="prev"
              sx={{
                color: "#050023",
                "&.Mui-selected": {
                  color: "#050023",
                  fontFamily: "Poppins",
                },
              }}
            />
            <Tab
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <span className="text-[12px] poppins-light text-[#050023]">Next</span>
                  <IoMdArrowForward style={{ marginLeft: 8, color:'#050023' }} />
                </Box>
              }
              onClick={handleNext}
              value="next"
              sx={{
                color: "#ffffff",
                "&.Mui-selected": {
                  color: "#ffffff",
                  fontFamily: "Poppins",
                  fontSize: "12px"
                },
              }}
            />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}