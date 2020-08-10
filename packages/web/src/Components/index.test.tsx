import * as library from "..";

const components = [
  "AlertTitle",
  "AppBar",
  "Avatar",
  "Badge",
  "BottomNavigation",
  "BottomNavigationAction",
  "Breadcrumbs",
  "Button",
  "ButtonGroup",
  "Card",
  "CardActionArea",
  "CardActions",
  "CardContent",
  "CardHeader",
  "CardMedia",
  "Checkbox",
  "Chip",
  "CircularProgress",
  "Collapse",
  "Container",
  "ContextualBadge",
  "CssBaseline",
  "Dialog",
  "DialogActions",
  "DialogContent",
  "DialogContentText",
  "DialogTitle",
  "Divider",
  "Drawer",
  "DrawerBody",
  "DrawerFooter",
  "DrawerHeader",
  "DrawerMenu",
  "ExpansionPanel",
  "ExpansionPanelActions",
  "ExpansionPanelDetails",
  "ExpansionPanelSummary",
  "Fab",
  "FormControl",
  "FormHelperText",
  "GridContainer",
  "GridItem",
  "Icon",
  "IconButton",
  "InputLabel",
  "Intro",
  "LinearProgress",
  "Link",
  "List",
  "ListItem",
  "ListItemAvatar",
  "ListItemIcon",
  "ListItemSecondaryAction",
  "ListItemText",
  "ListSubheader",
  "Menu",
  "MenuItem",
  "MenuList",
  "Paper",
  "Popover",
  "Radio",
  "ScopedCssBaseline",
  "Skeleton",
  "Snackbar",
  "SnackbarContent",
  "Switch",
  "TabContainer",
  "TabItem",
  "TextField",
  "ToggleButton",
  "Toolbar",
  "Tooltip",
  "Typography",
];

describe("Library", () => {
  it("exports theme Provider", () => {
    expect(library.Provider).toBeDefined();
  });
  // @ts-ignore
  it.each(components)("exports %p component", (component) => {
    expect(library[component]).toBeDefined();
  });
});
