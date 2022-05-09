import React from "react";
import Footer from "../../Components/Footer/Footer";
import FooterLine from "../../Components/Footer/FooterLine";
import Navbar from "../../Components/Navbar/Navbar";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const privacy_policy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const PolicyTitle = "Privacy Policy";
  return (
    <>
      <Navbar />
      <Box sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bolder",
            padding: "40px 0px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: isMobile ? "30px" : "60px",
            color: "#310a10",
          }}
        >
          {PolicyTitle}
        </Typography>
        <Box>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              paddingBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
              color: "#310a10",
              fontWeight: "bold",
            }}
          >
            Last Updated: 29 April, 2022
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            We take care and value for the trust you have in us and identify the
            importance of secure transactions and business information privacy.
            This privacy policy describes how Bravit Pharmaceuticals Private
            Limited and its affiliates collect, use, share or otherwise process
            your personal information through Bravit website
            www.bravitpharmaceuticals.com. Simultaneously, this is to inform you
            that by visiting and browsing the website, providing your valuable
            information or availing our product/service, you expressly agree to
            be bound by the terms and conditions of this privacy policy, terms
            of use and the applicable service/product terms and conditions. If
            you do not agree, please do not access or use our website.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              paddingBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
              color: "#310a10",
              fontWeight: "bold",
            }}
          >
            Collection of Your Information
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            When you use our website, we collect and store your information
            which is provided by you from time to time. In general, you can
            browse the website without telling us who you are or revealing any
            personal information about yourself. Once you give us your personal
            information, you are not anonymous to us. Whatever and wherever
            possible, we indicate which fields are required and which fields are
            optional. You always have the option to not provide information by
            choosing not to use a particular service, product or feature on the
            website. We may track your buying behavior, preferences, and other
            information that you choose to provide on our website. We use this
            information to do internal research on our users' demographics,
            interests, and behavior to better understand, protect and serve our
            users. This information is compiled and analyzed on an aggregated
            basis. This information may include the URL that you just came from
            (whether this URL is on our website or not), which URL you next go
            to (whether this URL is on our website or not), your computer
            browser information, and your IP address. We collect personal
            information (such as email address, delivery address, name, phone
            number, credit card/debit card and other payment instrument details)
            from you when you set up an account or transact with us. While you
            can browse some sections of our website without being a registered
            member, certain activities (such as placing an order or consuming
            our online content or services) do require registration. We do use
            your contact information to send you offers based on your previous
            orders and your interests. If you choose to post messages on our
            message boards, chat rooms or other message areas or leave feedback
            or if you use voice commands to shop on the website, we will collect
            that information you provide to us. We retain this information as
            necessary to resolve disputes, provide customer support and
            troubleshoot problems as permitted by law. If you send us personal
            correspondence, such as emails or letters, or if other users or
            third parties send us correspondence about your activities or
            postings on the website, we may collect such information into a file
            specific to you.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              paddingBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
              color: "#310a10",
              fontWeight: "bold",
            }}
          >
            Use of Demographic / Profile Data / Your Information
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            {`We use your personal information to provide the product and services you request. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses. We use your personal information to assist sellers and business partners in handling and fulfilling orders; enhancing customer experience; resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure consumer interest in our products and services; inform you about online and offline offers, products, services, and updates; customize and enhance your experience; detect and protect us against error, fraud and other criminal activity; enforce our terms and conditions; and as otherwise described to you at the time of collection of information.  With your consent, we will have access to your SMS, contacts in your directory, location and device information. We may also request you to provide your PAN, GST Number, government issued ID cards/number and Know-Your-Customer (KYC) details to check your eligibility for certain products and services including but not limited to credit and payment products, issue GST invoice for the products and services purchased for your business requirements, enhance your experience on the website and provide you access to the products and services being offered by us, sellers, affiliates or lending partners. You understand that your access to these products/services may be affected in the event consent is not provided to us.  In our efforts to continually improve our product and service offerings, we and our affiliates collect and analyze demographic and profile data about our users' activity on our website. We identify and use your IP address to help diagnose problems with our server, and to administer our website. Your IP address is also used to help identify you and to gather broad demographic information.  We will occasionally ask you to participate in optional surveys conducted either by us or through a third party market research agency. These surveys may ask you for personal information, contact information, date of birth, demographic information like zip code, age, or income level, attributes such as your interests, household or lifestyle information, your purchasing behavior or history, preferences, and other such information that you may choose to provide. The surveys may involve collection of voice data or video recordings, the participation of which would purely be voluntary in nature. We use this data to tailor your experience at our website, providing you with content that we think you might be interested in and to display content according to your preferences.`}
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              paddingBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
              color: "#310a10",
              fontWeight: "bold",
            }}
          >
            Cookies
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            We use data collection devices such as "cookies" on certain pages of
            the website to help analyze our web page flow, measure promotional
            effectiveness, and promote trust and safety. "Cookies" are small
            files placed on your hard drive that assist us in providing our
            services. Cookies do not contain any of your personal information.
            We offer certain features that are only available through the use of
            a "cookie". We also use cookies to allow you to enter your password
            less frequently during a session. Cookies can also help us provide
            information that is targeted to your interests. Most cookies are
            "session cookies," meaning that they are automatically deleted from
            your hard drive at the end of a session. You are always free to
            decline/delete our cookies if your browser permits, although in that
            case you may not be able to use certain features on the website and
            you may be required to re-enter your password more frequently during
            a session. Additionally, you may encounter "cookies" or other
            similar devices on certain pages of the website that are placed by
            third parties. We do not control the use of cookies by third
            parties. We use cookies from third-party partners such as google
            analytics for marketing and analytical purposes. Google analytics
            help us understand how our customers use the site. You can read more
            about how google uses your personal information.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              paddingBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
              color: "#310a10",
              fontWeight: "bold",
            }}
          >
            Sharing of personal information
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            We may share personal information with our other corporate entities
            and affiliates for purposes of providing products and services
            offered by them. These entities and affiliates may share such
            information with their affiliates, business partners and other third
            parties for the purpose of providing you their products and
            services, and may market to you as a result of such sharing unless
            you explicitly opt-out.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            We may disclose your personal information to third parties, such as
            sellers, business partners. This disclosure may be required for us
            to provide you access to our products and services; for fulfilment
            of your orders; for enhancing your experience; for providing
            feedback on products; to collect payments from you; to comply with
            our legal obligations; to conduct market research or surveys; to
            enforce our terms of use; to facilitate our marketing and
            advertising activities; to analyze data; for customer service
            assistance; to prevent, detect, mitigate, and investigate fraudulent
            or illegal activities related to our product and services. We do not
            disclose your personal information to third parties for their
            marketing and advertising purposes without your explicit consent. We
            may disclose personal information if required to do so by law or in
            the good faith belief that such disclosure is reasonably necessary
            to respond to subpoenas, court orders, or other legal process. We
            may disclose personal information to law enforcement agencies, third
            party rights owners, or others in the good faith belief that such
            disclosure is reasonably necessary to: enforce our terms of use or
            privacy policy; respond to claims that an advertisement, posting or
            other content violates the rights of a third party; or protect the
            rights, property or personal safety of our users or the general
            public. We and our affiliates will share / sell some or all of your
            personal information with another business entity should we (or our
            assets) plan to merge with, or be acquired by that business entity,
            or re-organization, amalgamation, restructuring of business. Should
            such a transaction occur that other business entity (or the new
            combined entity) will be required to follow this privacy policy with
            respect to your personal information.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              paddingBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
              color: "#310a10",
              fontWeight: "bold",
            }}
          >
            Links to Other Sites
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            Our website may provide links to other websites or application that
            may collect personal information about you. We are not responsible
            for the privacy practices or the content of those linked websites.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              paddingBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
              color: "#310a10",
              fontWeight: "bold",
            }}
          >
            Security Precautions
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            We maintain reasonable physical, electronic and procedural
            safeguards to protect your information. Whenever you access your
            account information, we offer the use of a secure server. Once your
            information is in our possession, we adhere to our security
            guidelines to protect it against unauthorized access; however by
            using the website, the users accept the inherent security
            implications of data transmission over the internet and the world
            wide web which cannot always be guaranteed as completely secure, and
            therefore, there would always remain certain inherent risks
            regarding use of the website. Users are responsible for ensuring the
            protection of login and password records for their account.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              paddingBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
              color: "#310a10",
              fontWeight: "bold",
            }}
          >
            Advertisements on website
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            We use third-party advertising companies to serve ads when you visit
            our platform. These companies may use information (not including
            your name, address, email address, or telephone number) about your
            visits to this and other websites in order to provide advertisements
            about goods and services of interest to you.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              paddingBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
              color: "#310a10",
              fontWeight: "bold",
            }}
          >
            Children Information
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            We do not knowingly solicit or collect personal information from
            children under the age of 18 and use of our website is available
            only to persons who can form a legally binding contract under the
            Indian Contract Act, 1872. If you are under the age of 18 years then
            you must use the website, application or services under the
            supervision of your parent, legal guardian, or any responsible
            adult.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              paddingBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
              color: "#310a10",
              fontWeight: "bold",
            }}
          >
            Data Retention
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            We retain your personal information in accordance with applicable
            laws, for a period no longer than is required for the purpose for
            which it was collected or as required under any applicable law.
            However, we may retain data related to you if we believe it may be
            necessary to prevent fraud or future abuse or if required by law or
            for other legitimate purposes. We may continue to retain your data
            in anonymized form for analytical and research purposes.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              paddingBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
              color: "#310a10",
              fontWeight: "bold",
            }}
          >
            Your point of view
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            By visiting our website or by providing your information, you
            consent to the collection, use, storage, disclosure and otherwise
            processing of your information (including sensitive personal
            information) on the website in accordance with this privacy policy.
            If you disclose to us any personal information relating to other
            people, you represent that you have the authority to do so and to
            permit us to use the information in accordance with this privacy
            policy. While providing your personal information over the website
            or any partner website or establishments, consent to us including
            our other corporate entities, affiliates, lending partners,
            technology partners, marketing channels, business partners and other
            third parties to contact you through SMS, instant messaging apps,
            call and/or e-mail for the purposes specified in this privacy
            policy.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              paddingBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
              color: "#310a10",
              fontWeight: "bold",
            }}
          >
            Changes to this Privacy Policy
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            Please check our Privacy Policy periodically for changes. We may
            update this Privacy Policy to reflect changes to our information
            practices. We will alert you to significant changes by posting the
            date our policy got last updated, placing a notice on our website,
            or by sending you an email when we are required to do so by
            applicable law.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            In accordance with Information Technology Act 2000 and rules made
            there under, the name and contact details of the concerned person
            are provided below:
          </Typography>
          <Box sx={{ padding: "20px 0px" }}>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "#310a10",
                fontWeight: "bold",
              }}
            >
              Mr. Ajay Roy
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "#310a10",
                fontWeight: "bold",
              }}
            >
              Bravit Pharmaceuticals Private Limited
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "#310a10",
                fontWeight: "bold",
                paddingBottom: "20px",
              }}
            >
              506 Sakar East, Beside Gurunanak School, Tarsali, Vadodara 390009
              Gujarat (India)
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Phone:{" "}
              <a
                href="tel:0265-2981413"
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#310a10",
                  fontWeight: "bold",
                }}
              >
                0265-2981413
              </a>
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Email:{" "}
              <a
                href="mailto:bravitpharmaceuticals@gmail.com"
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#310a10",
                  fontWeight: "bold",
                }}
              >
                bravitpharmaceuticals@gmail.com
              </a>
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                fontFamily: "Montserrat, sans-serif",
                paddingBottom: "20px",
              }}
            >
              Time:{" "}
              <label style={{ color: "#310a10", fontWeight: "bold" }}>
                Mon - Sat (9:00 - 18:00)
              </label>
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                fontFamily: "Montserrat, sans-serif",
                paddingBottom: "20px",
              }}
            >
              To contact our customer support, please click here{" "}
              <a
                href="http://www.bravitpharmaceuticals.com."
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#310a10",
                  fontWeight: "bold",
                }}
              >
                www.bravitpharmaceuticals.com
              </a>
            </Typography>
          </Box>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            If you have a query, issue, concern, or complaint in relation to
            collection or usage of your personal information under this Privacy
            Policy, please contact us at the contact information provided above.
          </Typography>
        </Box>
      </Box>
      <Footer />
      <FooterLine />
    </>
  );
};

export default privacy_policy;
