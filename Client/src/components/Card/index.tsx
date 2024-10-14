import { Button, Stack, Typography } from "@mui/material";
import lightTheme from "../../theme/light";
import CustomSelect from "../Select";

const NewsCard = () => {
  return (
    <Stack
      className="news-card"
      sx={{
        width: 300,
        maxWidth: 500,
        boxShadow: lightTheme.boxShadows.primary,
        padding: 2,
        borderRadius: "4px",
        gap: 2,
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
          Market: Stock
        </Typography>
        <Stack sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography sx={{ fontSize: 13, textAlign: "end" }}>
            CoinMarketCal
          </Typography>
          <Typography
            sx={{
              fontSize: 11,
              color: "#717171",
              textAlign: "end",
            }}
          >
            1 hour ago
          </Typography>
        </Stack>
      </Stack>
      <Typography sx={{ fontSize: 11, textAlign: "justify", color: "#404040" }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
        }}
      >
        <CustomSelect />
        <Button variant="contained" color="success" size="medium">
          Share
        </Button>
      </Stack>
    </Stack>
  );
};

export default NewsCard;
