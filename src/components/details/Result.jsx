import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chart from "./Chart";

const Result = ({ profileUrl, data, userName, favLang }) => {
  // const [showMore, setShowMore] = useState(false);
  function openInNewTab() {
    console.log('profileUrl', profileUrl)
    var win = window.open(profileUrl, "_blank");
    win.focus();
  }
  return (
    <Box
      sx={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 0,
      }}
    >
      <Box
        sx={{
          mb: 4,
          p: 1,
          border: "1px solid #f1f1f1",
          borderRadius: 1,
          boxShadow: "10px 10px 10px #e1e1e1",
          minWidth: "90%",
        }}
      >
        <Typography
          sx={{ textAlign: "center" }}
          variant="h6"
          component="h5"
        >
          {userName}'s Favourite Language
        </Typography>
        <Typography
          sx={{ width: "100%", textAlign: "center" }}
          variant="h4"
          component="h5"
        >
          {favLang}
        </Typography>
      </Box>
      <Chart data={data} userName={userName} />
      <Box
        sx={{
          
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
        }}
      >
        <Button sx={{width: "100%" }} variant="outlined" onClick={openInNewTab}>
        BitBucket Profile
        </Button>
      </Box>
    </Box>
  );
};

export default Result;
