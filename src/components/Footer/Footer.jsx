import React from "react";
import "./index.css";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  TelegramIcon,
} from "react-share";

const Footer = () => {
  const shareUrl = `https://shestel.com/blog/`;
  const title = "HUAWEI-SGS eKIT DIGITALIZATION LAUNCH";

  return (
    <div className="footer__wrapper">
      <div className="footer--share">
        <FacebookShareButton url={shareUrl} title={title}>
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} title={title}>
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>
        <TelegramShareButton url={shareUrl} title={title}>
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>
      </div>
    </div>
  );
};

export default Footer;
