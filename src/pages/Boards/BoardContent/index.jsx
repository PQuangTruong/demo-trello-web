import { Box } from "@mui/material";

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) =>
          `calc(100% - (${theme.size.navBarHeight} + ${theme.size.boardBarHeight}))`,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      Content
    </Box>
  );
}

export default BoardContent
