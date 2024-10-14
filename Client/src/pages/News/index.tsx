import { Stack, Typography } from "@mui/material";
import NewsCard from "../../components/Card";

const LatestNews = () => {
  return (
    <Stack sx={{ gap: 4 }}>
      <Typography sx={{ fontSize: 24, fontWeight: 500 }}>
        Lastest News
      </Typography>
      <Stack
        sx={{ display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap" }}
      >
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Stack>
    </Stack>
  );
};

export default LatestNews;
