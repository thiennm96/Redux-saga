const styles = (theme) => ({
  drawerPaper: {
    width: 240,
    maxWidth: 240,
    zIndex: 10,
    height: '100%',
    position: 'relative',
  },
  menuLink: {
    textDecoration: 'none',
    color: theme.pallete.primary,
  },
  menuLinkActive: {
    '&>div': {
      backgroundColor: theme.pallete.hover,
    },
  },

});
export default styles;
