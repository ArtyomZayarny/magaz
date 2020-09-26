import React from 'react';
import clsx from "clsx";
import Button from '@material-ui/core/Button';
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ShopIcon from "@material-ui/icons/Shop";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    },
    burger: {
        color:"#fff"
    }
  });

export default function Navigation() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      left: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom"
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
            <Link to="/">
                <ListItem button>
                    <ListItemIcon>
                    <ShopIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Catalog"} />
                </ListItem>
            </Link>
          <Link to="/add">
            <ListItem button>
                <ListItemIcon>
                <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary={"Add Product"} />
            </ListItem>
          </Link>
        </List>
      </div>
    );
    return (
        <>
            <Button onClick={toggleDrawer("left", true)}>
                <MenuIcon className={classes.burger} />
            </Button>
            <SwipeableDrawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
            >
                {list("left")}
            </SwipeableDrawer>
        </>
    )
}