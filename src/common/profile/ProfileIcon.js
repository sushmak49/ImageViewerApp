import React from 'react';
import { Avatar, IconButton, Menu, MenuItem, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProfileImage from '../../assets/profile-pic.jpg';

const useStyles = makeStyles({
    userAvatar: {
        border: 0,
        padding: 0,
        margin: 0
    },
    menuItemSeparator: {
        marginLeft: "15px",
        marginRight: "15px"
    }
});

// Generic Profile Avatar Component
export default function ProfileIcon(props) {
    const [anchor, setAnchor] = React.useState(null);
    const classes = useStyles();
    // Handler to open profile menu(if any)
    const handleOpen = (event) => {
        setAnchor(event.currentTarget);
    }

    // Handler method to close profile menu (if any)
    const handleClose = (handler) => {
        setAnchor(null);
    }
    return (
        <div>
            {(() => {
                if (props.type === "avatarWithMenu") {
                    return (<div>
                        <IconButton className={classes.userAvatar} onClick={handleOpen}>
                            <Avatar alt="AS" src={ProfileImage} />
                        </IconButton>
                        <Menu id="profile-menu" anchorEl={anchor} keepMounted open={Boolean(anchor)}
                            onClose={handleClose}>
                            {props.menuOptions.map((menuItem, index) => (
                                <div key={"menu-item-" + index} >
                                    <MenuItem onClick={props.handlers[index]}>{menuItem}</MenuItem>
                                    {(index < props.menuOptions.length - 1) ? <Divider className={classes.menuItemSeparator} /> : ""}
                                </div>
                            ))}

                        </Menu></div>
                    );
                } else {
                    return (
                        
                            <Avatar alt="AS" src={ProfileImage} />
                    );
                }
            })()
            }
        </div>

    );
}