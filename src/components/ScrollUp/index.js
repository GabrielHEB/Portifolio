import { useEffect } from "react";
import $ from "jquery";
import ArrowUp from "@iconscout/react-unicons/icons/uil-arrow-up";

import {
  Container,
  Link
} from "./styles";

function ScrollUp() {
  useEffect(() => {
    $( window ).scroll(function(){
      const position = $('.scrollFlag').offset().top;
      if (position > 800) {
        $('.scrollUp').show(200);
      } else {
        $('.scrollUp').hide(200);
      };
    });
  });

  useEffect(() => {
    $('.scrollUp').hide();
  }, []);

  return (
    <Container>
      <div className="scrollFlag"/>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link href="#" className="scrollUp">
        <ArrowUp />
      </Link>
    </Container>
  );
}
  
export default ScrollUp;
