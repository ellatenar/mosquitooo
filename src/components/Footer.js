import React from "react";

const Link0 = () => <a href="https://heron.zone/">ella heron</a>;
const Link1 = () => <a href="https://www.sunyoungoh.com/">Sun Young Oh</a>;
const Link2 = () => (
  <a href="https://authentic.website/">Christina Janus & Desmond Wong</a>
);

const Footer = () => {
  return (
    <footer>
      site by {<Link0 />}. fonts by {<Link1 />} and {<Link2 />}.
    </footer>
  );
};

export default Footer;
