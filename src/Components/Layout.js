import Container from "@mui/material/Container";

const Layout = ({ xs, sm, md, lg, children }) => {
  return (
    <Container
      sx={{
        marginY: 3,
        width: {
          xs: xs, 
          sm: sm, 
          md: md, 
          lg: lg,
        },
        maxHeight: "100vh",
      }}
    >
      {children}
    </Container>
  );
};

export default Layout;