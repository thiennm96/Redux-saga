const styles = (theme) => ({
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: theme.shadows[5],
    borderRadius: 10,
  },
  header: {
    color: theme.pallete.textColor,
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 700,
    textTransform: 'capitalize',
  },
  icon: {
    cursor: 'pointer',
  },
  content: {
    padding: theme.spacing(2),
  },
});

export default styles;
