import { Box, Button, Grid, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import OD1 from "../../assets/Directors/1.jpg";
import OD2 from "../../assets/Directors/2.jpg";

const AboutUs = ({ isMobile, isLaptop }) => {
  const ODArray = [
    {
      name: "Ajay Roy",
      image: OD2,
      description:
        "Ajay Roy is Co-founder, Chairman, Promoter and Managing Director of Bravit Pharmaceuticals Private Limited.  Having been associated with healthcare and pharmaceutical industry since last 28 years, he still believes in constant learning, educate himself, and stay calm when facing any adversity.  He always has a focus on crisis management and takes quality decisions, excel execution of ideas, speaks with technocrats and experts, motivates people and gets support of co-workers.  He believes in creating opportunity for others, enjoys meeting new people and listens to new perspectives.  He always believes in forming a skilled team and work together for the betterment of every individual.",
      width: "300px",
      height: "300px",
    },
    {
      name: "Rajshree Roy",
      image: OD1,
      description:
        "Rajshree Roy is founder, promoter, CEO and Director of Bravit Pharmaceuticals Private Limted.  She is the youngest female enterpreneur at the age of 19.  She believes in converting thought and passion into a practice and practical approach.  With an intutive understanding of female health and hygiene issues and commonly overlooked problems, she chose to work on female health and hygiene sector and is paving the way and setting an example for other female entrepreneurs to come forward and work for mutual growth.  Since she believes and has a faith in working as a team, she looks forward for the upliftment of the socio-economic challenges of women and the society as a whole.",
      width: "300px",
      height: "300px",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          maxWidth: "80%",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          padding: isMobile ? "10px 0px" : "40px 0px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bolder",
            padding: isMobile ? "10px 0px" : "40px 0px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: isMobile ? "30px" : "60px",
            color: "#310a10",
          }}
        >
          OUR DIRECTORS
        </Typography>
      </Box>
      <Box sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        {ODArray?.map((item, i) => (
          <>
            <Box
              sx={{
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                padding: isMobile ? "10px 0px 0px 0px" : "40px 0px 0px 0px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bolder",
                  padding: isMobile ? "10px 0px" : "40px 0px",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: isMobile ? "20px" : "40px",
                  color: "#310a10",
                }}
              >
                {item.name}
              </Typography>
            </Box>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ sm: 2, md: 3 }}
              key={i}
              sx={{
                display: "flex",
                flexDirection: i % 2 === 0 ? "row-reverse" : "row",
                justifyContent: "center",
                alignItems: "center",
                // margin: "20px 0px",
                backgroundColor: "#ffffe6",
                padding: "10px",
                border: `1px solid #310a10`,
                boxShadow: `10px 10px #310a10`,
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                lg={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                lg={8}
                sx={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {isMobile ? (
                  <>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        color: "#310a10",
                        fontSize: "16px",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "bold",
                        color: "#310a10",
                        fontSize: isLaptop ? "18px" : "26px",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </>
                )}
              </Grid>
            </Grid>
          </>
        ))}
        <Box
          sx={{
            maxWidth: "80%",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            padding: isMobile ? "10px 0px" : "40px 0px",
          }}
        >
          <a
            href="https://drive.google.com/file/d/1gViOenf1wgYhR1jLA6Bsl1lGt1CrkLRW/view?usp=sharing"
            download="bravitpharmaceuticals"
            style={{ courser: "pointer" }}
            target="_blank"
            rel="noreferrer"
          >
            <HeroButton
              variant="outlined"
              sx={{ fontSize: isMobile ? "16px" : "26px" }}
            >
              View our company profile here
            </HeroButton>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;

const HeroButton = styled(Button)({
  boxShadow: "none",
  margin: "25px auto",
  border: "1px solid",
  lineHeight: 1.5,
  color: "#ffffe6",
  backgroundColor: "#311a10",
  borderColor: "#e6e6e6",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#ffffe6",
    borderColor: "#310a10",
    color: "#310a10",
    boxShadow: "none",
  },
});
