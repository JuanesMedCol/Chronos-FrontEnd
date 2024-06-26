/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import { Container, Typography, Button } from "@mui/material";
import { carnet } from "react-router-dom";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import imagen from "layouts/welcome/images/imagenn.jpg";
import brandWhite from "assets/images/logo-dark.svg";
import brandDark from "assets/images/logo-light.svg";

function Bienvenida() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div style={{ marginTop: "64px", textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          ¡Bienvenido al sistema de gestion Chronos!
        </Typography>
        <Divider variant="middle" />
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="dark"
                borderRadius="lg"
                dark
              >
                <img src={brandWhite} alt="Logo" style={{ maxWidth: "60%", marginBottom: "20px" }} />
              </MDBox>
        
      </div>
    </DashboardLayout>
  );
}

export default Bienvenida;
