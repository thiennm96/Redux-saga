const styles = (theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row', // default: row
    height: '100vh',
  },
  wrapperContent: {
    width: '100%',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  shiftLeft: {
    marginLeft: -240,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});
export default styles;
