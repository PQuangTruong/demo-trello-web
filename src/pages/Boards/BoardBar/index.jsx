import { Box, Button, Tooltip } from '@mui/material';
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import PersonAddIcon from "@mui/icons-material/PersonAdd";


const Chip__Style = {
    color: "primary.main",
    backgroundColor: "white",
    border: "none",
    px: '5px',
    borderRadius: "5px",
    "& .MuiSvgIcon-root": {
      color: "primary.main",
    },
    "&:hover": {
      bgcolor: "primary.50",
    },
};
function BoardBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.size.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "auto",
        gap: 2,
        borderTop: "1px solid teal",
        px: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          icon={<DashboardIcon />}
          label="Board"
          clickable
          sx={Chip__Style}
        />

        <Chip
          icon={<StarPurple500Icon />}
          label="Team Board"
          clickable
          sx={Chip__Style}
        />

        <Chip
          icon={<AddToDriveIcon />}
          label="Add to Drive"
          clickable
          sx={Chip__Style}
        />

        <Chip
          icon={<TipsAndUpdatesIcon />}
          label="Automation"
          clickable
          sx={Chip__Style}
        />

        <Chip
          icon={<FilterAltIcon />}
          label="Filter"
          clickable
          sx={Chip__Style}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon/>}>Invite</Button>
        <AvatarGroup
          max={8}
          total={10}
          sx={{
            "& .MuiAvatar-root": {
              width: "30px",
              height: "30px",
              fontSize: "16px",
            },
          }}
        >
          <Tooltip title="Trevor Henderson">
            <Avatar
              alt="Trevor Henderson"
              src="https://64.media.tumblr.com/8306fa0969e79ae6571956cb696bd78d/d640cbe70fde9ac7-bc/s2048x3072/259599bcc359860ba03d42913dacaa6094efdcf1.jpg"
            />
          </Tooltip>
          <Tooltip title="Trevor Henderson">
            <Avatar
              alt="Trevor Henderson"
              src="https://static.lag.vn/upload/news/23/12/19/top-waifu-anime-duoc-yeu-thich-nhat-2023-2_COHB.jpg?w=1200&h=800&crop=pad&scale=both&encoder=wic&subsampling=444"
            />
          </Tooltip>
          <Tooltip title="Trevor Henderson">
            <Avatar
              alt="Trevor Henderson"
              src="https://ih1.redbubble.net/image.5332338833.5406/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg"
            />
          </Tooltip>
          <Tooltip title="Trevor Henderson">
            <Avatar
              alt="Trevor Henderson"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5nxW1HAuoBgvZIZWNkSAphewHAi8VmnxWOyW847BIxB2f3wg-xGnw4UvUGeURWDRsvU&usqp=CAU"
            />
          </Tooltip>
          <Tooltip title="Trevor Henderson">
            <Avatar
              alt="Trevor Henderson"
              src="https://i.ytimg.com/vi/_wTuYlmn1fE/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLAogG5_-OrXU8K70SjPRVN9DCBlKQ"
            />
          </Tooltip>
          <Tooltip title="Trevor Henderson">
            <Avatar
              alt="Trevor Henderson"
              src="https://gamek.mediacdn.vn/zoom/600_315/133514250583805952/2023/12/7/avatar1701924503303-17019245037761784092386.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}


export default BoardBar

