import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Mail from "@mui/icons-material/Mail";
import SearchIcon from '@mui/icons-material/Search';
import {Notifications} from "@mui/icons-material";
import {useState} from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({theme}) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{display: {xs: "none", sm: "block"}}}
        >
          REZTECH
        </Typography>
        <SmartToyIcon sx={{display: {xs: "block", sm: "none"}}} />
        <Search sx={{display:"flex", alignItems:"center", gap:"10px"}}>
          <SearchIcon sx={{color: "gray"}} />
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge
            badgeContent={4}
            color="error"
          >
            <Mail />
          </Badge>
          <Badge
            badgeContent={4}
            color="error"
          >
            <Notifications />
          </Badge>
          <Avatar
            sx={{width: 30, height: 30}}
            src="https://i.imgur.comhttps://i.imgur.com/gqxDbsz.png
            /gqxDbsz.png"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{width: 30, height: 30}}
            src="https://i.imgur.comhttps://i.imgur.com/gqxDbsz.png
          /gqxDbsz.png"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
